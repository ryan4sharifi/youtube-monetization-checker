"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import ChannelCard from "@/components/result/ChannelCard";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

if (!API_URL) {
  console.error("NEXT_PUBLIC_API_URL is not defined");
}

export default function SavedChannelsList() {
  const { user } = useAuth();

  const [channels, setChannels] = useState<any[]>([]);
  const [channelDataMap, setChannelDataMap] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaved = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${API_URL}/saved-channels?user_id=${user.id}`
        );

        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setChannels(data || []);

        // Fetch real channel data for each saved channel
        try {
          const results = await Promise.all(
            (data || []).map(async (c: any) => {
              const handle = c.channel_handle.replace(/^@/, "").toLowerCase();
              const r = await fetch(`${API_URL}/api/check`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: handle }),
              });

              if (!r.ok) return [handle, null];

              const json = await r.json();
              return [handle, json?.channel || null];
            })
          );

          const map: Record<string, any> = {};
          results.forEach(([handle, ch]) => {
            if (ch) map[handle] = ch;
          });

          setChannelDataMap(map);
        } catch (e) {
          console.error("Channel data fetch error", e);
        }
      } catch (err) {
        console.error("Saved channels fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSaved();
  }, [user?.id]);

  if (!user) {
    return (
      <div className="mt-10 text-center text-sm text-[var(--muted-foreground)]">
        Sign in to view your saved channels
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-40 animate-pulse rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]"
          />
        ))}
      </div>
    );
  }

  if (channels.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-8 text-center">
        <p className="text-sm text-[var(--muted-foreground)]">
          No saved channels yet
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 mx-auto max-w-7xl">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => {
          const handle = channel.channel_handle.replace(/^@/, "").toLowerCase();
          return (
            <Link key={channel.id} href={`/check/@${handle}`}>
              <ChannelCard
                channel={
                  channelDataMap[handle]
                    ? {
                        title: channelDataMap[handle].title,
                        youtube_channel_id: channelDataMap[handle].youtube_channel_id,
                        thumbnail_url: channelDataMap[handle].thumbnail_url,
                        subscriber_count: channelDataMap[handle].subscriber_count,
                        view_count: channelDataMap[handle].view_count,
                        video_count: channelDataMap[handle].video_count,
                      }
                    : {
                        title: `@${handle}`,
                        youtube_channel_id: `@${handle}`,
                        thumbnail_url: null,
                        subscriber_count: null,
                        view_count: null,
                        video_count: null,
                      }
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}