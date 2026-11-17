"use client";

import { ShieldCheck, Cpu, Lock, Globe } from "lucide-react";

export function BrandBannerCard() {
  return (
    <div className="aspect-[4/5] rounded-3xl bg-[#060B14] border border-primary/30 overflow-hidden relative group shadow-2xl flex flex-col justify-between p-8 sm:p-10 select-none">
      {/* Precision architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_65%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Subtle corporate ambient gradients */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/15 blur-[100px] pointer-events-none rounded-full" />

      {/* Top Official Verification Bar */}
      <div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-white/10">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          <ShieldCheck size={14} />
          CAC Registered
        </span>
        <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-mono font-bold tracking-wider">
          RC 9697390
        </span>
      </div>

      {/* Center Official Company Logo Mark & Wordmark */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-8">
        <div className="relative mb-7">
          <div className="absolute inset-0 bg-primary/25 blur-2xl rounded-full scale-125 pointer-events-none" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0B1220] border border-primary/40 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <img
              src="/corenova-icon.svg"
              alt="CoreNovaTechnologiesLTD Official Emblem"
              className="w-14 h-14 sm:w-16 sm:h-16 pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
          CORENOVA
        </h3>
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.28em] text-cyan-400/90 mt-1.5">
          Technologies Ltd
        </p>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent my-6" />

        <p className="text-xs sm:text-sm text-slate-300/90 max-w-xs leading-relaxed">
          Private Company Limited by Shares &bull; Engineering AI Automation, Cyber Defense &amp; Enterprise Digital Infrastructure.
        </p>
      </div>

      {/* Bottom Capabilities Strip */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-5 border-t border-white/10 text-center">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center gap-1">
          <Cpu size={14} className="text-primary" />
          <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">AI Systems</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center gap-1">
          <Lock size={14} className="text-cyan-400" />
          <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Cyber Defense</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center gap-1">
          <Globe size={14} className="text-emerald-400" />
          <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
