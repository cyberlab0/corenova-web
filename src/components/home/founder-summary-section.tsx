"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Cpu, Award } from "lucide-react";

export function FounderSummarySection() {
  return (
    <section id="about" className="py-32 relative bg-card/30 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="aspect-[4/5] rounded-3xl bg-card border border-border/50 overflow-hidden relative group shadow-2xl">
              <img 
                src="/corenova-company.jpg" 
                alt="CoreNovaTechnologiesLTD - Enterprise AI & Cybersecurity Company" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none z-10" />
            </div>

            {/* Sharp, highly legible company identity card */}
            <div className="mt-6 md:absolute md:-bottom-6 md:-right-6 bg-card/95 p-6 rounded-2xl border border-primary/30 shadow-2xl backdrop-blur-2xl z-30">
              <h4 className="text-xl font-heading font-bold text-foreground">CoreNovaTechnologiesLTD</h4>
              <p className="text-primary text-sm font-medium">Founded by Michael Olowoselu &bull; RC 9697390</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              About The Company &bull; CAC RC 9697390
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Engineering Secure AI Systems From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Nigeria to the World
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">CoreNovaTechnologiesLTD</strong>—founded and 100% owned by{" "}
              <strong className="text-foreground">Michael Olowoselu</strong>—is a CAC-registered Private Company Limited by Shares (<strong className="text-primary font-mono">RC 9697390</strong>) built on a clear conviction: modern businesses should never have to choose between rapid AI automation and airtight cybersecurity.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              From our registered office in Osogbo, Osun State, we combine deep expertise in intelligent workflow automation, threat detection engineering, and scalable software architecture to help businesses transform securely.
            </p>

            {/* Quick stats badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-card border border-border/40 flex items-center gap-3">
                <Cpu className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-foreground">AI Automation</p>
                  <p className="text-[10px] text-muted-foreground">Custom LLM Pipelines</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border/40 flex items-center gap-3">
                <ShieldAlert className="text-emerald-400 shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-foreground">Cybersecurity</p>
                  <p className="text-[10px] text-muted-foreground">SOC &amp; Vulnerability Audits</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-all group"
            >
              About CoreNova &amp; Our Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
