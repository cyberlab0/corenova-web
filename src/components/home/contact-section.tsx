"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Copy,
  Check,
  Send,
  Calendar,
  FileText,
  Loader2,
} from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { LocationMapCard } from "@/components/ui/location-map-card";

const CONTACT_EMAIL = "contact@corenovatechnology.com";
const WHATSAPP_NUMBER = "2349131815101";

const SERVICE_OPTIONS = [
  "AI & Workflow Automation",
  "Cybersecurity & SIEM Defense",
  "Custom Web & Mobile Platform",
  "Cloud & Data Infrastructure",
  "Executive Technology Advisory",
];

const TIME_WINDOWS = [
  "Morning (09:00 – 12:00 WAT)",
  "Afternoon (12:00 – 16:00 WAT)",
  "Evening (16:00 – 18:30 WAT)",
];

export function ContactSection() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileUnavailable, setTurnstileUnavailable] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const [inquiryType, setInquiryType] = useState<"project" | "consultation">("project");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState(TIME_WINDOWS[0]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const detail = (event as CustomEvent<{
        service?: string;
        subject?: string;
        inquiryType?: "project" | "consultation";
      }>).detail;
      if (!detail) return;
      if (detail.inquiryType) setInquiryType(detail.inquiryType);
      if (detail.service && SERVICE_OPTIONS.includes(detail.service)) {
        setService(detail.service);
      }
      if (detail.subject) setSubject(detail.subject);
      setFormStatus("idle");
    };

    window.addEventListener("corenova:prefill-inquiry", handlePrefill);
    return () => window.removeEventListener("corenova:prefill-inquiry", handlePrefill);
  }, []);

  const buildFormattedBrief = () => {
    const lines = [
      `Inquiry Type: ${inquiryType === "consultation" ? "Discovery Call Request" : "Project Inquiry"}`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Organization: ${company.trim() || "Not specified"}`,
      `Focus Area: ${service}`,
    ];
    if (inquiryType === "consultation" && preferredDate) {
      lines.push(`Preferred Call Slot: ${preferredDate} (${preferredTime})`);
    }
    lines.push(`Subject: ${subject.trim()}`, "", "Project Details:", message.trim());
    return lines.join("\n");
  };

  const getMailtoHref = () => {
    const mailSubject = encodeURIComponent(`[CoreNova Inquiry] ${subject.trim()}`);
    const mailBody = encodeURIComponent(buildFormattedBrief());
    return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  };

  const getWhatsAppHref = () => {
    const prefix = ticketId ? `Hello CoreNovaTechnologiesLTD (Ref: ${ticketId}),` : "Hello CoreNovaTechnologiesLTD,";
    const text = encodeURIComponent(`${prefix}\n\n${buildFormattedBrief()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (honeypot.trim().length > 0) {
      setFormStatus("sent");
      return;
    }

    if (!name.trim() || !email.trim() || !subject.trim() || message.trim().length < 10) {
      setErrorMessage("Please complete all required fields with at least 10 characters in your brief.");
      return;
    }

    if (!turnstileToken && !turnstileUnavailable) {
      setErrorMessage("Security check is still completing—please wait a moment and try again.");
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          inquiryType,
          preferredDate,
          preferredTime,
          subject,
          message,
          honeypot,
          turnstileToken,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        ticketId?: string;
        code?: string;
        error?: string;
      };

      if (response.ok && data.ok) {
        setTicketId(data.ticketId || null);
        setFormStatus("sent");
        return;
      }

      if (response.status === 503 || response.status === 404 || data.code === "EMAIL_NOT_CONFIGURED") {
        // Worker secret not yet configured or static preview: seamlessly fall back to direct email & WhatsApp
        setFormStatus("fallback");
        if (typeof window !== "undefined") {
          window.location.href = getMailtoHref();
        }
        return;
      }

      setFormStatus("idle");
      setErrorMessage(data.error || "Unable to send inquiry right now. Please try WhatsApp or direct email.");
    } catch {
      setFormStatus("fallback");
      if (typeof window !== "undefined") {
        window.location.href = getMailtoHref();
      }
    }
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildFormattedBrief());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  const handleReset = () => {
    setFormStatus("idle");
    setTicketId(null);
    setErrorMessage(null);
    setName("");
    setEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
    setPreferredDate("");
  };

  return (
    <section id="contact" className="py-32 relative bg-card border-t border-border/50 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Let&apos;s Build The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Future Together
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-12 max-w-md"
            >
              Submit a project brief or request a structured discovery call. Every inquiry receives a tracked reference ID and an engineering response within 24 business hours.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Direct Engineering Desk", detail: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: <Phone />, title: "Telephone", detail: "+234 913 181 5101", href: "tel:+2349131815101" },
                { icon: <MessageCircle />, title: "WhatsApp Direct", detail: "+234 913 181 5101", href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: <MapPin />, title: "Registered Office (CAC RC 9697390)", detail: "Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria", href: null },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-background border border-border/60 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] pointer-events-none rounded-full" />

            {formStatus === "sent" || formStatus === "fallback" ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-10 gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <CheckCircle size={34} />
                </div>

                {ticketId && (
                  <span className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-wider">
                    TICKET REF: {ticketId}
                  </span>
                )}

                <h3 className="text-2xl font-heading font-bold">
                  {formStatus === "sent" ? "Inquiry Logged & Confirmation Sent" : "Inquiry Ready to Dispatch"}
                </h3>

                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  {formStatus === "sent" ? (
                    <>
                      We delivered your brief to <span className="text-foreground font-medium">{CONTACT_EMAIL}</span> and sent a confirmation receipt to{" "}
                      <span className="text-foreground font-medium">{email}</span>. Expect an engineering response within 24 hours.
                    </>
                  ) : (
                    <>
                      Your email client has been opened with your formatted brief for <span className="text-foreground font-medium">{CONTACT_EMAIL}</span>. You can also dispatch it instantly on WhatsApp.
                    </>
                  )}
                </p>

                <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Fast-Track on WhatsApp</span>
                  </a>
                  {formStatus === "fallback" && (
                    <a
                      href={getMailtoHref()}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors"
                    >
                      <Send size={15} />
                      <span>Open Email App</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedBrief ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedBrief ? "Brief Copied" : "Copy Brief"}</span>
                  </button>
                  <span className="text-border">|</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-primary hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="relative z-10 flex flex-col gap-5" onSubmit={handleSubmit}>
                {/* Mode Toggle: Project Brief vs Book Discovery Call */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-card border border-border/60">
                  <button
                    type="button"
                    onClick={() => setInquiryType("project")}
                    className={`inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
                      inquiryType === "project"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <FileText size={14} />
                    <span>Project Inquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("consultation")}
                    className={`inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
                      inquiryType === "consultation"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Calendar size={14} />
                    <span>Book Discovery Call</span>
                  </button>
                </div>

                {/* Invisible anti-bot honeypot */}
                <input
                  type="text"
                  name="companyWebsite"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Adebayo Adeyemi"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      maxLength={120}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Company or Agency Name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Focus Area
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0B1220] text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {inquiryType === "consultation" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredDate" className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="bg-background border border-border/60 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredTime" className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Preferred Window (WAT)
                      </label>
                      <select
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="bg-background border border-border/60 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {TIME_WINDOWS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#0B1220] text-foreground">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    maxLength={150}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Brief summary of what you want to build or secure"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Brief / Objectives *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={3000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-card border border-border/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Share your operational goals, security requirements, or timeline..."
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2.5">
                    {errorMessage}
                  </p>
                )}

                <Turnstile
                  siteKey="0x4AAAAAAEN-gOKJwNA765T7"
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setTurnstileUnavailable(false);
                  }}
                  onError={() => {
                    setTurnstileToken(null);
                    setTurnstileUnavailable(true);
                  }}
                  onExpire={() => setTurnstileToken(null)}
                  options={{ theme: "dark", size: "invisible" }}
                />

                <MagneticButton className="w-full mt-1" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Dispatching Inquiry...</span>
                    </span>
                  ) : inquiryType === "consultation" ? (
                    "Request Discovery Call"
                  ) : (
                    "Submit Project Inquiry"
                  )}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>

        {/* Interactive Company Location & Free Office Locator */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                <MapPin size={13} />
                Interactive Office Locator
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mt-3">
                Find CoreNovaTechnologiesLTD on the Map
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Preview our registered office in Osogbo, switch to satellite or OpenStreetMap view, copy our address, or launch instant GPS directions.
            </p>
          </div>
          <LocationMapCard showBookAppointment={false} />
        </div>
      </div>
    </section>
  );
}
