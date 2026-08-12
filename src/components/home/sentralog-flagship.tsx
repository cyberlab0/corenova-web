"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldAlert, Cpu, Activity, Play, Terminal, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function SentralogFlagshipSection() {
  // Real-time fluctuating telemetry states to simulate live SIEM metrics
  const [eventsPerSec, setEventsPerSec] = useState(21422);
  const [cpuLoad, setCpuLoad] = useState(37);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventsPerSec(prev => {
        const delta = Math.floor(Math.random() * 500) - 250;
        return Math.max(14000, Math.min(25000, prev + delta));
      });
      setCpuLoad(prev => {
        const delta = Math.floor(Math.random() * 7) - 3;
        return Math.max(30, Math.min(65, prev + delta));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-16 p-8 sm:p-12 rounded-3xl bg-[#090D16] border border-blue-500/20 font-sans relative overflow-hidden shadow-2xl shadow-blue-950/40">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Flagship Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
          <Terminal size={14} />
          FLAGSHIP PRODUCT
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight mb-4">
          SentraLog
        </h2>

        {/* Tagline */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          A centralized intelligent security system that collects, parses, and analyzes logs in real-time. Built specifically for SOC analysts to rapidly detect and respond to threats.
        </p>

        {/* Interactive Dashboard & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left mb-10">
          
          {/* Left Window Preview: Malware Detonation Sandbox */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0B1220] border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none rounded-full" />
            
            <div>
              {/* Window Bar */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="ml-2 text-[11px] text-slate-500">sentralog.dashboard / Malware Detonation Sandbox</span>
              </div>

              {/* Sandbox Interface Content */}
              <div className="p-6 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 min-h-[180px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold font-heading text-white">Malware Detonation Sandbox</h4>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono">ISOLATED HYPERVISOR</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Executes suspicious payloads in an isolated hypervisor, inspecting behavioral memory calls and network egress.
                  </p>
                </div>

                {/* Simulated URL Input Scan */}
                <div className="mt-6 p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="text-slate-500 truncate">https://suspicious-payload.bin</span>
                  <span className="px-3 py-1 rounded bg-blue-600 text-white font-semibold text-[10px]">SCAN FILE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: SENTRALOG TELEMETRY */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B1220] border border-slate-800 shadow-xl flex flex-col justify-between font-mono">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-bold tracking-wider">
                <span className="text-slate-300">SENTRALOG TELEMETRY</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ● ONLINE
                </span>
              </div>

              {/* Telemetry Metrics 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">CPU LOAD</span>
                  <span className="text-xl font-black text-blue-400">{cpuLoad}%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">RAM USAGE</span>
                  <span className="text-xl font-black text-blue-400">55%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">EVENTS / SEC</span>
                  <span className="text-xl font-black text-amber-400">{eventsPerSec.toLocaleString()}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">ACTIVE THREATS</span>
                  <span className="text-xl font-black text-emerald-400">0</span>
                </div>
              </div>

              {/* Animated Network Traffic Bar */}
              <div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                  <span>NETWORK TRAFFIC</span>
                  <span className="text-blue-400">STREAMING</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 rounded-full"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://sentralog.onrender.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            <Play size={14} className="fill-current" />
            Live Demo
          </a>
          <a
            href="https://sentralog.onrender.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm transition-colors"
          >
            <Layers size={14} />
            View Architecture
          </a>
          <a
            href="https://sentralog.onrender.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-medium text-sm transition-colors"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
