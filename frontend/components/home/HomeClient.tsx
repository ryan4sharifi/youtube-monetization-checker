

"use client";

import HeroSection from "@/components/home/HeroSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import ExamplePreview from "@/components/home/ExamplePreview";
import FinalCTA from "@/components/home/FinalCTA";
import { buildCheckPathForQuery } from "@/lib/channelRoutes";

type FeaturedChannel = {
  title: string;
  handle: string | null;
  thumbnail_url: string | null;
  subscriber_count?: number | null;
};

type Props = {
  featuredChannels?: FeaturedChannel[];
};

export default function HomeClient({ featuredChannels = [] }: Props) {
  const handleSearch = (query: string) => {
    if (!query) return;

    window.location.href = buildCheckPathForQuery(query);
  };

  return (
    <main className="w-full">
      <HeroSection
        onSearch={handleSearch}
        loading={false}
        featuredChannels={featuredChannels}
      />

      <div className="w-full px-6 md:px-10 mt-10 md:mt-12 space-y-12 md:space-y-16">
        <FeatureHighlights />
        <HowItWorks />
        <ExamplePreview />
        <FinalCTA />
      </div>
    </main>
  );
}
