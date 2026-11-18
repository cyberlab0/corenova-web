"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ExternalLink,
  Layers,
  Database,
  Radio,
  SearchCheck,
  ArrowRight,
  UserCheck,
  Radar,
  Box,
  Maximize2,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const productScreens = [
  {
    id: "ueba",
    tabLabel: "Identity & UEBA",
    route: "sentra-log.vercel.app/dashboard/ueba",
    title: "User Entity Behavior Analytics (UEBA)",
    desc: "Zero-Trust identity telemetry that flags impossible travel (e.g., Lagos to Moscow), abnormal access patterns, and privilege escalation—triggering automated SOAR account suspension.",
    src: "/sentralog-ueba.png",
    icon: <UserCheck size={15} />,
    highlights: ["2 Compromised Accounts Flagged", "99.8% Identity Verification Rate", "Automated SOAR Suspension"],
  },
  {
    id: "soar",
    tabLabel: "Threat Intel & SOAR",
    route: "sentra-log.vercel.app/dashboard/threat-intel",
    title: "Threat Intel & SOAR Containment",
    desc: "Real-time IP and indicator reputation scanner that cross-references global threat feeds and executes automated containment playbooks in one click.",
    src: "/sentralog-soar.png",
    icon: <Radar size={15} />,
    highlights: ["Instant IP Reputation Triage", "Automated Containment Playbooks", "ELI5 Analyst Mode Toggle"],
  },
  {
    id: "sandbox",
    tabLabel: "Detonation Sandbox",
    route: "sentra-log.vercel.app/dashboard/sandbox",
    title: "Malware Detonation Sandbox",
    desc: "Executes suspicious URLs and untrusted payloads inside an isolated hypervisor environment while monitoring file drops, network callbacks, and registry hooks.",
    src: "/sentralog-sandbox.png",
    icon: <Box size={15} />,
    highlights: ["Isolated Hypervisor Execution", "File Drop & Registry Hook Tracing", "Live Sandbox Telemetry Output"],
  },
];

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
    title: "UEBA, SOAR & Sandbox Triage",
    desc: "Behavioral correlation and isolated payload detonation flag anomalies for rapid SOC containment.",
    icon: <SearchCheck size={18} className="text-emerald-400" />,
  },
];

const architectureSpecs = [
  { label: "Platform Role", value: "SIEM, UEBA & SOAR XDR Platform" },
  { label: "Core Stack", value: "Next.js, Python, Go, WebSocket, PostgreSQL" },
  { label: "Modules", value: "Live Threat Map, UEBA, SOAR, Detonation Sandbox" },
  { label: "Status", value: "Live Production Portal" },
];

export function SentralogFlagshipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentScreen = productScreens[activeIndex];

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
              SentraLog XDR &amp; SIEM
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A centralized security intelligence platform combining User Entity Behavior Analytics (UEBA), Threat Intel SOAR playbooks, and an isolated Malware Detonation Sandbox for SOC teams.
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

        {/* Interactive Live Product Screenshot Showcase */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex flex-wrap gap-2">
              {productScreens.map((screen, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                        : "bg-card/70 text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    {screen.icon}
                    <span>{screen.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors self-start sm:self-auto"
            >
              <Maximize2 size={13} />
              <span>Expand Fullscreen</span>
            </button>
          </div>

          {/* Browser / App Frame */}
          <div className="rounded-2xl bg-[#040812] border border-border/80 shadow-2xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B1220] border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground truncate">
                  {currentScreen.route}
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                REAL-TIME ENGINE ACTIVE
              </span>
            </div>

            {/* Screenshot Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentScreen.src}
                  alt={`SentraLog — ${currentScreen.title}`}
                  className="w-full h-auto block select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-black/80 border border-white/20 text-white text-xs font-medium inline-flex items-center gap-2">
                    <Maximize2 size={14} />
                    Click to inspect full resolution
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Caption & Highlights Bar */}
            <div className="p-6 bg-[#0B1220]/90 border-t border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="text-base font-heading font-bold text-foreground">
                  {currentScreen.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {currentScreen.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentScreen.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 rounded-lg bg-background border border-border/70 text-[11px] font-mono text-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
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
              <div
                key={stage.step}
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
              </div>
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full rounded-2xl bg-[#0B1220] border border-border overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60">
                <div>
                  <p className="text-sm font-heading font-bold text-foreground">
                    {currentScreen.title}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    {currentScreen.route}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close fullscreen preview"
                  className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <img
                src={currentScreen.src}
                alt={`SentraLog — ${currentScreen.title}`}
                className="w-full h-auto max-h-[80vh] object-contain bg-[#040812]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
