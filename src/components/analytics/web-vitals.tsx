"use client";

import { useReportWebVitals } from "next/web-vitals";
import { reportWebVitals } from "@/lib/analytics";
import { useConsent } from "@/components/providers/consent-provider";

export function WebVitals() {
  const { consent } = useConsent();

  useReportWebVitals((metric) => {
    // Only report if they actually consented to analytics
    if (consent === "granted") {
      reportWebVitals(metric);
    }
  });
  
  return null;
}
