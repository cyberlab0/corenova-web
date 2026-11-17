"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Building2,
  UserCheck,
  Printer,
  ArrowRight,
  CheckCircle2,
  Server,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";

const securityControls = [
  {
    title: "Transport & Edge Encryption",
    status: "Enforced",
    desc: "TLS 1.3 encryption in transit paired with 2-year HTTP Strict Transport Security (HSTS preload) and automatic HTTPS redirection.",
  },
  {
    title: "Strict Content Security Policy (CSP)",
    status: "Active",
    desc: "Restrictive CSP header blocking unauthorized script execution, plugin objects (object-src 'none'), clickjacking (frame-ancestors 'none'), and mixed content.",
  },
  {
    title: "Edge Bot & Abuse Mitigation",
    status: "Active",
    desc: "Cloudflare Edge WAF, Turnstile cryptographic bot verification, honeypot trapping, and IP-scoped rate limiting on all inquiry endpoints.",
  },
  {
    title: "Zero-Secret Frontend Architecture",
    status: "Verified",
    desc: "Zero private keys, database credentials, or server secrets exist in browser bundles. Production source maps and debug console logs are stripped.",
  },
  {
    title: "NDPA / NDPR Data Governance",
    status: "Aligned",
    desc: "Strict data minimization, explicit Consent Mode v2 analytics gating, encrypted relay pipelines, and documented retention boundaries.",
  },
  {
    title: "Responsible Vulnerability Disclosure",
    status: "RFC 9116",
    desc: "Machine-readable security contact published at /.well-known/security.txt for coordinated disclosure and rapid triage.",
  },
];

const capabilityPillars = [
  {
    title: "AI & Workflow Automation",
    items: ["Document & operational pipeline automation", "Custom LLM integrations & internal copilots", "Financial telemetry & anomaly alerts (VELA)"],
  },
  {
    title: "Cybersecurity & Threat Defense",
    items: ["Real-time SIEM log ingestion & correlation (SentraLog)", "Vulnerability assessments & security architecture audits", "Zero-Trust IAM, WAF hardening & incident readiness"],
  },
  {
    title: "Enterprise Software & Infrastructure",
    items: ["High-availability Next.js, TypeScript & Go platforms", "Cloud architecture, data storage & migration", "NDPR/HIPAA-aligned portals & mobile ecosystems"],
  },
];

export default function TrustCenterPage() {
  const handlePrintProfile = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-border/50 mb-14"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-5">
              <ShieldCheck size={14} />
              Trust, Compliance &amp; Corporate Dossier
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-5">
              CoreNova{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Trust Center
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Verified corporate registration credentials, security engineering controls, and regulatory governance standards for enterprise clients, partners, and procurement teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={handlePrintProfile}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors shadow-lg shadow-primary/20"
            >
              <Printer size={16} />
              <span>Download / Print Company Profile</span>
            </button>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/40 text-foreground text-sm font-semibold transition-colors"
            >
              <span>Request Security Questionnaire</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Official Corporate Registry Card */}
        <section className="mb-16">
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-primary/30 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border/50">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  Corporate Registry Summary
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-1">
                  CoreNovaTechnologiesLTD
                </h2>
              </div>
              <div className="px-4 py-2 rounded-xl bg-background border border-primary/30 font-mono text-sm font-bold text-primary">
                CAC REG. NO: RC 9697390
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-4 rounded-2xl bg-background/80 border border-border/60">
                <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-2">
                  <Building2 size={14} />
                  <span>Legal Entity</span>
                </div>
                <p className="text-sm font-semibold text-foreground">CoreNovaTechnologiesLTD</p>
                <p className="text-xs text-muted-foreground mt-1">Private Company Limited by Shares</p>
              </div>

              <div className="p-4 rounded-2xl bg-background/80 border border-border/60">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <FileCheck2 size={14} />
                  <span>Registration</span>
                </div>
                <p className="text-sm font-semibold text-foreground">RC 9697390</p>
                <p className="text-xs text-muted-foreground mt-1">Corporate Affairs Commission (CAC), Nigeria</p>
              </div>

              <div className="p-4 rounded-2xl bg-background/80 border border-border/60">
                <div className="flex items-center gap-2 text-secondary text-xs font-mono uppercase tracking-wider mb-2">
                  <UserCheck size={14} />
                  <span>Ownership</span>
                </div>
                <p className="text-sm font-semibold text-foreground">100% Founder-Owned</p>
                <p className="text-xs text-muted-foreground mt-1">Michael Olowoselu holds all issued shares</p>
              </div>

              <div className="p-4 rounded-2xl bg-background/80 border border-border/60">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <MapPin size={14} />
                  <span>Registered Office</span>
                </div>
                <p className="text-sm font-semibold text-foreground">Osogbo, Osun State</p>
                <p className="text-xs text-muted-foreground mt-1">Kobo Street, Along Ikirun Road, Nigeria</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture & Controls */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Security Controls &amp; Architecture</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              Defense-in-depth practices enforced across CoreNova web properties and client engineering deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityControls.map((ctrl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border/60 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Lock size={18} className="text-primary shrink-0" />
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
                      {ctrl.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">
                    {ctrl.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ctrl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Capability Summary (Great for Print/PDF) */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Enterprise Capability Summary</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              Core engineering divisions delivered by CoreNovaTechnologiesLTD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilityPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Server size={18} />
                  <h3 className="font-heading font-bold text-lg text-foreground">{pillar.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Disclosure & Legal Links */}
        <section className="p-8 rounded-3xl bg-card border border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              <Globe size={14} />
              <span>Responsible Security Disclosure</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">
              Security Researchers &amp; Compliance Inquiries
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Report potential vulnerabilities or request formal NDPR / vendor due-diligence documentation directly via{" "}
              <a href="mailto:contact@corenovatechnology.com" className="text-primary hover:underline font-medium">
                contact@corenovatechnology.com
              </a>{" "}
              or review our RFC 9116 policy at{" "}
              <a href="/.well-known/security.txt" className="font-mono text-xs text-foreground underline">
                /.well-known/security.txt
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-3 print:hidden">
            <Link
              href="/legal/security-statement"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border text-xs font-semibold hover:border-primary/40 transition-colors"
            >
              <span>Security Statement</span>
            </Link>
            <Link
              href="/legal/ndpr"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border text-xs font-semibold hover:border-primary/40 transition-colors"
            >
              <span>NDPR Notice</span>
            </Link>
            <a
              href="mailto:contact@corenovatechnology.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail size={14} />
              <span>Contact Security Desk</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
