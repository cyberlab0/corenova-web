"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter / MVP",
    price: "$1,500",
    period: "starting from",
    description: "Ideal for startups and growing businesses needing rapid MVP software, custom web apps, or AI workflow automation.",
    features: [
      "Custom Next.js Web App / MVP",
      "Basic AI Workflow Automation",
      "Mobile-Responsive Design",
      "SSL & Cloudflare Edge Hosting Setup",
      "30-Day Post-Launch SLA Warranty",
    ],
    popular: false,
    cta: "Start Starter Project",
  },
  {
    name: "Business Enterprise",
    price: "$4,500",
    period: "starting from",
    description: "Designed for established companies requiring full-scale software platforms, mobile applications, and cybersecurity hardening.",
    features: [
      "Everything in Starter",
      "Cross-Platform Mobile App (iOS & Android)",
      "Custom AI RAG / Chatbot Integration",
      "Full Penetration Test & Security Audit",
      "NDPR & Data Protection Compliance",
      "Priority 24/7 SLA Technical Support",
    ],
    popular: true,
    cta: "Start Business Scope",
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    period: "monthly or project scope",
    description: "Tailored for large organizations requiring dedicated engineering teams, multi-branch ERPs, SOC 2 monitoring, and cloud architecture.",
    features: [
      "Dedicated Engineering Team (Full-Stack + SOC)",
      "Multi-Branch ERP / Custom Enterprise Platform",
      "24/7 Security Operations Center (SOC) Monitoring",
      "Continuous CI/CD Feature Updates",
      "Guaranteed 99.99% Uptime SLA",
    ],
    popular: false,
    cta: "Book Executive Consultation",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative bg-card/20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest">
            Predictable Investment
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Transparent Pricing &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Engagement Packages
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees or surprises. Every project includes a free discovery consultation, detailed technical scope, and post-launch SLA support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`p-8 md:p-10 rounded-3xl bg-card border flex flex-col justify-between relative ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/10 ring-1 ring-primary/50"
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular Scope
                </span>
              )}

              <div>
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-6 min-h-[40px]">{plan.description}</p>

                <div className="mb-8 p-4 rounded-2xl bg-background/80 border border-border/40">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                    {plan.period}
                  </span>
                  <span className="text-4xl font-heading font-black text-foreground">{plan.price}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Included Deliverables</p>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#contact"
                className={`w-full py-4 rounded-xl text-center text-sm font-medium transition-all flex items-center justify-center gap-2 group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-secondary/10"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
