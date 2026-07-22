"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, ShieldCheck, Code, Cloud, Lightbulb, PenTool, Wrench, Settings } from "lucide-react";

const services = [
  {
    title: "Artificial Intelligence",
    description: "Implement machine learning models and AI-driven insights to transform your data into actionable intelligence.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Business Automation",
    description: "Streamline operations with custom workflow automation that eliminates repetitive tasks and saves time.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive penetration testing and proactive security operations.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Web & Mobile Development",
    description: "Build scalable, high-performance web applications and custom software solutions tailored to your needs.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Cloud Solutions",
    description: "Design robust API architectures and migrate seamlessly to scalable cloud infrastructure.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Digital Transformation",
    description: "Strategic IT consulting to modernize your legacy systems and accelerate business growth.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design & SaaS",
    description: "Craft premium user interfaces and experiences for intuitive, world-class SaaS applications.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Maintenance & Support",
    description: "Ensure 24/7 reliability and performance of your critical technology infrastructure.",
    icon: <Wrench className="w-6 h-6" />,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Premium Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Modern Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We deliver state-of-the-art technology services designed to optimize, secure, and scale your operations globally.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
