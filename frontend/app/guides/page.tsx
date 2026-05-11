import type { Metadata } from "next";
import GuidesIndexClient from "@/components/guides/GuidesIndexClient";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/guides`;

export const metadata: Metadata = {
  title: `YouTube Monetization Guides | ${siteConfig.name}`,
  description:
    "Detailed guides on YouTube monetization, RPM, CPM, public channel signals, earnings estimates, and how to interpret monetization likelihood.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `YouTube Monetization Guides | ${siteConfig.name}`,
    description:
      "Learn how YouTube monetization works and how to interpret public signals, earnings ranges, RPM, CPM, and channel activity.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `YouTube Monetization Guides | ${siteConfig.name}`,
    description:
      "Practical guides for understanding YouTube monetization, public data limits, and earnings estimates.",
    images: [siteConfig.ogImage],
  },
};

export default function GuidesPage() {
  return <GuidesIndexClient />;
}
