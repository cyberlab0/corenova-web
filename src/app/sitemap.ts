import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corenovatechnology.com";

  // Core pages
  const coreRoutes = [
    "",
    "/about",
    "/portfolio",
    "/careers",
    "/brand",
    "/blog",
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
    "/legal/security-statement",
  ];

  const coreEntries = coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : route === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route === "/about" ? 0.8 : route === "/blog" ? 0.9 : 0.5,
  }));

  // Blog posts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreEntries, ...blogEntries];
}
