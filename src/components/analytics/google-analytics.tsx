"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from "@/lib/analytics";
import { useConsent } from "@/components/providers/consent-provider";

export default function GoogleAnalytics() {
  const { consent } = useConsent();
  // Not in development, and not until the visitor has explicitly agreed
  if (!isAnalyticsEnabled() || consent !== "granted") {
    return null;
  }
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
