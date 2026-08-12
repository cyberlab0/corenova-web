"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Database, Cpu, ShieldCheck } from "lucide-react";

const techCategories = [
  {
    category: "Frontend & Web",
    icon: <Code2 className="text-primary" size={20} />,
    tools: ["React 19", "Next.js 16", "TypeScript", "Angular", "Tailwind CSS"],
  },
  {
    category: "Backend & Systems",
    icon: <Server className="text-secondary" size={20} />,
    tools: ["Node.js", ".NET Core", "Python", "Java", "Go"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="text-cyan-400" size={20} />,
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare Workers", "Docker"],
  },
  {
    category: "Databases & Caching",
    icon: <Database className="text-emerald-400" size={20} />,
    tools: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Cpu className="text-purple-400" size={20} />,
    tools: ["OpenAI API", "Google Gemini", "Claude Anthropic", "LangChain", "RAG Systems"],
  },
  {
    category: "Cybersecurity & SOC",
    icon: <ShieldCheck className="text-amber-400" size={20} />,
    tools: ["SIEM Monitoring", "IAM Zero-Trust", "Penetration Testing", "Cloudflare WAF", "Sentry"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-32 relative bg-card/20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest">
            Production Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Battle-Tested Technologies We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Engineer With
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use modern, enterprise-proven frameworks and security tools to ensure your software is fast, resilient, and future-proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-background border border-border/40 text-xs font-medium text-foreground hover:border-primary/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
