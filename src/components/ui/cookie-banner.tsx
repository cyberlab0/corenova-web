"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useConsent } from "@/components/providers/consent-provider";

export function CookieBanner() {
  const { consent, setConsent } = useConsent();

  // If already decided, hide
  if (consent !== "unknown") return null;

  const handleAccept = () => {
    setConsent("granted");
  };

  const handleDecline = () => {
    setConsent("denied");
  };

  return (
    <AnimatePresence>
      {consent === "unknown" && (
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
