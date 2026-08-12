"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Shield, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";



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

        {/* Spontaneous Applications */}
        <div className="p-12 rounded-3xl bg-card border border-border/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[90px] pointer-events-none rounded-full" />
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Don&apos;t see a listed role for your expertise?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
            We are always looking for exceptional software engineers, AI researchers, and cybersecurity specialists. Send us your resume and portfolio, and our team will reach out when relevant opportunities open up.
          </p>
          <a
            href="mailto:contact@corenovatechnology.com?subject=General Career Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors relative z-10"
          >
            Send Spontaneous Application
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
