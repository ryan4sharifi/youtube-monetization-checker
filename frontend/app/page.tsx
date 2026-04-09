"use client";

import HeroSection from "@/components/home/HeroSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import ExamplePreview from "@/components/home/ExamplePreview";
import FinalCTA from "@/components/home/FinalCTA";
import Section from "@/components/ui/Section";
import { useRouter } from "next/navigation";


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
      return path.slice(1); // "@ObserveFoods"
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

  const handleSearch = async (query: string) => {
    const normalized = normalizeSearchInput(query);
    if (!normalized) return;

    router.push(`/check/${encodeURIComponent(normalized)}`);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section className="min-h-screen flex items-center" size="lg">
        <div className="w-full space-y-6">
          <HeroSection onSearch={handleSearch} loading={false} />
        </div>
      </Section>

      <Section size="lg" className="pt-0 md:pt-0">
        <FeatureHighlights />
      </Section>

      <Section size="lg">
        <HowItWorks />
      </Section>

      <Section size="lg">
        <ExamplePreview />
      </Section>

      <Section size="lg">
        <FinalCTA />
      </Section>
    </main>
  );
}