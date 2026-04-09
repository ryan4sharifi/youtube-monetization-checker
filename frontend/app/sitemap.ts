// FIX: ensure production URL is used instead of localhost

import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fallback to env or hardcoded domain
  const base = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "https://ismonetized.com";

  const routes = [
    "",
    "/youtube-monetization-checker",
    "/how-to-tell-if-a-youtube-channel-is-monetized",
    "/youtube-partner-program-requirements",
    "/can-you-see-if-a-youtube-channel-is-monetized",
    "/how-many-subscribers-to-get-monetized-on-youtube",
    "/youtube-monetization-rules",
    "/how-much-money-do-youtubers-make",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}