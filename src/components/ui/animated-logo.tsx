"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  variant?: "primary" | "light" | "dark" | "monochrome" | "icon-only" | "horizontal" | "vertical";
  interactive?: boolean;
}

export function AnimatedLogo({ className, variant = "primary", interactive = true }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();

  // Handle color variations based on variant
  const getColors = () => {
    switch (variant) {
      case "light": return { primary: "#ffffff", secondary: "#e2e8f0", text: "#ffffff" };
      case "dark": return { primary: "#0B1220", secondary: "#1e293b", text: "#0B1220" };
      case "monochrome": return { primary: "currentColor", secondary: "currentColor", text: "currentColor" };
      case "primary":
      default: return { primary: "#2563EB", secondary: "#06B6D4", text: "currentColor" };
    }
  };
  const colors = getColors();

  useEffect(() => {
    // Initial entrance animation
    const sequence = async () => {
      await controls.start("particles");
      await controls.start("assemble");
      await controls.start("rotate");
      await controls.start("glow");
    };
    sequence();
  }, [controls]);

  const handleClick = () => {
    if (!interactive) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  const showText = variant !== "icon-only";
  const isVertical = variant === "vertical";

  return (
    <motion.div 
      className={cn(
        "flex cursor-pointer relative",
        isVertical ? "flex-col items-center gap-4" : "items-center gap-3",
        className
      )}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={handleClick}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
    >
      {/* Ripple Effect on Click */}
      {isClicked && (
        <motion.div
          className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-primary pointer-events-none"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ 
            left: isVertical ? '50%' : '24px', 
            top: isVertical ? '32px' : '50%',
            x: '-50%', y: '-50%' 
          }}
        />
      )}

      {/* SVG Icon */}
      <motion.div
        animate={controls}
        variants={{
          rotate: { rotate: [0, -5, 0], transition: { duration: 1, ease: "easeInOut" } }
        }}
        className="relative flex-shrink-0"
      >
        <motion.svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isHovered ? { rotate: [0, 5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Ambient Glow */}
          <motion.path
            d="M 52 14 A 26 26 0 1 0 52 50"
            stroke={colors.primary}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            className="blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Abstract Geometric C (Outer Ring) */}
          <motion.path
            d="M 52 14 A 26 26 0 1 0 52 50"
            stroke={`url(#gradient_${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            variants={{
              particles: { pathLength: 0, opacity: 0 },
              assemble: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "circOut" } }
            }}
          />

          {/* Forward Arrow / Code Symbol (> inside C) */}
          <motion.path
            d="M 26 22 L 40 32 L 26 42"
            stroke={colors.secondary}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={{
              particles: { x: -20, opacity: 0 },
              assemble: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, type: "spring" } }
            }}
            animate={isHovered ? { x: 4, scale: 1.05 } : { x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          <defs>
            <linearGradient id={`gradient_${variant}`} x1="0" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors.primary} />
              <stop offset="1" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Typography */}
      {showText && (
        <motion.div
          className={cn("flex flex-col", isVertical ? "items-center text-center" : "items-start")}
          variants={{
            particles: { opacity: 0, y: 10 },
            assemble: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } }
          }}
          animate={controls}
        >
          <span 
            className="font-heading font-extrabold tracking-tight text-2xl leading-none"
            style={{ color: colors.text }}
          >
            CORENOVA
          </span>
          <span 
            className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase opacity-70 mt-1"
            style={{ color: colors.text }}
          >
            Technologies
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
