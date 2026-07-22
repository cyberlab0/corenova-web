"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const timelineEvents = [
  { year: "Early Years", title: "Born in Calabar", desc: "Discovered a passion for computers and technology during secondary school." },
  { year: "Growth", title: "Relocated to Osun State", desc: "Pursued better educational opportunities and personal growth. Completed WAEC & JAMB." },
  { year: "Self-Education", title: "Relentless Learning", desc: "Instead of letting circumstances define his future, he committed to rigorous self-education online." },
  { year: "Expertise", title: "Mastered AI Automation", desc: "Built expertise in designing AI-powered automation solutions to help businesses save time and reduce costs." },
  { year: "Evolution", title: "Cybersecurity Journey", desc: "Actively advancing career in cybersecurity with the goal of becoming a Security Operations Center (SOC) Analyst." },
  { year: "Present", title: "Founded Corenova", desc: "Helping businesses globally embrace secure digital transformation through intelligent software." }
];

const values = ["Innovation", "Integrity", "Security", "Excellence", "Continuous Learning", "Customer Success", "Transparency"];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            The Vision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Behind Corenova</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technology should solve real business problems—not create more complexity.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center text-muted-foreground animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* CEO Card Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Premium portrait placeholder */}
            <div className="aspect-[4/5] rounded-3xl bg-card border border-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground font-heading text-xl tracking-widest uppercase">CEO Portrait</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-background p-8 rounded-3xl border border-border shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-heading font-bold text-foreground">Michael Olowoselu</h3>
              <p className="text-primary font-medium">Founder & Chief Executive Officer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">About The Founder</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Michael Olowoselu was born in Calabar, Cross River State, Nigeria. His fascination with technology began during his secondary school years, where curiosity about computers gradually became a lifelong passion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Through countless hours of online learning, practical projects, continuous research and real-world experimentation, he built expertise in Artificial Intelligence Automation and modern business automation systems.
            </p>
            
            <div className="bg-card/50 p-6 rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">Specializations</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> AI Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Cybersecurity Professional in Training</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Security Operations (Aspiring SOC)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Custom Software Development</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Business Process Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Cloud Solutions & Web Apps</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-3xl md:text-5xl font-heading font-medium leading-tight text-foreground mb-10">
              "Success isn't determined by where you started. It's determined by how relentlessly you continue learning."
            </p>
            <p className="text-xl font-medium text-primary">— Michael Olowoselu</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-heading font-bold mb-4">The Journey</h2>
          <p className="text-muted-foreground text-lg">A timeline of relentless pursuit of excellence.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-300 mb-4 md:mb-0" />
                <div className="md:pt-16 md:pb-16 w-full px-4">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:-mt-48' : 'md:mt-48'}`}>
                    <span className="text-sm font-bold text-primary mb-2">{event.year}</span>
                    <h4 className="font-heading font-semibold text-foreground mb-2">{event.title}</h4>
                    <p className="text-xs text-muted-foreground">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-card border border-border"
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become one of Africa's most trusted technology companies by empowering businesses through intelligent automation, secure digital infrastructure and innovative software solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-card border border-border"
          >
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To simplify business operations using technology while maintaining the highest standards of security, innovation and customer satisfaction.
            </p>
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold mb-10">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-6 py-3 rounded-full bg-secondary/10 text-foreground border border-secondary/20 hover:bg-secondary hover:text-white transition-colors cursor-default"
              >
                {value}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
