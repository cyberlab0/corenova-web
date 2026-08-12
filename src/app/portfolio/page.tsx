"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
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
}

const projects: PortfolioProject[] = [
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
  {
    id: "ai-document-pipeline",
    title: "AI Document & Invoice Extraction Engine",
    client: "Apex Logistics & Trade",
    industry: "Logistics & Supply Chain",
    category: "AI Systems",
    challenge: "Manual processing of thousands of unstructured invoices and bill of lading documents caused severe customs processing delays.",
    solution: "Architected a custom machine learning OCR pipeline that extracts structured JSON data from scanned PDFs in under 45 seconds.",
    tech: ["Python", "TensorFlow", "FastAPI", "OpenAI Vision", "Docker"],
    results: [
      "Extracted 500,000+ documents automatically",
      "Cut document processing time from 4 days to 45 seconds",
      "99.4% field extraction accuracy",
    ],
    imageGradient: "from-emerald-500/30 to-teal-600/20",
  },
  {
    id: "fintech-security-hardening",
    title: "FinTech Zero-Trust Security & SOC Hardening",
    client: "Vanguard Capital",
    industry: "Banking & FinTech",
    category: "Cybersecurity",
    challenge: "Rapid growth created cloud permission drift and potential vulnerability exposure prior to regulatory licensing audit.",
    solution: "Performed deep penetration testing, zero-trust IAM restructuring, implemented Cloudflare WAF rules, and deployed Sentry security monitoring.",
    tech: ["Cloudflare WAF", "Sentry", "SIEM Monitoring", "Penetration Testing"],
    results: [
      "Remediated 14 critical security vulnerabilities",
      "100% NDPR & ISO 27001 audit compliance rating",
      "Zero security breaches or data leaks",
    ],
    imageGradient: "from-indigo-600/30 to-violet-600/20",
  },
];

const categories = ["All", "Web & Mobile", "AI Systems", "Cybersecurity", "Cloud Infrastructure"] as const;

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
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Proof of Execution
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            Our Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Portfolio & Work
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore how our software engineering, custom AI pipelines, and cybersecurity audits deliver measurable business impact.
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
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.imageGradient} blur-[80px] pointer-events-none rounded-full`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{project.industry}</span>
                  </div>

                  <h2 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-primary font-medium mb-6">Client: {project.client}</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">The Challenge</p>
                      <p className="text-sm text-foreground/80">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Our Solution</p>
                      <p className="text-sm text-foreground/80">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-4 rounded-2xl bg-background/80 border border-border/40 mb-6 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Key Results Delivered</p>
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
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
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Have a similar project in mind?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
            Let's discuss how we can build a secure, high-performance solution tailored to your exact business requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors relative z-10"
          >
            Request Project Scope & Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
