"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiCloudflare, 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiPostgresql, 
  SiAmazonwebservices, 
  SiTailwindcss,
  SiSentry,
  SiDocker 
} from "react-icons/si";

const techStack = [
  { name: "Next.js 16", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Cloudflare Edge", icon: SiCloudflare, color: "#F38020" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python AI/ML", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS Cloud", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Sentry Monitoring", icon: SiSentry, color: "#362D59" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

export function TechStackMarquee() {
  return (
    <section className="py-16 border-t border-border/50 overflow-hidden bg-card/30">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Engineered with enterprise-grade tech stack standards
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-8 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...techStack, ...techStack].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm shrink-0 hover:border-primary/40 transition-colors"
              >
                <Icon size={20} style={{ color: tech.color }} />
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
