"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Shield, Globe } from "lucide-react";

const caseStudies = [
  {
    category: "AI & Automation",
    icon: <Cpu className="text-primary" size={20} />,
    title: "AI Document & Invoice Processing Pipeline",
    clientType: "Logistics & Commercial Enterprise",
    metrics: [
      { label: "Processing Speed", value: "45 sec" },
      { label: "Manual Effort Reduction", value: "85%" },
      { label: "Extraction Accuracy", value: "99.4%" },
    ],
    description: "Architected a custom machine learning pipeline to parse, categorize, and validate thousands of unstructured invoices and shipping manifests daily.",
    tags: ["Next.js", "Python AI", "OCR", "Cloudflare Edge"],
  },
  {
    category: "Cybersecurity Audit",
    icon: <Shield className="text-emerald-400" size={20} />,
    title: "FinTech Platform Vulnerability Remediation",
    clientType: "Financial Services Provider",
    metrics: [
      { label: "Patched Vulnerabilities", value: "14 Critical" },
      { label: "Compliance Status", value: "100% NDPR" },
      { label: "DDoS Mitigation", value: "Active WAF" },
    ],
    description: "Performed deep penetration testing, zero-trust network restructuring, and implemented strict Content Security Policies to secure financial transactions.",
    tags: ["Penetration Testing", "NDPR Audit", "Cloudflare WAF", "Sentry"],
  },
  {
    category: "Web & Cloud Architecture",
    icon: <Globe className="text-secondary" size={20} />,
    title: "Scalable Multi-Tenant Enterprise Web Portal",
    clientType: "B2B Technology Vendor",
    metrics: [
      { label: "Daily API Requests", value: "50k+" },
      { label: "Global Latency", value: "< 50ms" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    description: "Engineered a high-performance web platform with serverless edge rendering, global CDN caching, and automated dynamic sitemap generation for maximum SEO.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-32 bg-card/20 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Proof of Engineering Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
              Featured Case Studies &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Project Results
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            Concrete evidence of how our AI automation, cybersecurity auditing, and web architectures deliver quantifiable business returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[60px] pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/50 text-xs font-medium">
                    {item.icon}
                    <span>{item.category}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-xs text-muted-foreground font-mono mb-2">{item.clientType}</p>
                <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-background/80 border border-border/40 mb-6 text-center">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <p className="text-xs font-bold text-foreground font-heading">{metric.value}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30 relative z-10">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-[10px] text-muted-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
