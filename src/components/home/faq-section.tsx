"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How do your pricing and engagement models work?",
    a: "We offer two primary engagement models: Fixed-Scope Project Pricing (ideal for well-defined web applications, audits, or specific AI automations) and Monthly Dedicated Retainers (for ongoing cybersecurity monitoring, continuous software feature development, and cloud management). Every engagement begins with a free discovery consultation.",
  },
  {
    q: "How do you protect client IP and sensitive data?",
    a: "We execute mutual Non-Disclosure Agreements (NDAs) prior to discussing any proprietary workflows or source code. All development takes place in secure, encrypted repositories using least-privilege IAM access. Furthermore, we comply fully with Nigeria Data Protection Regulation (NDPR) and global GDPR standards.",
  },
  {
    q: "What are the typical project timelines for custom solutions?",
    a: "Project timelines depend on scope complexity. A focused AI automation script or vulnerability security audit typically takes 1 to 2 weeks. Custom Next.js web applications and complex enterprise platforms generally range from 3 to 8 weeks, deployed in transparent 2-week agile sprints.",
  },
  {
    q: "Do you offer post-deployment support and maintenance SLAs?",
    a: "Yes! Every project includes a 30-day post-launch warranty. For long-term peace of mind, we provide SLA Support Packages covering 24/7 uptime monitoring, security patching, dependency updates, and priority emergency response.",
  },
  {
    q: "What makes Corenova different from traditional web or dev agencies?",
    a: "Unlike standard dev shops that only build static templates, Corenova specializes at the intersection of AI Automation and Cybersecurity. We don't just build software—we engineer zero-trust, high-performance edge architectures that actively streamline your business operations and defend against cyber threats.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest">
            Buyer Objections & Transparency
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about our engagement process, pricing, security guarantees, and SLAs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-colors hover:border-primary/30"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg text-foreground focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed pl-11 border-t border-border/20 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
