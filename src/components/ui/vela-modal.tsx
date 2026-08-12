"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Cpu, CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

interface VelaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VelaModal({ isOpen, onClose }: VelaModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl p-8 rounded-3xl bg-[#090D16] border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 text-slate-100 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] pointer-events-none rounded-full" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/20">
            <Terminal className="text-cyan-400 animate-pulse" size={24} />
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest block">
                [SYSTEM STATUS READOUT]
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">VELA AI Protocol</h3>
            </div>
          </div>

          {/* Development Status Readout */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <Activity size={14} className="text-cyan-400 animate-spin" />
                Ongoing Development
              </span>
              <span className="text-lg font-black text-cyan-400">80% COMPLETE</span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden relative border border-cyan-500/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full relative"
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white animate-ping opacity-75" />
              </motion.div>
            </div>
          </div>

          {/* Terminal Logs Simulation */}
          <div className="p-4 rounded-xl bg-black border border-slate-800 font-mono text-[11px] space-y-2 mb-8 text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={12} />
              <span>[LOG 16:12:01] LLM Budget Telemetry Pipeline: READY</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle2 size={12} />
              <span>[LOG 16:12:02] 15,000+ Global Bank API Gateway: CONNECTED</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle2 size={12} />
              <span>[LOG 16:12:03] Real-Time Twilio SMS Alert Subsystem: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <ShieldCheck size={12} />
              <span>[LOG 16:12:04] 256-Bit Encrypted Tunnel Architecture: ENFORCED</span>
            </div>
            <div className="pt-2 text-amber-400 font-bold border-t border-slate-900">
              ⚡ Status: Active sprint in progress. Public beta release approaching.
            </div>
          </div>

          {/* Action Close */}
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            [ACKNOWLEDGE & RETURN TO SITE]
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
