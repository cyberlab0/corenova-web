"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Calendar,
  ShieldCheck,
  Mail,
  Phone,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export function AiTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Subtle Executive Quick-Contact Toggle */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open CoreNova Quick Support"
            className="fixed bottom-6 right-6 z-[90] inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B1220] border border-primary/40 text-foreground shadow-2xl shadow-black/40 hover:border-primary transition-colors print:hidden"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <MessageSquare size={16} className="text-primary" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">
              Engineering Desk
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Executive Quick Support & Directory Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[90] w-[90vw] max-w-sm rounded-2xl bg-[#0B1220] border border-border/80 shadow-2xl shadow-black/60 overflow-hidden print:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 bg-card/80 border-b border-border/50">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  CoreNovaTechnologiesLTD
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  CAC RC 9697390 &bull; Direct Engineering Desk
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close support panel"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/15 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Book a Discovery Call</p>
                    <p className="text-[11px] text-muted-foreground">24-hour engineering response</p>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-primary" />
              </Link>

              <Link
                href="/trust"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Trust &amp; CAC Credentials</p>
                    <p className="text-[11px] text-muted-foreground">RC 9697390 &amp; security controls</p>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layers size={16} className="text-secondary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Explore Products</p>
                    <p className="text-[11px] text-muted-foreground">SentraLog, VELA &amp; PROVELT</p>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                <a
                  href="https://wa.me/2349131815101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
                >
                  <Phone size={13} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:contact@corenovatechnology.com"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.04] border border-border/60 text-foreground text-xs font-semibold hover:border-primary/40 transition-colors"
                >
                  <Mail size={13} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
