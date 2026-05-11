import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideCTA from "@/components/guides/GuideCTA";
import { Trophy } from "lucide-react";
import ScoreCard from "@/components/result/ScoreCard";
import EarningsEstimateCard from "@/components/result/EarningsEstimateCard";
import ChannelInsightsCard from "@/components/result/ChannelInsightsCard";
import ChannelCard from "@/components/result/ChannelCard";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `Channel Comparison | ${siteConfig.shortName}`,
  description:
    "Compare two public YouTube channels using IsMonetized estimates and visible channel signals.",
  robots: {
    index: false,
    follow: false,
  },
};

// Fetch channel data using POST /api/check, matching check page logic
async function fetchChannel(handle: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/check`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: handle }),
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();

    // Some responses wrap data under success
    if (data?.success && data?.channel) {
      return {
        ...data.channel,
        score: data.score,
        earnings: data.earnings,
        insights: data.insights,
      };
    }

    return data;
  } catch {
    return null;
  }
}

function parseSlug(slug?: string) {
  if (!slug || typeof slug !== "string") return null;
  if (!slug.includes("-vs-")) return null;

  const [c1, c2] = slug.split("-vs-");
  if (!c1 || !c2) return null;

  return {
    channel1: c1.replace("@", "").trim().toLowerCase(),
    channel2: c2.replace("@", "").trim().toLowerCase(),
  };
}

function ChannelUnavailableCard({ handle }: { handle: string }) {
  return (
    <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-muted)] text-sm font-medium text-[var(--foreground-muted)]">
          @{handle.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            @{handle}
          </h3>
          <p className="text-sm text-[var(--foreground-muted)]/90">
            Channel data unavailable
          </p>
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-4 text-center text-sm text-[var(--foreground-muted)]">
        We could not load public data for this channel right now.
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const parsed = parseSlug(resolvedParams?.slug);

  if (!parsed) return notFound();

  const { channel1, channel2 } = parsed;

  const data1 = await fetchChannel(channel1);
  const data2 = await fetchChannel(channel2);

  // DO NOT hard 404 — allow partial rendering
  const bothFailed = !data1 && !data2;

  const earnings1 = data1?.earnings?.monthly_high || 0;
  const earnings2 = data2?.earnings?.monthly_high || 0;

  let winner: "channel1" | "channel2" | null = null;

  if (earnings1 > earnings2) winner = "channel1";
  else if (earnings2 > earnings1) winner = "channel2";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8 md:space-y-10 pt-4 md:pt-6 xl:pt-8">

          <GuideHero
            eyebrow="YouTube Comparison"
            title={`${data1?.title || channel1} vs ${data2?.title || channel2}: which channel earns more?`}
            description="Compare two YouTube channels side by side, including estimated earnings, audience size, and overall performance."
          />

          {bothFailed && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-muted)] px-4 py-3 text-sm text-[var(--foreground-muted)]">
              Unable to load data for these channels. Try using full handles (e.g. @mrbeast).
            </div>
          )}

          {winner && (
            <div className="flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[var(--brand)]" />
                <p className="text-sm text-[var(--foreground-muted)]">
                  <span className="font-semibold text-[var(--foreground)]">
                    {winner === "channel1"
                      ? data1?.title || channel1
                      : data2?.title || channel2}
                  </span>{" "}
                  is estimated to generate higher revenue
                </p>
              </div>

              <p className="text-xs text-[var(--foreground-muted)] md:text-right">
                Based on estimated monthly earnings
              </p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div
              className={`rounded-2xl border bg-[var(--card)] p-6 transition-all duration-200 hover:shadow-md ${
                winner === "channel1"
                  ? "border-[var(--brand)] shadow-lg"
                  : "border-[var(--border)]"
              }`}
            >
              {data1 ? (
                <ChannelCard channel={data1} />
              ) : (
                <ChannelUnavailableCard handle={channel1} />
              )}
              <div className="mt-6 space-y-4">
                <ScoreCard score={data1?.score} />
                <EarningsEstimateCard
                  earnings={data1?.earnings}
                  compareWith={data2?.earnings}
                  variant="compact"
                />
                <ChannelInsightsCard insights={data1?.insights} variant="compact" />
              </div>
            </div>

            <div
              className={`rounded-2xl border bg-[var(--card)] p-6 transition-all duration-200 hover:shadow-md ${
                winner === "channel2"
                  ? "border-[var(--brand)] shadow-lg"
                  : "border-[var(--border)]"
              }`}
            >
              {data2 ? (
                <ChannelCard channel={data2} />
              ) : (
                <ChannelUnavailableCard handle={channel2} />
              )}
              <div className="mt-6 space-y-4">
                <ScoreCard score={data2?.score} />
                <EarningsEstimateCard
                  earnings={data2?.earnings}
                  compareWith={data1?.earnings}
                  variant="compact"
                />
                <ChannelInsightsCard insights={data2?.insights} variant="compact" />
              </div>
            </div>
          </div>

          <GuideSection title="Key differences">
            <p className="text-[var(--foreground-muted)] leading-7">
              This comparison highlights differences in audience size, content performance, and estimated revenue potential. Channels with higher consistency, stronger engagement, and higher RPM signals typically outperform others.
            </p>
          </GuideSection>

          <GuideCTA />

          </div>
        </div>
      </div>
    </main>
  );
}
