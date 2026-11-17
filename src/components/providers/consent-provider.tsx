"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Consent = "granted" | "denied" | "unknown";

const STORAGE_KEY = "analytics-consent";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

function getClientSnapshot(): Consent {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "granted" || saved === "denied") return saved;
    }
  } catch {
    // Gracefully handle restricted storage / private browsing mode
  }
  return "unknown";
}

function getServerSnapshot(): Consent {
  return "unknown";
}

const ConsentContext = createContext<{
  consent: Consent;
  setConsent: (c: Consent) => void;
}>({ consent: "unknown", setConsent: () => {} });

export function useConsent() {
  return useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const consent = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const setConsent = (c: Consent) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, c);
      }
    } catch {
      // Gracefully handle storage write errors
    }
    listeners.forEach((listener) => listener());
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: c === "granted" ? "granted" : "denied",
      });
    }
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}
