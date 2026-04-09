

import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

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
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}