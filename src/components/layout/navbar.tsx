"use client";

import Link from "next/link";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  
  // Scale logo from 1 to 0.75 as user scrolls down 100px
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.75]);
  const logoOrigin = useTransform(scrollY, [0, 100], ["0% 50%", "0% 50%"]);
  
  // Also adjust padding of the navbar
  const py = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 backdrop-blur-xl border-b border-border/50"
      style={{ 
        paddingTop: py, 
        paddingBottom: py,
        backgroundColor: `rgba(11, 18, 32, ${bgOpacity.get()})` 
      }}
    >
      <Link href="/" className="z-50 relative block">
        <motion.div style={{ scale: logoScale, transformOrigin: logoOrigin }}>
          <AnimatedLogo />
        </motion.div>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
        <Link href="/#about" className="hover:text-foreground transition-colors">About</Link>
        <Link href="/about" className="hover:text-foreground transition-colors">Founder</Link>
        <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <MagneticButton className="hidden md:block" onClick={() => router.push('/#contact')}>
          Start Your Project
        </MagneticButton>
      </div>
    </motion.header>
  );
}
