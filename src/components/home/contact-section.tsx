"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Copy, Check, Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { LocationMapCard } from "@/components/ui/location-map-card";

const CONTACT_EMAIL = "contact@corenovatechnology.com";
const WHATSAPP_NUMBER = "2349131815101";

export function ContactSection() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileUnavailable, setTurnstileUnavailable] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const buildFormattedBrief = () =>
    [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subject.trim()}`,
      "",
      "Project Details:",
      message.trim(),
    ].join("\n");

  const getMailtoHref = () => {
    const mailSubject = encodeURIComponent(`[CoreNova Inquiry] ${subject.trim()}`);
    const mailBody = encodeURIComponent(buildFormattedBrief());
    return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  };

  const getWhatsAppHref = () => {
    const text = encodeURIComponent(
      `Hello CoreNovaTechnologiesLTD,\n\n${buildFormattedBrief()}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Silent honeypot trap for automated spam bots
    if (honeypot.trim().length > 0) {
      setFormStatus("sent");
      return;
    }

    if (!name.trim() || !email.trim() || !subject.trim() || message.trim().length < 10) {
      setErrorMessage("Please complete all fields with at least 10 characters in your message.");
      return;
    }

    if (!turnstileToken && !turnstileUnavailable) {
      setErrorMessage("Security verification is still completing—please wait a moment and click Send again.");
      return;
    }

    // Open the visitor's email client with the pre-filled inquiry and show instant WhatsApp/Copy options
    setFormStatus("sent");
    if (typeof window !== "undefined") {
      window.location.href = getMailtoHref();
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
    setErrorMessage(null);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-32 relative bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Let&apos;s Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-12 max-w-md"
            >
              Whether you need to automate your operations, secure your infrastructure, or build a custom web application, our engineering team is ready to help.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Email Us", detail: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: <Phone />, title: "Call Us", detail: "+234 913 181 5101", href: "tel:+2349131815101" },
                { icon: <MessageCircle />, title: "WhatsApp", detail: "+234 913 181 5101", href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: <MapPin />, title: "Visit Us (CAC RC 9697390)", detail: "Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria", href: null },
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-background border border-border/50 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient glow inside form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] pointer-events-none rounded-full" />

            {formStatus === "sent" ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-10 gap-5">
                <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold">Inquiry Ready to Dispatch</h3>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Your email client has been opened with your project brief addressed to{" "}
                  <span className="text-foreground font-medium">{CONTACT_EMAIL}</span>. You can also send it directly on WhatsApp for the fastest response.
                </p>

                <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={getMailtoHref()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors"
                  >
                    <Send size={15} />
                    <span>Open Email App</span>
                  </a>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedBrief ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedBrief ? "Brief Copied" : "Copy Project Brief"}</span>
                  </button>
                  <span className="text-border">|</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-primary hover:underline"
                  >
                    Write another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    maxLength={150}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="AI Automation, Security Audit, or Web Platform"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={3000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2.5">
                    {errorMessage}
                  </p>
                )}

                {/* Cloudflare Turnstile - Invisible bot protection */}
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

                <MagneticButton className="w-full mt-2">
                  Send Project Inquiry
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
              Use the interactive map below to preview our registered office in Osogbo, switch to satellite or OpenStreetMap view, copy our address, or launch instant GPS directions.
            </p>
          </div>
          <LocationMapCard showBookAppointment={false} />
        </div>
      </div>
    </section>
  );
}
