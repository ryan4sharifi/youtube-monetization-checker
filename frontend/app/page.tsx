import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import HomeSeoSection from "@/components/home/HomeSeoSection";
import { siteConfig } from "@/constants/site";

type FeaturedChannel = {
  title: string;
  handle: string | null;
  thumbnail_url: string | null;
  subscriber_count: number | null;
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Check whether a YouTube channel is likely monetized with IsMonetized",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

async function getFeaturedChannels(): Promise<FeaturedChannel[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) return [];

    const res = await fetch(
      `${supabaseUrl}/rest/v1/featured_channels_view?select=title,handle,thumbnail_url,subscriber_count&order=subscriber_count.desc&limit=10`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    return res.json();
  } catch {
    return [];
  }
}

export default async function Page() {
  const featuredChannels = await getFeaturedChannels();

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "IsMonetized YouTube Monetization Checker",
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript and a modern web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "YouTube channel monetization likelihood estimate",
      "Public channel signal analysis",
      "Estimated YouTube earnings range",
      "Shareable channel result pages",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you check if a YouTube channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "YouTube does not publish another channel's official monetization status. IsMonetized estimates likelihood from public signals such as subscribers, views, upload history, and activity.",
        },
      },
      {
        "@type": "Question",
        name: "Is the YouTube monetization checker free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can run free channel checks without connecting a YouTube or YouTube Studio account.",
        },
      },
      {
        "@type": "Question",
        name: "Does seeing ads prove that a channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Ads can appear without proving that the channel owner receives revenue, so the estimate considers several public signals together.",
        },
      },
    ],
  };

  return (
    <>
      <HomeClient featuredChannels={featuredChannels} />
      <HomeSeoSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
