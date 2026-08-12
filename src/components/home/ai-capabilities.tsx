"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Database, Mic, LineChart, Cpu } from "lucide-react";

const aiFeatures = [
  {
    icon: <Bot size={24} className="text-primary" />,
    title: "Autonomous AI Agents",
    desc: "Self-executing AI agents that reason, plan, and automate complex multi-step business workflows with zero human intervention.",
  },
  {
    icon: <Database size={24} className="text-secondary" />,
    title: "RAG Knowledge Systems",
    desc: "Connect your enterprise PDFs, documents, and databases to custom vector search engines for instant AI document Q&A.",
  },
  {
    icon: <Workflow size={24} className="text-emerald-400" />,
    title: "Intelligent Process Automation",
    desc: "Automate invoice extraction, email classification, data reconciliation, and CRM data sync at enterprise scale.",
  },
  {
    icon: <Mic size={24} className="text-cyan-400" />,
    title: "Voice AI & Conversational Bots",
    desc: "Real-time speech-to-text and natural voice synthesis for automated customer intake and support phone lines.",
  },
  {
    icon: <LineChart size={24} className="text-amber-400" />,
    title: "Predictive Analytics Dashboards",
    desc: "Machine learning models that analyze historical revenue, inventory, and user behavior to forecast business trends.",
  },
  {
    icon: <Cpu size={24} className="text-purple-400" />,
    title: "Custom LLM API Integration",
    desc: "Fine-tuned model deployments using OpenAI, Gemini, Claude, and open-source Llama models tailored to your business data.",
  },
];

export function AiCapabilitiesSection() {
  return (
    <section className="py-32 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            2026 AI Frontier
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Next-Gen AI &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Automation Capabilities
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We build cutting-edge artificial intelligence systems that reduce manual workload, eliminate operational bottlenecks, and create unfair market advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
