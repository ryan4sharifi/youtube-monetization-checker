import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import { siteConfig } from "@/constants/site";

type FeaturedChannel = {
  title: string;
  handle: string | null;
  thumbnail_url: string | null;
  subscriber_count: number | null;
};

export const metadata: Metadata = {
  title: "YouTube Monetization Checker – Check If a Channel Is Monetized",
  description:
    siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
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

  return <HomeClient featuredChannels={featuredChannels} />;
}