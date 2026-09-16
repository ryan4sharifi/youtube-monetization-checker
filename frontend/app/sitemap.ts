import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { guides } from "@/lib/guides";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    siteConfig.url ||
    "https://ismonetized.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/methodology",
    "/compare",
    "/guides",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  const guideRoutes = guides.map((g) => `/guides/${g.slug}`);

  const allRoutes = Array.from(new Set([
    ...staticRoutes,
    ...guideRoutes,
  ]));

  return allRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "daily" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/guides")
        ? 0.7
        : 0.6,
  }));
}
