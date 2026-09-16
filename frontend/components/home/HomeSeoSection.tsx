import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleHelp, ShieldCheck } from "lucide-react";

const questions = [
  {
    question: "Can you check if a YouTube channel is monetized?",
    answer:
      "You cannot see another channel's official YouTube Partner Program status. The checker estimates how likely monetization is by combining public channel signals instead of relying on one metric.",
  },
  {
    question: "Is this an official YouTube monetization status?",
    answer:
      "No. Only the creator and YouTube can confirm official status inside YouTube Studio. Every result is an independent estimate and clearly shows its supporting signals and limitations.",
  },
  {
    question: "Do ads prove a YouTube channel is monetized?",
    answer:
      "No. Ads alone do not prove that the channel owner receives revenue. Subscriber scale, views, upload activity, content history, and other public evidence provide a more useful combined estimate.",
  },
] as const;

export default function HomeSeoSection() {
  return (
    <section className="w-full px-6 pt-4 md:px-10 md:pt-8" aria-labelledby="checker-details-heading">
      <div className="mx-auto max-w-6xl border-t border-[var(--border)] py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              Free channel research tool
            </p>
            <h2
              id="checker-details-heading"
              className="mt-2 text-2xl font-semibold md:text-3xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              A YouTube monetization checker built around public evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
              Enter a channel name, handle, or YouTube URL to get a fast estimate of its monetization likelihood and possible earnings. No YouTube login or private creator data is required.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[var(--foreground-muted)]">
              <p className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                Uses visible subscribers, views, uploads, and activity signals.
              </p>
              <p className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                Separates estimates from official YouTube confirmation.
              </p>
              <p className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                Explains why the result may change as public data changes.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/methodology" className="inline-flex items-center gap-2 text-[var(--brand)] hover:text-[var(--brand-hover)]">
                Review the methodology
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/guides/how-to-tell-if-a-youtube-channel-is-monetized" className="text-[var(--foreground)] hover:text-[var(--brand)]">
                Learn which signals matter
              </Link>
            </div>
          </div>

          <div>
            <h2
              className="text-xl font-semibold md:text-2xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              YouTube monetization checker FAQ
            </h2>
            <div className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {questions.map((item) => (
                <div key={item.question} className="py-5">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
