"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "./particle-background";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* 3D Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
        >
          Corenova Technology Ltd
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight max-w-5xl leading-[1.15] mb-6"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Secure Software</span>, AI Solutions & Digital Infrastructure That Scale Your Business.
        </motion.h1>

        {/* Sub-Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {[
            "Custom Software",
            "AI Automation",
            "Mobile Apps",
            "Cybersecurity",
            "Cloud Infrastructure",
          ].map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 rounded-full bg-card/80 border border-border/60 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          We build autonomous AI workflows, zero-trust cybersecurity architectures, and scalable web platforms for enterprise organizations worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton className="px-8 py-4 text-base" onClick={() => router.push('/#contact')}>
            Get Free Consultation
          </MagneticButton>
          <MagneticButton className="px-8 py-4 text-base bg-transparent border border-border text-foreground hover:bg-secondary/10" onClick={() => router.push('/portfolio')}>
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
