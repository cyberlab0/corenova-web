"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CommandPalette } from "@/components/ui/command-palette";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/trust", label: "Trust Center" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scale logo from 1 to 0.75 as user scrolls down 100px
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.75]);
  const logoOrigin = useTransform(scrollY, [0, 100], ["0% 50%", "0% 50%"]);

  // Adjust padding & background of the navbar dynamically
  const py = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(11, 18, 32, 0)", "rgba(11, 18, 32, 0.85)"]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 backdrop-blur-xl border-b border-border/50"
        style={{
          paddingTop: py,
          paddingBottom: py,
          backgroundColor: headerBg,
        }}
      >
        <Link href="/" className="z-50 relative block" onClick={() => setMobileMenuOpen(false)}>
          <motion.div style={{ scale: logoScale, transformOrigin: logoOrigin }}>
            <AnimatedLogo />
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
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
          <MagneticButton className="hidden md:block" onClick={() => router.push("/#contact")}>
            Get Free Consultation
          </MagneticButton>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-card/80 border border-border/60 text-foreground hover:border-primary/40 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 lg:hidden bg-[#0B1220]/95 backdrop-blur-2xl border-b border-border/60 shadow-2xl"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-border/50 flex flex-col gap-3">
                <a
                  href="https://wa.me/2349131815101"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium hover:bg-green-500/20 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/#contact");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
