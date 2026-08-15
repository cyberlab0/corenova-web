import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple in-memory rate limiter for Edge (stops basic spam)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export function proxy(request: NextRequest) {
  // 1. Rate Limiting for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (record) {
      if (now - record.timestamp < RATE_LIMIT_WINDOW) {
        if (record.count >= RATE_LIMIT) {
          return new NextResponse("Too Many Requests", { status: 429 });
        }
        record.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }
  }

  // 2. Content Security Policy (CSP) & Security Headers
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  
  // Define allowed domains including all Sentry ingest subdomains and Replay blob workers
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com https://browser.sentry-cdn.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.google-analytics.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://challenges.cloudflare.com;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.sentry.io https://*.ingest.sentry.io https://*.ingest.de.sentry.io;
    worker-src 'self' blob:;
    upgrade-insecure-requests;
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );
  
  // Other strict security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static assets
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
