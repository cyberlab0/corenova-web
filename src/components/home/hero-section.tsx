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
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm"
        >
          Engineering the Future
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter max-w-5xl leading-[1.1] mb-8"
        >
          Engineering the Future with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI, Automation</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Cybersecurity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
        >
          We build intelligent software, automate business operations, secure digital infrastructure and develop scalable web applications for businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton className="px-8 py-4 text-lg" onClick={() => router.push('/#contact')}>
            Start Your Project
          </MagneticButton>
          <MagneticButton className="px-8 py-4 text-lg bg-transparent border border-border text-foreground hover:bg-secondary/10" onClick={() => router.push('/#contact')}>
            Book Consultation
          </MagneticButton>
        </motion.div>
      </div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
