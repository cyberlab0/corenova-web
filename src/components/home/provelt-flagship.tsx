"use client";

import { motion } from "framer-motion";
import { Lock, ArrowRight, EyeOff } from "lucide-react";

interface ProveltFlagshipProps {
  onOpenModal: () => void;
}

export function ProveltFlagshipSection({ onOpenModal }: ProveltFlagshipProps) {
  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-card border border-amber-500/30 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-[380px] h-[240px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left Column */}
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest">
              <Lock size={13} />
              Confidential Initiative &bull; Web &amp; Mobile
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
                PROVELT
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mt-3">
                An upcoming cross-platform web and mobile ecosystem currently under private development at CoreNovaTechnologiesLTD. Technical specifications remain confidential until official public launch.
              </p>
            </div>

            {/* 50% Milestone Gauge */}
            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 max-w-md">
              <div className="flex items-center justify-between text-xs font-mono font-semibold mb-2">
                <span className="text-muted-foreground uppercase tracking-wider">
                  Development Progress
                </span>
                <span className="text-amber-400">50% Ready</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-secondary/15 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Lock size={14} />
                <span>View Release Status</span>
              </button>
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Request Private Preview</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Summary Panel */}
          <div className="w-full lg:w-80 p-6 rounded-2xl bg-background/90 border border-border/60 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-border/50 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
              <span>Project Classification</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
                Confidential
              </span>
            </div>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Codename</span>
                <span className="text-foreground font-semibold">PROVELT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform</span>
                <span className="text-foreground">Web &amp; Mobile</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completion</span>
                <span className="text-amber-400 font-semibold">50% Ready</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Disclosure</span>
                <span className="text-foreground">Restricted Until Launch</span>
              </div>
            </div>
            <div className="pt-3 border-t border-border/50 text-[11px] text-muted-foreground flex items-center gap-2">
              <EyeOff size={13} className="text-amber-400 shrink-0" />
              <span>Under active internal development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
