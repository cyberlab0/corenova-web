"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Code2, Clock, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const servicePillars = [
  {
    icon: <Cpu size={24} className="text-primary" />,
    title: "AI & Automation First",
    desc: "We build custom machine learning pipelines, LLM APIs, and autonomous workflows that streamline your operations and eliminate repetitive manual labor.",
  },
  {
    icon: <ShieldCheck size={24} className="text-emerald-400" />,
    title: "Zero-Trust Cybersecurity Standard",
    desc: "Every web app, cloud server, and database we engineer undergoes rigorous penetration testing, Sentry error monitoring, and Cloudflare WAF protection.",
  },
  {
    icon: <Code2 size={24} className="text-secondary" />,
    title: "Enterprise Software Engineering",
    desc: "We don't build cheap templates. We develop custom Next.js 16 platforms, React 19 apps, and multi-tenant ERPs designed for high speed and global scale.",
  },
  {
    icon: <Clock size={24} className="text-amber-400" />,
    title: "Guaranteed SLAs & 24/7 Support",
    desc: "Our client partnerships extend far beyond launch day. We provide guaranteed uptime SLAs, active monitoring, and rapid emergency technical response.",
  },
];

const clientBenefits = [
  "100% Intellectual Property (IP) ownership transferred to client",
  "Strict Mutual Non-Disclosure Agreements (NDAs) signed prior to discovery",
  "HIPAA, NDPR & GDPR regulatory data compliance built-in",
  "Transparent project sprint reporting with full code visibility",
  "Cloudflare edge hosting deployment for global < 50ms latencies",
  "30-day post-launch warranty with dedicated account management",
];

export default function WhyUsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Service Delivery Standard
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Corenova Technology?
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We render end-to-end AI automation, cybersecurity auditing, and custom software development for enterprises seeking measurable market advantages.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mb-24">
          <h2 className="text-2xl font-heading font-bold mb-8 border-b border-border/50 pb-4">Our Service Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 flex gap-5 items-start hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Guarantees */}
        <div className="mb-24 p-10 rounded-3xl bg-card border border-border/50">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <Zap className="text-primary" size={24} />
            Client Commitments & Guarantees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clientBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/40 text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/20 text-center relative overflow-hidden">
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Ready to transform your business operations?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
            Book a free, confidential technical consultation with our engineering team today.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors relative z-10"
          >
            Get Free Technical Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
