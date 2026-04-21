// FIX: ensure production URL is used instead of localhost

import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    siteConfig.url ||
    "https://ismonetized.com";

  const now = new Date();

  // Core static pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  // Guide pages (dynamic from guides.ts)
  const guideRoutes = guides.map((g) => `/guides/${g.slug}`);

  // High-value programmatic SEO pages (seed manually for now)
  const checkRoutes = [
    "/check/mrbeast",
    "/check/pewdiepie",
    "/check/markiplier",
    "/check/mkbhd",
    "/check/sssniperwolf",
    "/check/tseries",
    "/check/cocomelon",
    "/check/setindia",
    "/check/wwe",
    "/check/5minutecrafts",
    "/check/like-nastya",
    "/check/vlad-and-niki",
    "/check/zee-music-company",
    "/check/dude-perfect",
    "/check/ryans-world",
    "/check/carryminati",
    "/check/khaby-lame",
    "/check/mrindianhacker",
    "/check/techburner",
    "/check/ltt",
    "/check/linus-tech-tips",
    "/check/veritasium",
    "/check/kurzgesagt",
    "/check/nasa",
    "/check/bbc",
    "/check/espn",
    "/check/sony-music-india",
    "/check/arijit-singh",
    "/check/justin-bieber",
    "/check/taylor-swift",
    "/check/badabun",
  ];

  const compareRoutes = [
    "/compare/mrbeast-vs-pewdiepie",
    "/compare/mkbhd-vs-linus-tech-tips",
    "/compare/mrbeast-vs-tseries",
    "/compare/pewdiepie-vs-tseries",
    "/compare/mrbeast-vs-cocomelon",
    "/compare/mkbhd-vs-veritasium",
    "/compare/linus-tech-tips-vs-mkbhd",
    "/compare/dude-perfect-vs-mrbeast",
    "/compare/markiplier-vs-jacksepticeye",
    "/compare/khaby-lame-vs-mrbeast",
    "/compare/taylor-swift-vs-justin-bieber",
    "/compare/bbc-vs-cnn",
    "/compare/nasa-vs-spacex",
    "/compare/espn-vs-bleacher-report",
  ];

  const allRoutes = [
    ...staticRoutes,
    ...guideRoutes,
    ...checkRoutes,
    ...compareRoutes,
  ];

  return allRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/check")
        ? 0.9
        : path.startsWith("/guides")
        ? 0.8
        : path.startsWith("/compare")
        ? 0.75
        : 0.6,
  }));
}