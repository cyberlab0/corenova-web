"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "./animated-logo";

export function IntroAnimation() {
  const [show, setShow] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Hide overlay after the complete 3-second sequence
    const timer = setTimeout(() => setShow(false), 3500);
    const renderTimer = setTimeout(() => setIsRendered(false), 4500);
    return () => {
      clearTimeout(timer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md"
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Intro Particle Assembly & Logo construction handles its own internal timing in AnimatedLogo */}
        <AnimatedLogo variant="vertical" interactive={false} />
        
        {/* Tagline appears underneath */}
        <motion.p
          className="mt-6 text-sm md:text-base font-medium text-muted-foreground tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Engineering the Future
        </motion.p>
      </div>
    </motion.div>
  );
}
