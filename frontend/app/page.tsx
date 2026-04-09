"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ChannelCard from "@/components/result/ChannelCard";
import ScoreCard from "@/components/result/ScoreCard";
import SignalsCard from "@/components/result/SignalsCard";
import DisclaimerCard from "@/components/result/DisclaimerCard";
import Section from "@/components/ui/Section";
import { useAppTheme } from "@/providers/ThemeProvider";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

type CheckResult = {
  channel: {
    title: string;
    youtube_channel_id: string;
    thumbnail_url?: string | null;
    subscriber_count?: number | null;
    view_count?: number | null;
    video_count?: number | null;
  };
  score: {
    status: string;
    confidence: number;
    positive_signals: string[];
    negative_signals: string[];
  };
};

export default function HomePage() {
  const { mode, toggleMode, mounted } = useAppTheme();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(`${API_BASE}/api/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong");
      }

      setResult(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const modeLabel = mounted ? (mode === "light" ? "Dark" : "Light") : "Theme";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section className="min-h-screen flex items-center" size="md">
        <div className="w-full space-y-6">
          <HeroSection
            onSearch={handleSearch}
            loading={loading}
            modeLabel={modeLabel}
            onToggleTheme={toggleMode}
          />

          {loading && (
            <div className="text-center text-sm text-[var(--foreground-muted)]">
              Checking channel data...
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-[var(--danger)] bg-[var(--danger-soft)] p-4 text-sm text-[var(--danger)]">
              {error}
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <ChannelCard channel={result.channel} />
              <ScoreCard score={result.score} />
              <SignalsCard
                positive_signals={result.score.positive_signals}
                negative_signals={result.score.negative_signals}
              />
              <DisclaimerCard />
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}