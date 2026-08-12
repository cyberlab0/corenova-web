"use client";

import { motion } from "framer-motion";
import { Search, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="text-primary" size={24} />,
    title: "Discovery & Architecture Scope",
    description: "We analyze your business bottlenecks, evaluate existing infrastructure, and define a clear technical roadmap with zero ambiguity.",
  },
  {
    number: "02",
    icon: <Code2 className="text-secondary" size={24} />,
    title: "Agile Build & AI Integration",
    description: "We build custom LLM pipelines, automated workflows, or enterprise web platforms using iterative 2-week development sprints.",
  },
  {
    number: "03",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    title: "Penetration Testing & Hardening",
    description: "Before any deployment, our cybersecurity protocols audit your code, APIs, and cloud permissions for total vulnerability protection.",
  },
  {
    number: "04",
    icon: <Rocket className="text-accent" size={24} />,
    title: "Global Deployment & SLA Support",
    description: "We deploy your application globally on Cloudflare edge networks with automated monitoring, backups, and guaranteed uptime SLAs.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest">
            Engagement Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            How We Work With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Our Clients
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A transparent, 4-step engineering methodology designed to eliminate risk, maintain security, and deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-heading font-black text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/30 flex items-center gap-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Phase {step.number} Protocol</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
