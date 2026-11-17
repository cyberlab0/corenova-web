"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ExternalLink, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { VelaModal } from "@/components/ui/vela-modal";

export function CyberpunkTelemetry() {
  const [isVelaModalOpen, setIsVelaModalOpen] = useState(false);

  const coreDisciplines = [
    "Threat Detection",
    "SIEM Architecture",
    "Python & Go",
    "Network Security",
    "Cloud Infrastructure",
    "AI Integration",
  ];

  const milestones = [
    {
      period: "Current Focus",
      title: "Building VELA Financial AI Platform",
      desc: "Developing an encrypted financial intelligence and automated wealth assistant designed for cross-border visibility (80% complete).",
      badgeClass: "text-primary border-primary/30 bg-primary/10",
    },
    {
      period: "2026",
      title: "Launched SentraLog SIEM",
      desc: "Architected a centralized real-time SIEM from scratch focused on low-latency log ingestion and practical SOC analyst workflows.",
      badgeClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      period: "2026",
      title: "Security Operations & CAC Incorporation",
      desc: "Incorporated CoreNovaTechnologiesLTD (RC 9697390) while advancing packet analysis, incident response, and threat hunting capabilities.",
      badgeClass: "text-secondary border-secondary/30 bg-secondary/10",
    },
  ];

  const activeSystems = [
    {
      code: "SYSTEM 01",
      title: "SentraLog Engine",
      status: "Production",
      statusClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      desc: "Real-time SIEM and threat detection platform engineered to ingest, parse, and alert on enterprise security events.",
      stack: ["Next.js", "Python", "Go", "WebSocket", "PostgreSQL"],
      executeUrl: "https://sentra-log.vercel.app/login",
      isVela: false,
    },
    {
      code: "SYSTEM 02",
      title: "VELA AI Protocol",
      status: "80% Build",
      statusClass: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      desc: "Intelligent financial and digital automation platform combining encrypted multi-bank telemetry with AI budget analysis.",
      stack: ["AI/ML", "Python", "FastAPI", "React 19"],
      executeUrl: "#vela",
      isVela: true,
    },
  ];

  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-card border border-border/60 relative overflow-hidden shadow-xl">
      <div className="relative z-10 space-y-12">
        {/* Top Row: Engineering Disciplines & Status */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-border/50">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Layers size={18} className="text-primary" />
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Active Engineering Registry
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {coreDisciplines.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-background border border-border/60 text-xs font-mono text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-background border border-border/60 shrink-0">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Platform Availability
              </p>
              <p className="text-sm font-semibold text-foreground">
                99.99% Target SLA &bull; Operational
              </p>
            </div>
          </div>
        </div>

        {/* Middle Row: Engineering Milestones */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
            Engineering Milestones
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="p-6 rounded-2xl bg-background/80 border border-border/60"
              >
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border mb-3 ${item.badgeClass}`}
                >
                  {item.period}
                </span>
                <h3 className="text-base font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Direct Product Launchpad */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
            Flagship R&amp;D Launchpad
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSystems.map((sys, idx) => (
              <motion.div
                key={sys.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="p-7 rounded-2xl bg-background/80 border border-border/60 hover:border-primary/40 transition-colors flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-muted-foreground font-semibold tracking-wider">
                      {sys.code}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${sys.statusClass}`}
                    >
                      {sys.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {sys.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{sys.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {sys.stack.map((mod) => (
                      <span
                        key={mod}
                        className="px-2.5 py-1 rounded-md bg-card border border-border/60 text-[11px] font-mono text-muted-foreground"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {sys.isVela ? (
                  <button
                    type="button"
                    onClick={() => setIsVelaModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Activity size={14} />
                    <span>View VELA Build Status (80%)</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <a
                    href={sys.executeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
                  >
                    <span>Launch SentraLog Portal</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <VelaModal isOpen={isVelaModalOpen} onClose={() => setIsVelaModalOpen(false)} />
    </section>
  );
}
