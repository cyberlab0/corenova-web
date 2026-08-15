"use client";

import Link from "next/link";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CommandPalette } from "@/components/ui/command-palette";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  
  // Scale logo from 1 to 0.75 as user scrolls down 100px
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.75]);
  const logoOrigin = useTransform(scrollY, [0, 100], ["0% 50%", "0% 50%"]);
  
  // Adjust padding & background of the navbar dynamically
  const py = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(11, 18, 32, 0)", "rgba(11, 18, 32, 0.85)"]);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 backdrop-blur-xl border-b border-border/50"
      style={{ 
        paddingTop: py, 
        paddingBottom: py,
        backgroundColor: headerBg,
      }}
    >
      <Link href="/" className="z-50 relative block">
        <motion.div style={{ scale: logoScale, transformOrigin: logoOrigin }}>
          <AnimatedLogo />
        </motion.div>
      </Link>
      
      <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
        <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
        <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
        <Link href="/why-us" className="hover:text-foreground transition-colors">Why Choose Us</Link>
        <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/2349131815101"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium hover:bg-green-500/20 transition-colors"
          title="WhatsApp Support"
        >
          <span>WhatsApp</span>
        </a>
        <CommandPalette />
        <MagneticButton className="hidden md:block" onClick={() => router.push('/#contact')}>
          Get Free Consultation
        </MagneticButton>
      </div>
    </motion.header>
  );
}
