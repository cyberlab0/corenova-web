"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Shield, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const openPositions = [
  {
    title: "Senior AI & Automation Engineer",
    type: "Full-Time",
    location: "Remote / Lagos, Nigeria",
    dept: "AI Systems",
    desc: "Architect custom LLM pipelines, RAG systems, and autonomous agent workflows using Python, FastAPI, OpenAI, and LangChain.",
  },
  {
    title: "Full-Stack Software Engineer (Next.js & TypeScript)",
    type: "Full-Time",
    location: "Remote / Lagos, Nigeria",
    dept: "Engineering",
    desc: "Build scalable enterprise web platforms and client portals with Next.js 16, React 19, Tailwind CSS, and Cloudflare Workers.",
  },
  {
    title: "Cybersecurity & SOC Analyst",
    type: "Full-Time",
    location: "Lagos, Nigeria",
    dept: "Cybersecurity",
    desc: "Perform penetration testing, zero-trust vulnerability assessments, SIEM monitoring, and NDPR compliance audits for client networks.",
  },
  {
    title: "AI & Software Development Intern (Graduate Program)",
    type: "Internship / Full-Time",
    location: "Lagos, Nigeria",
    dept: "Emerging Tech",
    desc: "Join our intensive hands-on graduate training program working on live production AI and web engineering projects.",
  },
];

const culturePerks = [
  { icon: <Globe size={24} className="text-primary" />, title: "Remote-First Flexibility", desc: "Work from anywhere with flexible schedules and modern async workflows." },
  { icon: <GraduationCap size={24} className="text-secondary" />, title: "Continuous Learning Fund", desc: "We sponsor your AWS, CompTIA Security+, and AI certifications and course materials." },
  { icon: <Shield size={24} className="text-emerald-400" />, title: "Cutting-Edge Tech Stack", desc: "Engineers work with the latest Next.js 16, Cloudflare Edge, and AI frameworks." },
  { icon: <Heart size={24} className="text-rose-400" />, title: "Health & Wellness", desc: "Comprehensive health coverage, competitive stipends, and performance bonuses." },
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Join The Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            Build The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              AI & Cybersecurity
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We are looking for passionate software engineers, cybersecurity analysts, and AI innovators to build world-class digital solutions.
          </p>
        </div>

        {/* Culture & Perks */}
        <div className="mb-24">
          <h2 className="text-2xl font-heading font-bold mb-8 border-b border-border/50 pb-4">Why Work At Corenova?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturePerks.map((perk, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border/50 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center shrink-0">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-8 border-b border-border/50 pb-4">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {pos.dept}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{pos.type}</span>
                    <span className="text-xs font-mono text-muted-foreground">• {pos.location}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {pos.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-2xl">{pos.desc}</p>
                </div>

                <a
                  href="mailto:contact@corenovatechnology.com?subject=Career Application: "
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-border/60 hover:border-primary/50 text-sm font-medium transition-colors shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
