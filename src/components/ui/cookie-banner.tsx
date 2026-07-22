"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const cookieConsent = localStorage.getItem("corenova_cookie_consent");
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("corenova_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("corenova_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-md z-[100] p-6 rounded-2xl bg-card border border-border shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">We value your privacy</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies as detailed in our{" "}
                <Link href="/legal/cookies" className="text-primary hover:underline transition-all">
                  Cookie Policy
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
              >
                Accept All
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 bg-secondary/10 text-foreground hover:bg-secondary/20 px-4 py-2 rounded-xl text-sm font-medium transition-colors border border-border"
              >
                Decline Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
