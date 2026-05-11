"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Bookmark, BookmarkCheck } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

if (!API_URL) {
  console.error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

type Props = {
  handle: string;
};

type SavedChannel = {
  channel_handle: string;
};

export default function SaveChannelButton({ handle }: Props) {
  const { user, session } = useAuth();
  const accessToken = session?.access_token;

  const normalizedHandle = useMemo(
    () => handle.replace(/^@/, "").toLowerCase(),
    [handle]
  );

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if already saved
  useEffect(() => {
    const checkSaved = async () => {
      if (!user?.id || !accessToken || !API_URL || !normalizedHandle) return;

      try {
        const res = await fetch(`${API_URL}/saved-channels`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) return;

        const data = (await res.json()) as SavedChannel[];
        const exists = data?.some(
          (channel) => channel.channel_handle === normalizedHandle
        );

        setSaved(exists);
      } catch (e) {
        console.error("Saved check error", e);
      }
    };

    checkSaved();
  }, [accessToken, user?.id, normalizedHandle]);

  const toggleSave = async () => {
    if (!user?.id || loading || !API_URL || !normalizedHandle) return;
    if (!accessToken) {
      setError("Please sign in again to save this channel.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      if (saved) {
        // remove
        const res = await fetch(
          `${API_URL}/save-channel?channel_handle=${encodeURIComponent(
            normalizedHandle
          )}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (res.status === 429) {
          setError("Too many save requests. Please try again later.");
          return;
        }

        if (!res.ok) {
          setError("We could not update your saved channels right now.");
          return;
        }

        setSaved(false);
      } else {
        // save
        const res = await fetch(`${API_URL}/save-channel`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            channel_handle: normalizedHandle,
          }),
        });

        if (res.status === 429) {
          setError("Too many save requests. Please try again later.");
          return;
        }

        if (!res.ok) {
          setError("We could not save this channel right now.");
          return;
        }

        setSaved(true);
      }
    } catch (e) {
      console.error("Toggle save error", e);
      setError("We could not update your saved channels right now.");
    } finally {
      setLoading(false);
    }
  };

  // Not logged in
  if (!user) {
    return (
      <button
        disabled
        className="inline-flex h-9 sm:h-10 items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--border)] px-3 sm:px-4 text-xs sm:text-sm whitespace-nowrap text-[var(--muted-foreground)]"
      >
        <Bookmark className="h-4 w-4" />
        Sign in to save
      </button>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button
        onClick={toggleSave}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        disabled={loading}
        className={`group inline-flex h-9 sm:h-10 items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 text-xs sm:text-sm font-medium border border-[var(--border)]
          backdrop-blur-md transition-all duration-200 ease-out
          shadow-sm hover:shadow-md active:scale-[0.98]
          ${
            saved
              ? "bg-[color:color-mix(in_srgb,var(--background)_80%,transparent)] text-[var(--foreground)]"
              : "text-[var(--foreground)] hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)]"
          }
          ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
          whitespace-nowrap
        `}
      >
        {saved ? (
          <>
            <BookmarkCheck className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span>{hovering ? "Remove" : "Saved"}</span>
          </>
        ) : (
          <>
            <Bookmark className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Save channel</span>
          </>
        )}
      </button>
      {error && (
        <span className="max-w-52 text-xs text-red-500" role="status">
          {error}
        </span>
      )}
    </div>
  );
}
