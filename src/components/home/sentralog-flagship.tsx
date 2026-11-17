"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Layers, Database, Radio, SearchCheck, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const pipelineStages = [
  {
    step: "01",
    title: "Log & Telemetry Collection",
    desc: "Ingests structured syslog, endpoint events, firewall trails, and cloud audit logs over encrypted streams.",
    icon: <Radio size={18} className="text-primary" />,
  },
  {
    step: "02",
    title: "Real-Time Parsing & Normalization",
    desc: "Go & Python workers normalize heterogeneous event formats into queryable security schemas with sub-second indexing.",
    icon: <Database size={18} className="text-secondary" />,
  },
  {
    step: "03",
    title: "Threat Detection & Sandbox Triage",
    desc: "Rule-based correlation and isolated payload inspection flag anomalies for rapid SOC analyst containment.",
    icon: <SearchCheck size={18} className="text-emerald-400" />,
  },
];

const architectureSpecs = [
  { label: "Platform Role", value: "Centralized SIEM & Threat Detection" },
  { label: "Core Stack", value: "Next.js, Python, Go, WebSocket, PostgreSQL" },
  { label: "Deployment Model", value: "Cloud / Self-Hosted SOC Ready" },
  { label: "Status", value: "Live Production Portal" },
];

export function SentralogFlagshipSection() {
  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-[#070D19] border border-border/70 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[420px] h-[260px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-border/50">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold uppercase tracking-widest mb-4">
              <ShieldCheck size={14} />
              Flagship Security Platform
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-3">
              SentraLog SIEM
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A centralized security intelligence system that collects, parses, and correlates logs in real time—engineered specifically for SOC analysts to detect and contain threats without alert fatigue.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://sentra-log.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors shadow-lg shadow-primary/20"
            >
              <span>Open Live Portal</span>
              <ExternalLink size={15} />
            </a>
            <a
              href="https://github.com/cyberlab0/SentraLog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/70 hover:border-primary/40 text-foreground font-semibold text-sm transition-colors"
            >
              <FaGithub size={16} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Architecture Pipeline Diagram */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
            <Layers size={14} className="text-primary" />
            <span>System Ingestion &amp; Detection Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="p-6 rounded-2xl bg-card/60 border border-border/60 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border/70 flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      STAGE {stage.step}
                    </span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>

                {idx < pipelineStages.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#070D19] border border-border/70 items-center justify-center text-muted-foreground">
                    <ArrowRight size={13} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-background/80 border border-border/50">
          {architectureSpecs.map((spec) => (
            <div key={spec.label} className="space-y-1">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {spec.label}
              </p>
              <p className="text-sm font-semibold text-foreground">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
