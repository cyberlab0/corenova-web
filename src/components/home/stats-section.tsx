"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Delivered", value: "250+", desc: "Enterprise applications & AI solutions" },
  { label: "System Uptime SLA", value: "99.99%", desc: "Cloud Edge availability" },
  { label: "Countries Served", value: "18+", desc: "Global client footprint" },
  { label: "Managed SLA Support", value: "24/7", desc: "Round-the-clock SOC monitoring" },
];

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border/50 bg-card/40 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-2">
                {stat.value}
              </span>
              <span className="font-heading font-bold text-foreground text-base md:text-lg mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground max-w-[180px]">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
