"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Shield,
  Layers,
  Cloud,
  CheckCircle2,
  Clock,
  ArrowRight,
  Compass,
} from "lucide-react";

type TrackKey = "ai" | "security" | "software" | "cloud";
type ScaleKey = "sme" | "midmarket" | "enterprise";

const tracks: Record<
  TrackKey,
  {
    label: string;
    icon: React.ReactNode;
    stack: string[];
    deliverables: string[];
    securityBaseline: string[];
    timelines: Record<ScaleKey, string>;
  }
> = {
  ai: {
    label: "AI & Workflow Automation",
    icon: <Cpu size={18} className="text-primary" />,
    stack: ["Python / FastAPI", "LLM Orchestration", "PostgreSQL + pgvector", "Encrypted Webhooks"],
    deliverables: [
      "Automated document & data-entry pipelines",
      "Internal AI operations assistant with strict RBAC",
      "Audit logging & human-in-the-loop approval gates",
    ],
    securityBaseline: ["Zero training on client data", "256-bit TLS/at-rest encryption", "NDPR privacy boundaries"],
    timelines: { sme: "3 – 5 Weeks", midmarket: "5 – 8 Weeks", enterprise: "8 – 14 Weeks" },
  },
  security: {
    label: "Cybersecurity & SIEM Defense",
    icon: <Shield size={18} className="text-emerald-400" />,
    stack: ["SentraLog SIEM Engine", "Cloudflare WAF", "Zero-Trust IAM", "Automated Alerting"],
    deliverables: [
      "Full infrastructure & web application vulnerability audit",
      "Centralized real-time log ingestion & threat correlation",
      "Incident response runbook & executive compliance report",
    ],
    securityBaseline: ["OWASP ASVS verification", "CSP / HSTS edge hardening", "Continuous anomaly monitoring"],
    timelines: { sme: "2 – 3 Weeks", midmarket: "4 – 6 Weeks", enterprise: "6 – 10 Weeks" },
  },
  software: {
    label: "Custom Web & Mobile Platform",
    icon: <Layers size={18} className="text-secondary" />,
    stack: ["Next.js / TypeScript", "Go / Node.js API", "PostgreSQL + Redis", "Cloudflare Edge"],
    deliverables: [
      "Production-grade web or cross-platform mobile application",
      "Role-based admin dashboard & telemetry reporting",
      "Automated CI/CD deployment & zero-downtime staging",
    ],
    securityBaseline: ["Input sanitization & CSRF/XSS defense", "Rate-limited edge APIs", "Encrypted authentication"],
    timelines: { sme: "4 – 6 Weeks", midmarket: "6 – 10 Weeks", enterprise: "10 – 16 Weeks" },
  },
  cloud: {
    label: "Cloud & Data Infrastructure",
    icon: <Cloud size={18} className="text-amber-400" />,
    stack: ["AWS / Azure / Cloudflare", "Docker & IaC", "Encrypted Backups", "Observability Stack"],
    deliverables: [
      "Resilient multi-region data storage & backup topology",
      "Automated failover, disaster recovery & cost optimization",
      "Centralized observability, uptime SLA & access governance",
    ],
    securityBaseline: ["Least-privilege IAM policies", "Encrypted backup snapshots", "Sovereign data residency options"],
    timelines: { sme: "2 – 4 Weeks", midmarket: "4 – 7 Weeks", enterprise: "7 – 12 Weeks" },
  },
};

const scales: { key: ScaleKey; label: string; sub: string }[] = [
  { key: "sme", label: "Startup / Growing SME", sub: "1 – 50 staff" },
  { key: "midmarket", label: "Mid-Market", sub: "50 – 250 staff" },
  { key: "enterprise", label: "Enterprise / Regulated", sub: "250+ staff or high compliance" },
];

export function ScopeEstimatorSection() {
  const [selectedTrack, setSelectedTrack] = useState<TrackKey>("security");
  const [selectedScale, setSelectedScale] = useState<ScaleKey>("midmarket");

  const active = tracks[selectedTrack];
  const timeline = active.timelines[selectedScale];

  const handleApplyToContact = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("corenova:prefill-inquiry", {
          detail: {
            service: active.label,
            subject: `${active.label} (${scales.find((s) => s.key === selectedScale)?.label})`,
            inquiryType: "consultation",
          },
        })
      );
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 relative bg-background border-t border-border/50 w-full">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            <Compass size={13} />
            Architecture Planner
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-4">
            Scope Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Technical Roadmap
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Select your operational priority and organization scale to preview a tailored CoreNova engineering stack, security baseline, and estimated delivery window.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-card border border-border/60 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                1. Primary Engineering Track
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {(Object.keys(tracks) as TrackKey[]).map((key) => {
                  const t = tracks[key];
                  const isActive = selectedTrack === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedTrack(key)}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                        isActive
                          ? "bg-primary/10 border-primary/50 text-foreground shadow-sm"
                          : "bg-background/60 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-background border border-border/60 flex items-center justify-center shrink-0">
                        {t.icon}
                      </div>
                      <span className="text-sm font-semibold">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border/60 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                2. Organization Scale
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                {scales.map((s) => {
                  const isActive = selectedScale === s.key;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setSelectedScale(s.key)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        isActive
                          ? "bg-secondary/10 border-secondary/50 text-foreground"
                          : "bg-background/60 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      <p className="text-sm font-semibold">{s.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Blueprint Output */}
          <motion.div
            key={`${selectedTrack}-${selectedScale}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-card border border-primary/30 shadow-2xl space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/50">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  Recommended Engineering Blueprint
                </p>
                <h3 className="text-2xl font-heading font-bold text-foreground mt-1">
                  {active.label}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border/60">
                <Clock size={15} className="text-secondary" />
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground leading-none">
                    Est. Delivery
                  </p>
                  <p className="text-sm font-bold text-foreground mt-0.5">{timeline}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  Core Deliverables
                </p>
                <ul className="space-y-2.5">
                  {active.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  Built-In Security Baseline
                </p>
                <ul className="space-y-2.5">
                  {active.securityBaseline.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Shield size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Reference Architecture Stack
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-background border border-border/60 text-xs font-mono text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={handleApplyToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm transition-colors shadow-lg shadow-primary/20"
              >
                <span>Book Discovery Call With This Scope</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
