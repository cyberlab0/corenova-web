"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Scaling, BadgeCheck, Clock, Layers } from "lucide-react";

const features = [
  {
    title: "Innovation at Core",
    description: "We don't follow trends; we build the future. Using state-of-the-art AI and automation frameworks to keep you ahead.",
    icon: <Zap className="w-5 h-5 text-accent" />
  },
  {
    title: "Military-Grade Security",
    description: "Security is never an afterthought. From day one, we build robust infrastructure to protect your digital assets.",
    icon: <Lock className="w-5 h-5 text-secondary" />
  },
  {
    title: "Infinite Scalability",
    description: "Cloud-native architectures designed to grow seamlessly with your business, handling millions of requests with zero downtime.",
    icon: <Scaling className="w-5 h-5 text-primary" />
  },
  {
    title: "Uncompromising Quality",
    description: "Every line of code is meticulously tested and optimized for speed, accessibility, and performance.",
    icon: <BadgeCheck className="w-5 h-5 text-accent" />
  },
  {
    title: "24/7 Dedicated Support",
    description: "Technology never sleeps, and neither do we. Continuous monitoring and proactive support to ensure maximum uptime.",
    icon: <Clock className="w-5 h-5 text-secondary" />
  },
  {
    title: "Decades of Experience",
    description: "Founded on a philosophy of solving real business problems with intelligent, efficient, and deeply integrated solutions.",
    icon: <Layers className="w-5 h-5 text-primary" />
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Why Partner With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              We engineer solutions that blur the line between software and magic. Fast, secure, and incredibly powerful.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:shadow-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
