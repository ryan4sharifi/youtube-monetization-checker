import { Activity, Briefcase, Layers3, UploadCloud } from "lucide-react";

type ChannelInsights = {
  channel_size: string;
  upload_strength: string;
  activity_level: string;
  business_potential: string;
};

type ChannelInsightsCardProps = {
  insights: ChannelInsights;
};

function prettify(value: string) {
  return value.replaceAll("_", " ");
}

export default function ChannelInsightsCard({
  insights,
}: ChannelInsightsCardProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] blur-3xl" />
        <div className="absolute bottom-[-28%] right-[-8%] h-48 w-48 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_6%,transparent)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] md:text-xs">
            <Layers3 className="h-3.5 w-3.5 shrink-0" />
            Channel insights
          </div>

          <h2
            className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-3xl xl:text-[2.15rem]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Snapshot of channel strength and commercial potential
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground-muted)]/90 md:text-base md:leading-8">
            These insights summarize how established the channel appears based on
            public size, publishing depth, and overall business potential.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
          <div className="rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <Layers3 className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90 md:text-sm md:normal-case md:tracking-normal">Channel size</p>
            <p className="mt-2 text-lg font-semibold capitalize tracking-[-0.03em] text-[var(--foreground)]">
              {prettify(insights.channel_size)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <UploadCloud className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90 md:text-sm md:normal-case md:tracking-normal">Upload strength</p>
            <p className="mt-2 text-lg font-semibold capitalize tracking-[-0.03em] text-[var(--foreground)]">
              {prettify(insights.upload_strength)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <Activity className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90 md:text-sm md:normal-case md:tracking-normal">Activity level</p>
            <p className="mt-2 text-lg font-semibold capitalize tracking-[-0.03em] text-[var(--foreground)]">
              {prettify(insights.activity_level)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <Briefcase className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90 md:text-sm md:normal-case md:tracking-normal">Business potential</p>
            <p className="mt-2 text-lg font-semibold capitalize tracking-[-0.03em] text-[var(--foreground)]">
              {prettify(insights.business_potential)}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)] p-4 text-sm leading-7 text-[var(--foreground-muted)]/90 shadow-[0_8px_24px_rgba(15,23,42,0.04)] md:p-5 md:leading-8">
          These insights are directional and based on public data only. They are
          designed to help with channel research, competitor review, and rough
          commercial evaluation.
        </div>
      </div>
    </section>
  );
}