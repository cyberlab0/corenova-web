"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Zap, Bot, Globe, Smartphone, Lock, Sparkles } from "lucide-react";
import Link from "next/link";

interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: "Web & Mobile" | "AI Systems" | "Cybersecurity" | "Cloud Infrastructure";
  challenge: string;
  solution: string;
  tech: string[];
  results: string[];
  imageGradient: string;
  liveLink?: string;
  isBuilding?: boolean;
  progress?: number;
  velaFeatures?: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }[];
}

const projects: PortfolioProject[] = [
  {
    id: "vela-ai-financial",
    title: "Meet VELA: The Ultimate AI Financial Powerhouse",
    client: "Corenova AI Product",
    industry: "FinTech & AI Systems",
    category: "AI Systems",
    isBuilding: true,
    progress: 80,
    liveLink: "https://portfolio-v0rz.onrender.com/#contact",
    challenge: "Managing personal wealth, budgeting, and global bank accounts across multiple apps is fragmented, slow, and lacks intelligent insights.",
    solution: "AI system that connects and automates digital life. VELA aggregates global banking telemetry, analyzes spending habits with LLMs, and sends real-time SMS alerts.",
    tech: ["Python AI", "OpenAI Vision", "FastAPI", "React 19", "256-bit Encryption", "Twilio SMS"],
    results: [
      "AI Wealth Assistant with instant budget advice",
      "Universal Gateway connecting 15,000+ banks globally",
      "Real-time SMS alerts for unusual spending summaries",
      "Military-Grade 256-bit encrypted tunnel architecture",
    ],
    imageGradient: "from-cyan-500/40 via-blue-600/30 to-purple-600/20",
    velaFeatures: [
      {
        icon: <Bot className="text-cyan-400" size={20} />,
        title: "AI Wealth Assistant",
        desc: "Ask questions about your budget and get instant, personalized financial advice and spending breakdowns.",
      },
      {
        icon: <Globe className="text-blue-400" size={20} />,
        title: "Universal Global Gateway",
        desc: "Connect 15,000+ banks across North America, Europe, Africa, Asia, and LATAM in one unified dashboard.",
      },
      {
        icon: <Smartphone className="text-amber-400" size={20} />,
        title: "Real-Time SMS Alerts",
        desc: "Get direct SMS text messages alerting you of unusual spending or weekly financial health summaries.",
      },
      {
        icon: <Lock className="text-emerald-400" size={20} />,
        title: "Military-Grade Security",
        desc: "256-bit encrypted tunnel architecture. We never store or see your bank login credentials.",
      },
    ],
  },
  {
    id: "sentralog-xdr-platform",
    title: "SentraLog XDR Security & Threat Detection Platform",
    client: "Enterprise Security Product",
    industry: "Cybersecurity & Threat Intelligence",
    category: "Cybersecurity",
    liveLink: "https://sentralog-xdr.onrender.com/#",
    challenge: "Legacy SIEM tools generate overwhelming false alerts, miss zero-day threats, and slow down incident containment during active attacks.",
    solution: "Engineered SentraLog XDR—an Extended Detection & Response (XDR) security platform featuring unified log telemetry, automated threat containment, and SIEM monitoring.",
    tech: ["Cloudflare WAF", "SIEM Telemetry", "Zero-Trust IAM", "Sentry", "Python Security", "Next.js"],
    results: [
      "100% automated threat detection & incident containment",
      "Unified log telemetry across cloud infrastructure & endpoints",
      "Real-time vulnerability dashboard & zero-trust compliance",
    ],
    imageGradient: "from-indigo-600/40 via-purple-600/30 to-rose-600/20",
  },
  {
    id: "healthcare-erp",
    title: "Healthcare Management System & Patient Portal",
    client: "St. Jude Medical Network",
    industry: "Healthcare",
    category: "Web & Mobile",
    challenge: "Paper-based patient records and manual appointment scheduling caused long patient wait times and high administrative overhead.",
    solution: "Engineered a secure, HIPAA/NDPR-compliant digital healthcare portal with real-time electronic health records (EHR) and tele-consultation.",
    tech: ["React 19", ".NET Core", "Azure Cloud", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Reduced paperwork overhead by 90%",
      "Serves 25,000+ registered patients",
      "Cut appointment wait times from 2 hours to 12 minutes",
    ],
    imageGradient: "from-blue-600/30 to-cyan-500/20",
  },
  {
    id: "restaurant-pos",
    title: "Multi-Location Restaurant POS & Inventory Engine",
    client: "Flavors Hospitality Group",
    industry: "Hospitality & Retail",
    category: "Web & Mobile",
    challenge: "Managing sales and inventory across 20 distinct branch locations resulted in inventory discrepancies and delayed financial reporting.",
    solution: "Built a centralized cloud POS and automated supply chain management system with offline-first sync and instant mobile checkout.",
    tech: ["Next.js 16", "Node.js", "Redis", "Cloudflare Workers", "PWA"],
    results: [
      "Deployed across 20 active branch locations",
      "Processes 15,000+ daily customer orders",
      "Real-time cross-location inventory reconciliation",
    ],
    imageGradient: "from-amber-500/30 to-orange-600/20",
  },
  {
    id: "school-erp",
    title: "School ERP & Online Tuition Gateway",
    client: "Apex Academic Foundation",
    industry: "Education",
    category: "Web & Mobile",
    challenge: "Manual tuition collection and paper report cards led to revenue leakage and delayed parent communications.",
    solution: "Developed an all-in-one educational management system featuring online tuition payments, digital gradebooks, and an instant parent mobile portal.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Paystack API", "AWS S3"],
    results: [
      "Supports 10,000+ active students & parents",
      "100% online tuition collection with zero reconciliation errors",
      "Instant gradebook & attendance alerts",
    ],
    imageGradient: "from-purple-600/30 to-pink-500/20",
  },
];

