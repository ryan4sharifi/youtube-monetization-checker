import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    siteConfig.url ||
    "https://ismonetized.com";

  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/methodology",
    "/guides",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  const guideRoutes = guides.map((g) => `/guides/${g.slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...guideRoutes,
  ];

  return allRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/guides")
        ? 0.8
        : 0.6,
  }));
}
