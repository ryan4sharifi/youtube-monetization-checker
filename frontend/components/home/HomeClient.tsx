

"use client";

import HeroSection from "@/components/home/HeroSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import ExamplePreview from "@/components/home/ExamplePreview";
import FinalCTA from "@/components/home/FinalCTA";
import { useState } from "react";

type Props = {
  featuredChannels?: any[];
};

export default function HomeClient({ featuredChannels = [] }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    if (!query) return;
    window.location.href = `/check/${query.replace("@", "")}`;
  };

  return (
    <main className="w-full">
      <HeroSection
        onSearch={handleSearch}
        loading={loading}
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