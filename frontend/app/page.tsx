"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/home/HeroSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import ExamplePreview from "@/components/home/ExamplePreview";
import FinalCTA from "@/components/home/FinalCTA";

type FeaturedChannel = {
  title: string;
  handle: string | null;
  thumbnail_url: string | null;
  subscriber_count: number | null;
};

function normalizeSearchInput(input: string) {
  const value = input.trim();
  if (!value) return "";

  const looksLikeUrl =
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.includes("youtube.com/") ||
    value.includes("youtu.be/");

  if (!looksLikeUrl) {
    return value.startsWith("@") ? value : `@${value}`;
  }

  try {
    const url = new URL(value);
    const path = url.pathname.trim();

    if (path.startsWith("/@")) {
      return path.slice(1); // "@FoxNews"
    }

    if (path.startsWith("/channel/")) {
      const parts = path.split("/");
      if (parts[2]) return parts[2]; // "UC..."
    }

    if (path.startsWith("/user/")) {
      const parts = path.split("/");
      if (parts[2]) return parts[2];
    }

    if (path.startsWith("/c/")) {
      const parts = path.split("/");
      if (parts[2]) return parts[2];
    }

    return value;
  } catch {
    return value;
  }
}
export default function HomePage() {
  const router = useRouter();
  const [featuredChannels, setFeaturedChannels] = useState<FeaturedChannel[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadFeaturedChannels() {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          return;
        }

        const response = await fetch(
          `${supabaseUrl}/rest/v1/featured_channels_view?select=title,handle,thumbnail_url,subscriber_count&order=subscriber_count.desc&limit=10`,
          {
            headers: {
              apikey: supabaseAnonKey,
              Authorization: `Bearer ${supabaseAnonKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured channels");
        }

        const data: FeaturedChannel[] = await response.json();

        if (isMounted) {
          setFeaturedChannels(data);
        }
      } catch (error) {
        console.error("Failed to load featured channels", error);
      }
    }

    loadFeaturedChannels();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = async (query: string) => {
    const normalized = normalizeSearchInput(query);
    if (!normalized) return;

    router.push(`/check/${encodeURIComponent(normalized)}`);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full pt-2 md:pt-4 lg:pt-6 space-y-6">
        <HeroSection
          onSearch={handleSearch}
          loading={false}
          featuredChannels={featuredChannels}
        />
      </div>

      <div className="w-full pt-2 md:pt-4">
        <FeatureHighlights />
      </div>

      <div className="w-full pt-6 md:pt-8 xl:pt-10">
        <HowItWorks />
      </div>

      <div className="w-full pt-6 md:pt-8 xl:pt-10">
        <ExamplePreview />
      </div>

      <div className="w-full pt-6 md:pt-8 xl:pt-10">
        <FinalCTA />
      </div>
    </main>
  );
}