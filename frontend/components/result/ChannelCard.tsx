

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
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-4">
        {channel.thumbnail_url ? (
          <Image
            src={channel.thumbnail_url}
            alt={channel.title}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-[var(--card-muted)]" />
        )}

        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">{channel.title}</h3>
          <p className="truncate text-sm text-[var(--foreground-muted)]">
            {channel.youtube_channel_id}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-xl bg-[var(--card-muted)] p-3">
          <p className="text-[var(--foreground-muted)]">Subscribers</p>
          <p className="font-semibold">{format(channel.subscriber_count)}</p>
        </div>
        <div className="rounded-xl bg-[var(--card-muted)] p-3">
          <p className="text-[var(--foreground-muted)]">Views</p>
          <p className="font-semibold">{format(channel.view_count)}</p>
        </div>
        <div className="rounded-xl bg-[var(--card-muted)] p-3">
          <p className="text-[var(--foreground-muted)]">Videos</p>
          <p className="font-semibold">{format(channel.video_count)}</p>
        </div>
      </div>
    </div>
  );
}