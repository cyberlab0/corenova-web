"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Consent = "granted" | "denied" | "unknown";

const ConsentContext = createContext<{
  consent: Consent;
  setConsent: (c: Consent) => void;
}>({ consent: "unknown", setConsent: () => {} });

export function useConsent() {
  return useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  // Start as 'unknown' so nothing analytics-related runs on the first paint
  const [consent, setConsentState] = useState<Consent>("unknown");

  // Read the saved choice once on mount
  useEffect(() => {
    const saved = localStorage.getItem("analytics-consent");
    if (saved === "granted" || saved === "denied") setConsentState(saved);
  }, []);

  const setConsent = (c: Consent) => {
    localStorage.setItem("analytics-consent", c);
    setConsentState(c);
    // Also tell GA about the change for this page load (Consent Mode, Layer 2)
    window.gtag?.("consent", "update", {
      analytics_storage: c === "granted" ? "granted" : "denied",
    });
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}
