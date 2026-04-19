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
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center xl:gap-8">
        <div className="max-w-2xl lg:pr-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)] md:text-xs">
            Example result preview
          </p>

          <h2
            className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            See the kind of result your visitors will get
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
            Give users an instant, polished breakdown of a channel’s likely
            monetization status, confidence score, and the signals behind the
            estimate — all on a page that feels premium and easy to trust.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="brand">Shareable result pages</Badge>
            <Badge variant="success">Confidence scoring</Badge>
            <Badge variant="default">Public-signal summary</Badge>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/check/@FoxNews"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md"
            >
              View live example
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <span className="text-[var(--foreground-muted)]/90">
              Built for clean UX, SEO pages, and conversion.
            </span>
          </div>
        </div>

        <div className="relative">

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm md:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)]/90 pb-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_8px_20px_rgba(15,23,42,0.07)]">
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

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-3">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Users className="h-3.5 w-3.5 shrink-0" />
                  Subscribers
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  {mockResult.channel.subscribers}
                </p>
              </div>
              <div className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-3">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Eye className="h-3.5 w-3.5 shrink-0" />
                  Views
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  {mockResult.channel.views}
                </p>
              </div>
              <div className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-3">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
                  <Video className="h-3.5 w-3.5 shrink-0" />
                  Videos
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  {mockResult.channel.videos}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    Confidence score
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
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

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-3">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Positive signals
                </p>
                <ul className="mt-2 space-y-2 text-sm text-[var(--foreground-muted)]">
                  {mockResult.score.positiveSignals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-3">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Limitations
                </p>
                <ul className="mt-2 space-y-2 text-sm text-[var(--foreground-muted)]">
                  {mockResult.score.negativeSignals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-[var(--foreground-muted)]">
              Example preview only. Real results are generated from live public
              channel data and may vary based on visibility and available signals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}