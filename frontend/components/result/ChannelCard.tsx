

"use client";

import Image from "next/image";

type Channel = {
  title: string;
  youtube_channel_id: string;
  thumbnail_url?: string | null;
  subscriber_count?: number | null;
  view_count?: number | null;
  video_count?: number | null;
};

type Props = {
  channel: Channel;
};

function format(n?: number | null) {
  if (n === null || n === undefined) return "—";
  return n.toLocaleString();
}

export default function ChannelCard({ channel }: Props) {
  return (
    <div className="w-full rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      <div className="flex items-center gap-4">
        {channel.thumbnail_url ? (
          <Image
            src={channel.thumbnail_url}
            alt={channel.title}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover border border-[var(--border)] shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
          />
        ) : (
          <div className="h-16 w-16 rounded-full border border-[var(--border)] bg-[var(--card-muted)] shadow-[0_6px_18px_rgba(15,23,42,0.04)]" />
        )}

        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">{channel.title}</h3>
          <p className="truncate text-sm text-[var(--foreground-muted)]/90">
            {channel.youtube_channel_id}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
          <p className="text-[var(--foreground-muted)]/90 text-xs uppercase tracking-[0.12em]">Subscribers</p>
          <p className="mt-1 font-semibold tracking-[-0.01em] text-[var(--foreground)]">{format(channel.subscriber_count)}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
          <p className="text-[var(--foreground-muted)]/90 text-xs uppercase tracking-[0.12em]">Views</p>
          <p className="mt-1 font-semibold tracking-[-0.01em] text-[var(--foreground)]">{format(channel.view_count)}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
          <p className="text-[var(--foreground-muted)]/90 text-xs uppercase tracking-[0.12em]">Videos</p>
          <p className="mt-1 font-semibold tracking-[-0.01em] text-[var(--foreground)]">{format(channel.video_count)}</p>
        </div>
      </div>
    </div>
  );
}