import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "corenova-technology",
  project: "corenova-web",

  // Disable public source map emission on static exports so original source code is never exposed
  sourcemaps: {
    disable: true,
  },
});
