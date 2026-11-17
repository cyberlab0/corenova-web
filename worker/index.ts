interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetsBinding;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  inquiryType?: "project" | "consultation";
  preferredDate?: string;
  preferredTime?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
  turnstileToken?: string | null;
}

// Per-isolate IP rate limiter (max 5 submissions per 10 minutes)
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function generateTicketId(): string {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()
    .slice(0, 5);
  return `CNV-${new Date().getFullYear()}-${hex}`;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count += 1;
  return true;
}

async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  const form = new URLSearchParams();
  form.set("secret", secret);
  form.set("response", token);
  if (ip && ip !== "unknown") {
    form.set("remoteip", ip);
  }

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });

  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

async function sendResendEmail(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    reply_to?: string;
    subject: string;
    html: string;
  }
): Promise<{ ok: boolean; status: number }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return { ok: res.ok, status: res.status };
}

async function handleContactPost(request: Request, env: Env): Promise<Response> {
  const origin = request.headers.get("origin");
  if (
    origin &&
    !origin.startsWith("https://corenovatechnology.com") &&
    !origin.startsWith("https://www.corenovatechnology.com") &&
    !origin.endsWith(".workers.dev") &&
    !origin.endsWith(".pages.dev") &&
    !origin.startsWith("http://localhost")
  ) {
    return jsonResponse({ ok: false, error: "Forbidden origin." }, 403);
  }

  const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return jsonResponse(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
      429
    );
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 16384) {
    return jsonResponse({ ok: false, error: "Request payload too large." }, 413);
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  // Silent honeypot rejection for automated spam bots
  if (typeof body.honeypot === "string" && body.honeypot.trim().length > 0) {
    return jsonResponse({ ok: true, ticketId: generateTicketId() }, 200);
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const service = (body.service || "General Engineering Inquiry").trim();
  const inquiryType = body.inquiryType === "consultation" ? "consultation" : "project";
  const preferredDate = (body.preferredDate || "").trim();
  const preferredTime = (body.preferredTime || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (name.length < 2 || name.length > 100) {
    return jsonResponse({ ok: false, error: "Please enter a valid full name." }, 400);
  }
  if (!emailRegex.test(email) || email.length > 120) {
    return jsonResponse({ ok: false, error: "Please enter a valid email address." }, 400);
  }
  if (subject.length < 3 || subject.length > 150) {
    return jsonResponse({ ok: false, error: "Please provide a brief subject line." }, 400);
  }
  if (message.length < 10 || message.length > 3000) {
    return jsonResponse(
      { ok: false, error: "Please provide at least 10 characters describing your inquiry." },
      400
    );
  }

  if (env.TURNSTILE_SECRET_KEY) {
    if (!body.turnstileToken) {
      return jsonResponse({ ok: false, error: "Security verification required. Please try again." }, 400);
    }
    const valid = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, body.turnstileToken, ip);
    if (!valid) {
      return jsonResponse({ ok: false, error: "Security verification failed. Please reload and try again." }, 403);
    }
  }

  if (!env.RESEND_API_KEY) {
    return jsonResponse(
      { ok: false, code: "EMAIL_NOT_CONFIGURED", error: "Direct email relay is not configured yet." },
      503
    );
  }

  const ticketId = generateTicketId();
  const toEmail = env.CONTACT_TO_EMAIL || "contact@corenovatechnology.com";
  const fromEmail = env.RESEND_FROM_EMAIL || "CoreNova Technologies Ltd <inquiries@corenovatechnology.com>";
  const typeLabel = inquiryType === "consultation" ? "Discovery Call Request" : "Project Inquiry";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not specified");
  const safeService = escapeHtml(service);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const safeSchedule =
    inquiryType === "consultation" && (preferredDate || preferredTime)
      ? `${escapeHtml(preferredDate || "Flexible date")} (${escapeHtml(preferredTime || "Flexible time WAT")})`
      : null;

  // 1. Send structured notification to CoreNova team
  const internalResult = await sendResendEmail(env.RESEND_API_KEY, {
    from: fromEmail,
    to: [toEmail],
    reply_to: email,
    subject: `[${ticketId}] ${typeLabel}: ${subject}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; background: #0b1220; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="padding: 24px 28px; background: #0f172a; border-bottom: 1px solid #1e293b;">
          <p style="margin: 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #38bdf8; font-weight: 700;">CoreNovaTechnologiesLTD &bull; ${typeLabel}</p>
          <h1 style="margin: 8px 0 0; font-size: 20px; color: #ffffff;">Reference ${ticketId}</h1>
        </div>
        <div style="padding: 24px 28px; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #94a3b8; width: 140px;">Full Name</td><td style="padding: 6px 0; color: #f8fafc; font-weight: 600;">${safeName}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Email</td><td style="padding: 6px 0; color: #38bdf8;">${safeEmail}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Organization</td><td style="padding: 6px 0; color: #f8fafc;">${safeCompany}</td></tr>
            <tr><td style="padding: 6px 0; color: #94a3b8;">Focus Area</td><td style="padding: 6px 0; color: #f8fafc;">${safeService}</td></tr>
            ${safeSchedule ? `<tr><td style="padding: 6px 0; color: #94a3b8;">Preferred Slot</td><td style="padding: 6px 0; color: #34d399; font-weight: 600;">${safeSchedule}</td></tr>` : ""}
            <tr><td style="padding: 6px 0; color: #94a3b8;">Subject</td><td style="padding: 6px 0; color: #f8fafc; font-weight: 600;">${safeSubject}</td></tr>
          </table>
          <div style="padding: 16px; background: #060b14; border: 1px solid #1e293b; border-radius: 12px; color: #e2e8f0;">
            ${safeMessage}
          </div>
        </div>
      </div>
    `,
  });

  if (!internalResult.ok) {
    return jsonResponse(
      { ok: false, error: "Unable to dispatch email at the moment. Please use WhatsApp or direct email." },
      502
    );
  }

  // 2. Send branded auto-reply confirmation receipt to client (best-effort)
  await sendResendEmail(env.RESEND_API_KEY, {
    from: fromEmail,
    to: [email],
    reply_to: toEmail,
    subject: `We received your inquiry (${ticketId}) — CoreNovaTechnologiesLTD`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0b1220; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="padding: 28px; background: #0f172a; border-bottom: 1px solid #1e293b;">
          <p style="margin: 0; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #38bdf8; font-weight: 700;">CORENOVA TECHNOLOGIES LTD &bull; CAC RC 9697390</p>
          <h1 style="margin: 10px 0 0; font-size: 22px; color: #ffffff;">Inquiry Confirmation</h1>
        </div>
        <div style="padding: 28px; font-size: 14px; line-height: 1.7; color: #cbd5e1;">
          <p style="margin-top: 0;">Hello ${safeName},</p>
          <p>Thank you for contacting <strong style="color: #ffffff;">CoreNovaTechnologiesLTD</strong>. Your ${typeLabel.toLowerCase()} has been logged with reference number <strong style="color: #38bdf8;">${ticketId}</strong>.</p>
          <div style="margin: 20px 0; padding: 16px; background: #060b14; border: 1px solid #1e293b; border-radius: 12px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #94a3b8;">SUMMARY</p>
            <p style="margin: 0; color: #ffffff;"><strong>Topic:</strong> ${safeSubject}</p>
            <p style="margin: 4px 0 0; color: #cbd5e1;"><strong>Focus:</strong> ${safeService}</p>
            ${safeSchedule ? `<p style="margin: 4px 0 0; color: #34d399;"><strong>Requested Slot:</strong> ${safeSchedule}</p>` : ""}
          </div>
          <p>An engineering lead will review your brief and respond within <strong>24 business hours</strong>. For urgent matters, you may reply directly to this email or message us on WhatsApp at <strong style="color: #ffffff;">+234 913 181 5101</strong>.</p>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
          <p style="margin: 0; font-size: 12px; color: #64748b;">
            CoreNovaTechnologiesLTD (Private Company Limited by Shares &bull; CAC RC 9697390)<br/>
            Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria<br/>
            https://corenovatechnology.com
          </p>
        </div>
      </div>
    `,
  });

  return jsonResponse({ ok: true, ticketId }, 200);
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. Enforce strict HTTPS redirection (same-host HTTPS first, then apex domain)
    if (
      url.protocol === "http:" &&
      (url.hostname === "corenovatechnology.com" || url.hostname === "www.corenovatechnology.com")
    ) {
      return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
    }

    if (url.protocol === "https:" && url.hostname === "www.corenovatechnology.com") {
      return Response.redirect(`https://corenovatechnology.com${url.pathname}${url.search}`, 301);
    }

    // 2. Real server-side Contact & Consultation API
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      if (request.method === "POST") {
        return handleContactPost(request, env);
      }
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204 });
      }
      return jsonResponse({ ok: false, error: "Method not allowed." }, 405);
    }

    // 3. Serve static Next.js build output from ./out
    return env.ASSETS.fetch(request);
  },
};

export default worker;
