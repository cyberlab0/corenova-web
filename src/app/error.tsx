"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import Link from "next/link";
import { ShieldAlert, RefreshCw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-card border border-border shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto">
          <ShieldAlert size={32} />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-heading font-bold">Unexpected Exception Captured</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our telemetry system has logged this incident to Sentry for review. You can try refreshing the page or returning home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCw size={16} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/10 border border-border text-foreground text-sm font-medium hover:bg-secondary/20 transition-colors"
          >
            <Home size={16} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
