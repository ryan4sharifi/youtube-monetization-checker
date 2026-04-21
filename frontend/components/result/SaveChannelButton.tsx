

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

export default function SaveChannelButton({ handle }: Props) {
  const { user } = useAuth();

  const normalizedHandle = useMemo(
    () => handle.replace(/^@/, "").toLowerCase(),
    [handle]
  );

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Check if already saved
  useEffect(() => {
    const checkSaved = async () => {
      if (!user?.id || !API_URL || !normalizedHandle) return;

      try {
        const res = await fetch(
          `${API_URL}/saved-channels?user_id=${user.id}`
        );

        if (!res.ok) return;

        const data = await res.json();
        const exists = data?.some(
          (c: any) => c.channel_handle === normalizedHandle
        );

        setSaved(exists);
      } catch (e) {
        console.error("Saved check error", e);
      }
    };

    checkSaved();
  }, [user?.id, normalizedHandle]);

  const toggleSave = async () => {
    if (!user?.id || loading || !API_URL || !normalizedHandle) return;

    setLoading(true);

    try {
      if (saved) {
        // remove
        await fetch(
          `${API_URL}/save-channel?user_id=${user.id}&channel_handle=${normalizedHandle}`,
          { method: "DELETE" }
        );
        setSaved(false);
      } else {
        // save
        await fetch(`${API_URL}/save-channel`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user.id,
            channel_handle: normalizedHandle,
          }),
        });
        setSaved(true);
      }
    } catch (e) {
      console.error("Toggle save error", e);
    } finally {
      setLoading(false);
    }
  };

  // Not logged in
  if (!user) {
    return (
      <button
        disabled
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] px-4 text-sm text-[var(--muted-foreground)]"
      >
        <Bookmark className="h-4 w-4" />
        Sign in to save
      </button>
    );
  }

  return (
    <button
      onClick={toggleSave}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      disabled={loading}
      className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium border border-[var(--border)] transition-all
        ${
          saved
            ? "bg-[color:color-mix(in_srgb,var(--background)_85%,transparent)] text-[var(--foreground)]"
            : "text-[var(--foreground)] hover:bg-[var(--background)]"
        }
        ${loading ? "opacity-70 cursor-not-allowed" : ""}
      `}
    >
      {saved ? (
        <>
          <BookmarkCheck className="h-4 w-4" />
          <span>{hovering ? "Remove" : "Saved"}</span>
        </>
      ) : (
        <>
          <Bookmark className="h-4 w-4" />
          <span>Save channel</span>
        </>
      )}
    </button>
  );
}