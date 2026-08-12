"use client";

import { motion } from "framer-motion";
import { Lock, ShieldAlert, Activity, EyeOff, Terminal, Zap, ArrowRight } from "lucide-react";

interface ProveltFlagshipProps {
  onOpenModal: () => void;
}

export function ProveltFlagshipSection({ onOpenModal }: ProveltFlagshipProps) {
  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-[#120B0B] border border-amber-500/30 font-sans relative overflow-hidden shadow-2xl shadow-amber-950/40">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-red-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Column */}
          <div className="space-y-4 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <ShieldAlert size={14} className="animate-pulse" />
              CLASSIFIED UNTIL RELEASED // WEB & MOBILE ECOSYSTEM
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
              PROVELT<span className="text-amber-400 font-mono text-xl sm:text-2xl ml-3 font-normal">[STEALTH MODE]</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Next-generation classified web & mobile application ecosystem. Operating under Level 5 security clearance until official public debut.
            </p>

            {/* 50% Progress Gauge */}
            <div className="p-4 rounded-2xl bg-black/80 border border-amber-500/20 max-w-md">
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
                <span className="text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity size={14} className="text-amber-400 animate-spin" />
                  Development Milestone
                </span>
                <span className="text-amber-400 text-sm">50% READY</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden relative border border-amber-500/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-full relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white animate-ping opacity-75" />
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
              >
                <Lock size={14} />
                [DECRYPT CLASSIFIED FILE]
              </button>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-widest hover:bg-amber-500/10 transition-colors"
              >
                <span>[REQUEST CLEARANCE ACCESS]</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Holographic Shield Visual */}
          <div className="w-full lg:w-80 p-6 rounded-2xl bg-black/90 border border-amber-500/30 text-slate-300 font-mono text-xs space-y-3 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              <span>CLEARANCE STATUS</span>
              <span className="px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-400">LEVEL 5</span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">PROJECT_ID:</span>
                <span className="text-amber-300 font-bold">PROVELT-05</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CATEGORY:</span>
                <span className="text-slate-200">WEB & MOBILE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ENCRYPTION:</span>
                <span className="text-emerald-400 font-bold">ZERO-KNOWLEDGE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ALPHA STAGE:</span>
                <span className="text-amber-400 font-bold">50% COMPLETED</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[10px] text-red-400 font-bold flex items-center gap-1.5">
              <EyeOff size={12} />
              <span>CONFIDENTIAL — NOT PUBLIC UNTIL RELEASE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
