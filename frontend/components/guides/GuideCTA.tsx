import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GuideCTA() {
  return (
    <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      <h2
        className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        Check any channel’s monetization
      </h2>

      <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--foreground-muted)]">
        Use the checker to estimate whether a YouTube channel is monetized and understand its earning potential based on real data signals.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold !text-white shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]"
        >
          Try the checker
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/guides"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Explore guides
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}