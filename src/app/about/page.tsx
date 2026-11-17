"use client";

import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Building2, FileCheck2, UserCheck, Landmark, MapPin, Target } from "lucide-react";
import { LocationMapCard } from "@/components/ui/location-map-card";
import { BrandBannerCard } from "@/components/ui/brand-banner-card";

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-widest mb-6">
            <Building2 size={14} />
            About CoreNovaTechnologiesLTD &bull; CAC RC 9697390
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Engineering The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">With CoreNova</span>
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

      {/* About The Company Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Company Brand Banner */}
            <BrandBannerCard />
            
            <div className="mt-6 md:absolute md:-bottom-6 md:-right-6 bg-card/95 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-primary/30 shadow-2xl backdrop-blur-2xl z-30">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">CoreNovaTechnologiesLTD</h3>
              <p className="text-primary font-medium text-sm md:text-base">Founded by Michael Olowoselu &bull; RC 9697390</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About CoreNovaTechnologiesLTD</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              <strong className="text-foreground">CoreNovaTechnologiesLTD</strong> is a next-generation technology company founded by{" "}
              <strong className="text-foreground">Michael Olowoselu</strong>, dedicated to transforming how modern businesses operate, scale, and defend their digital assets. Registered under the Corporate Affairs Commission (CAC) as a Private Company Limited by Shares (<strong className="text-primary font-mono">RC 9697390</strong>), we engineer high-impact Artificial Intelligence systems, resilient cybersecurity platforms, and scalable enterprise software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              We partner with startups, growing enterprises, and forward-thinking organizations to eliminate operational bottlenecks through intelligent workflow automation, proactive threat detection, and cloud-native web and mobile applications built with security at the core.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              The spirit of CoreNova is rooted in the journey of our founder, <strong className="text-foreground">Michael Olowoselu</strong>, who was born in Calabar, Cross River State, Nigeria. What began as an early fascination with computers during secondary school—followed by his move to Osun State and years of relentless self-education, practical engineering, and research in AI Automation and Cybersecurity—grew into a registered technology enterprise committed to delivering world-class digital transformation from Osogbo to clients worldwide.
            </p>
            
            <div className="bg-card/50 p-6 rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">Core Company Capabilities</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> AI &amp; Workflow Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Cybersecurity &amp; SIEM Engineering</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Security Operations &amp; Audits</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Custom Enterprise Software</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Business Process Digitization</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Cloud Solutions &amp; Web/Mobile Apps</li>
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
            <p className="text-xl font-medium text-primary">&mdash; Michael Olowoselu, Founder &amp; CEO, CoreNovaTechnologiesLTD</p>
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

      {/* Mission, Vision, Goal, Values */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-card border border-border"
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become one of Africa&apos;s most trusted technology companies by empowering businesses through intelligent automation, secure digital infrastructure and innovative software solutions.
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

        {/* Our Goal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="p-10 md:p-12 rounded-3xl bg-card border border-primary/30 relative overflow-hidden mb-24 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-[90px] pointer-events-none rounded-full" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-mono font-semibold uppercase tracking-widest mb-3">
              <Target size={15} />
              <span>Long-Term Impact</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5">Our Goal</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
              CoreNovaTechnologiesLTD aspires to strengthen Nigeria&apos;s technology infrastructure across data storage, data security, cyber defense, and real-world software and web applications. The Company believes a country that secures and controls large-scale data earns deep investor confidence across technology, healthcare, and industrial development.
            </p>
            <blockquote className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary text-foreground font-heading text-lg md:text-xl font-medium italic">
              &ldquo;A nation that protects its data earns the trust required for lasting investment and economic growth.&rdquo;
            </blockquote>
          </div>
        </motion.div>

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

      {/* Corporate Registration & Ownership Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-card border border-primary/30 p-8 md:p-14 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[110px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest">
                  <ShieldCheck size={14} />
                  Officially Registered Corporate Entity
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
                  Corporate Registration &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Ownership Structure
                  </span>
                </h2>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-background/90 border border-primary/30 text-right">
                <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  CAC Registration Number
                </p>
                <p className="text-2xl font-mono font-bold text-primary tracking-wider">
                  RC 9697390
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl mb-10">
              <strong className="text-foreground">CoreNovaTechnologiesLTD</strong> is duly incorporated and registered under the{" "}
              <strong className="text-foreground">Corporate Affairs Commission (CAC)</strong> of the Federal Republic of Nigeria with registration number{" "}
              <strong className="text-primary font-mono">RC 9697390</strong> as a{" "}
              <strong className="text-foreground">Private Company Limited by Shares</strong>. The Founder and Chief Executive Officer,{" "}
              <strong className="text-foreground">Michael Olowoselu</strong>, currently holds{" "}
              <strong className="text-foreground">all issued shares (100% equity)</strong> of the company, maintaining full ownership, strategic independence, and direct accountability to every client.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Registered Name
                </p>
                <p className="text-base font-heading font-bold text-foreground">
                  CoreNovaTechnologiesLTD
                </p>
                <p className="text-xs text-muted-foreground">
                  Legally incorporated technology enterprise
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <FileCheck2 size={20} />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Registration Authority
                </p>
                <p className="text-base font-heading font-bold text-foreground">
                  CAC &bull; RC 9697390
                </p>
                <p className="text-xs text-muted-foreground">
                  Corporate Affairs Commission, Nigeria
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Landmark size={20} />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Company Classification
                </p>
                <p className="text-base font-heading font-bold text-foreground">
                  Private Company Limited by Shares
                </p>
                <p className="text-xs text-muted-foreground">
                  Incorporated corporate legal status
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <UserCheck size={20} />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Shareholding &amp; Ownership
                </p>
                <p className="text-base font-heading font-bold text-foreground">
                  100% Founder-Owned
                </p>
                <p className="text-xs text-muted-foreground">
                  Michael Olowoselu holds all shares &amp; full ownership
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Office Location & Interactive Map Section */}
      <section className="container mx-auto px-6 pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin size={14} />
            Locate Us Easily
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Visit Our Registered Office
          </h2>
          <p className="text-muted-foreground text-base">
            Find CoreNovaTechnologiesLTD at Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria, or get instant turn-by-turn directions via Google Maps.
          </p>
        </div>

        <LocationMapCard showBookAppointment={true} />
      </section>
    </div>
  );
}