const categories = ["All", "AI Systems", "Cybersecurity", "Web & Mobile", "Cloud Infrastructure"] as const;

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 w-fit">
            <Sparkles size={14} />
            Proof of Execution & Products
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            Our Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Portfolio & Products
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore how our AI systems (VELA), cybersecurity platforms (SentraLog XDR), and custom enterprise engineering deliver measurable results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-border/50 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:bg-card/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`p-8 rounded-3xl bg-card border ${
                  project.isBuilding ? "border-cyan-500/50 ring-1 ring-cyan-500/20" : "border-border/50 hover:border-primary/40"
                } transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.imageGradient} blur-[90px] pointer-events-none rounded-full`} />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                        {project.category}
                      </span>
                      {project.isBuilding && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold animate-pulse flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          Currently Building
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{project.industry}</span>
                  </div>

                  <h2 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-primary font-medium mb-6">Product / Client: {project.client}</p>

                  {/* Progress bar if Currently Building */}
                  {project.isBuilding && project.progress && (
                    <div className="mb-6 p-4 rounded-2xl bg-background/90 border border-cyan-500/30">
                      <div className="flex items-center justify-between text-xs font-bold mb-2">
                        <span className="text-foreground uppercase tracking-wider font-mono">Development Progress</span>
                        <span className="text-cyan-400 font-mono text-sm">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-secondary/20 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Overview & Purpose</p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Special Features Grid for VELA */}
                  {project.velaFeatures && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {project.velaFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="p-3.5 rounded-2xl bg-background/80 border border-border/40 flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            {feat.icon}
                            <span className="text-xs font-bold text-foreground font-heading">{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-tight">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Results list if not VELA */}
                  {!project.velaFeatures && (
                    <div className="p-4 rounded-2xl bg-background/80 border border-border/40 mb-6 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Key Deliverables & Results</p>
                      {project.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  {project.liveLink && (
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                      >
                        <span>{project.isBuilding ? "View Concept" : "Explore SentraLog XDR"}</span>
                        <ExternalLink size={14} />
                      </a>
                      {project.isBuilding && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs font-medium hover:bg-secondary/10 transition-colors"
                        >
                          <span>See Roadmap</span>
                          <ArrowRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30 relative z-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-background border border-border/50 text-[11px] text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="p-12 rounded-3xl bg-card border border-border/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Ready to build your next AI or Security product?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
            Let's discuss how we can build a secure, high-performance solution tailored to your exact business requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors relative z-10"
          >
            Request Technical Consultation & Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
