import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c8ba8b7b12903b5ef7dbf5e62aafb3ee@o4511813428314112.ingest.de.sentry.io/4511813456822352",

  // Performance Monitoring
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,

  // Capture Replay Sessions
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Only enable in production
  enabled: process.env.NODE_ENV === "production",

  integrations: [
    Sentry.replayIntegration(),
  ],
});
