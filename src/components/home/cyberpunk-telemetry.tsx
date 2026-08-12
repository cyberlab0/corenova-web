"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Activity, Cpu, Play, CheckCircle, Flame, Layers } from "lucide-react";
import { VelaModal } from "@/components/ui/vela-modal";

export function CyberpunkTelemetry() {
  const [isVelaModalOpen, setIsVelaModalOpen] = useState(false);

  const dashboardBadges = [
    "Threat Detection",
    "Python",
    "Networking",
    "Cloud",
    "AI Integration",
    "SIEM Architecture",
  ];

  const timelineEntries = [
    {
      badge: "[PRESENT]",
      title: "Building VELA Protocol",
      desc: "Developing an AI-driven threat intelligence and digital security life assistant.",
      statusColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    },
    {
      badge: "[2026]",
      title: "Founded SentraLog",
      desc: "Architected a real-time SIEM from scratch focused on raw speed and analyst workflows.",
      statusColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
    {
      badge: "[2026]",
      title: "SOC Analyst Training",
      desc: "Currently mastering packet analysis, incident response, and threat hunting methodologies.",
      statusColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    },
  ];

  const missionFiles = [
    {
      id: "FILE_ID: 001ACTIVE",
      title: "SentraLog Engine",
      badgeText: "ACTIVE",
      badgeStyle: "text-emerald-400 border-emerald-500/50 bg-emerald-500/10",
      desc: "A real-time SIEM and Threat Detection platform built to ingest, analyze, and alert on thousands of security events per second.",
      modules: ["Next.js", "Python", "Go", "WebSocket", "PostgreSQL"],
      executeUrl: "https://sentralog.onrender.com/login",
      isVela: false,
    },
    {
      id: "FILE_ID: 002BUILDING",
      title: "VELA AI Protocol",
      badgeText: "BUILDING",
      badgeStyle: "text-cyan-400 border-cyan-500/50 bg-cyan-500/10",
      desc: "An AI system designed to connect, analyze, and automate digital security life. Neural parsing of threat intelligence feeds.",
      modules: ["AI/ML", "Python", "TensorFlow", "React"],
      executeUrl: "#vela",
      isVela: true,
    },
  ];

  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-black/90 border border-cyan-500/30 font-mono relative overflow-hidden shadow-2xl shadow-cyan-950/40">
      {/* Background Cyberpunk Ambient Glow & Grid Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header Telemetry Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <Terminal className="text-cyan-400 animate-pulse" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Live Dashboard<span className="text-cyan-400 animate-ping">_</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              UPTIME: 99.99%
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
              <Activity size={12} className="animate-spin" />
              SYSTEM_NORMAL
            </span>
          </div>
        </div>

        {/* Dashboard Badges Marquee Grid */}
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
            <Layers size={14} /> Telemetry Modules Active
          </p>
          <div className="flex flex-wrap gap-2.5">
            {dashboardBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner shadow-cyan-500/10 hover:border-cyan-400 transition-colors"
              >
                # {badge}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Mission Timeline_ */}
        <div className="pt-4 border-t border-cyan-500/20">
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Activity className="text-cyan-400" size={18} />
            Mission Timeline<span className="text-cyan-400">_</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timelineEntries.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors relative"
              >
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${item.statusColor} inline-block mb-3`}>
                  {item.badge}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Files_ Cards Grid */}
        <div className="pt-4 border-t border-cyan-500/20">
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Flame className="text-cyan-400" size={18} />
            Mission Files<span className="text-cyan-400">_</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {missionFiles.map((file, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none rounded-full" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider">
                      {file.id}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${file.badgeStyle}`}>
                      {file.badgeText}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {file.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {file.desc}
                  </p>

                  <div className="mb-6 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-2">
                      MODULES_LOADED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {file.modules.map((mod, mIdx) => (
                        <span key={mIdx} className="px-2 py-0.5 rounded bg-black border border-cyan-500/20 text-[10px] text-slate-300">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {file.isVela ? (
                  <button
                    onClick={() => setIsVelaModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-xs transition-all uppercase tracking-widest shadow-lg shadow-cyan-500/10"
                  >
                    <Play size={12} className="fill-current" />
                    [EXECUTE FILE]
                  </button>
                ) : (
                  <a
                    href={file.executeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-xs transition-all uppercase tracking-widest shadow-lg shadow-cyan-500/10"
                  >
                    <Play size={12} className="fill-current" />
                    [EXECUTE FILE]
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive VELA Status Modal */}
      <VelaModal isOpen={isVelaModalOpen} onClose={() => setIsVelaModalOpen(false)} />
    </section>
  );
}
