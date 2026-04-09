"use client";

import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Play, TrendingUp, Users, Eye, Video, ArrowRight } from "lucide-react";

type MockResult = {
  channel: {
    title: string;
    handle: string;
    subscribers: string;
    views: string;
    videos: string;
  };
  score: {
    status: "possibly_monetized";
    confidence: number;
    positiveSignals: string[];
    negativeSignals: string[];
  };
};

const mockResult: MockResult = {
  channel: {
    title: "FoxNews",
    handle: "@FoxNews",
    subscribers: "8.42M",
    views: "3.1B",
    videos: "394",
  },
  score: {
    status: "possibly_monetized",
    confidence: 87,
    positiveSignals: [
      "Strong subscriber base",
      "High lifetime view count",
      "Established upload history",
    ],
    negativeSignals: ["Public data cannot confirm official approval"],
  },
};

export default function ExamplePreview() {
  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Example result preview
          </p>

          <h2
            className="mt-3 text-3xl font-bold tracking-[-0.04em] md:text-4xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            See the kind of result your visitors will get
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
            Give users an instant, polished breakdown of a channel’s likely
            monetization status, confidence score, and the signals behind the
            estimate — all on a page that feels premium and easy to trust.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge variant="brand">Shareable result pages</Badge>
            <Badge variant="success">Confidence scoring</Badge>
            <Badge variant="default">Public-signal summary</Badge>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="/check/@FoxNews"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition hover:scale-[1.02] hover:bg-[var(--brand-hover)]"
            >
              View live example
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <span className="text-[var(--foreground-muted)]">
              Built for clean UX, SEO pages, and conversion.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[12%] top-[5%] h-36 w-36 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-3xl" />
            <div className="absolute bottom-[4%] right-[8%] h-32 w-32 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] blur-3xl" />
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                  <Play className="h-6 w-6 text-[var(--foreground)]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {mockResult.channel.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {mockResult.channel.handle}
                  </p>
                </div>
              </div>

              <Badge variant="success">Possibly Monetized</Badge>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[var(--card-muted)] p-4">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Users className="h-3.5 w-3.5 shrink-0" />
                  Subscribers
                </p>
                <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                  {mockResult.channel.subscribers}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--card-muted)] p-4">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Eye className="h-3.5 w-3.5 shrink-0" />
                  Views
                </p>
                <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                  {mockResult.channel.views}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--card-muted)] p-4">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Video className="h-3.5 w-3.5 shrink-0" />
                  Videos
                </p>
                <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                  {mockResult.channel.videos}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_82%,transparent)] p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    Confidence score
                  </p>
                  <p className="mt-1 text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)]">
                    {mockResult.score.confidence}%
                  </p>
                </div>

                <div className="h-2 w-28 overflow-hidden rounded-full bg-[var(--card-muted)]">
                  <div
                    className="h-full rounded-full bg-[var(--success)]"
                    style={{ width: `${mockResult.score.confidence}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Positive signals
                </p>
                <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-[var(--foreground-muted)]">
                  {mockResult.score.positiveSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Limitations
                </p>
                <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-[var(--foreground-muted)]">
                  {mockResult.score.negativeSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-[var(--foreground-muted)]">
              Example preview only. Real results are generated from live public
              channel data and may vary based on visibility and available signals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}