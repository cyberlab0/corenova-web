import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  output: "export",
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "corenova-technology",
  project: "corenova-web",

  // Upload a larger set of source maps for prettier stack traces
  widenClientFileUpload: true,

  // Configure source maps
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
