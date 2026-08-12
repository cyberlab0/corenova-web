"use client";

import { motion } from "framer-motion";

const partners = [
  "AI Partners",
  "CyberShield",
  "CloudNova",
  "TechForge",
  "DataVault",
  "SecureNet",
  "InnovateTech",
  "DigitalPulse",
];

export function ClientMarquee() {
  return (
    <section className="py-16 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Trusted by forward-thinking organizations
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm shrink-0"
            >
              {/* Placeholder icon circle */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 shrink-0" />
              <span className="text-sm font-medium text-muted-foreground">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
