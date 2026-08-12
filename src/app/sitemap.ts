import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corenovatechnology.com";

  // Core pages
  const routes = [
    "",
    "/about",
    "/brand",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/disclaimer",
    "/legal/accessibility",
    "/legal/ndpr",
    "/legal/copyright",
    "/legal/gdpr",
    "/legal/acceptable-use",
    "/legal/data-retention",
    "/legal/security",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/about" ? 0.8 : 0.5,
  }));
}
