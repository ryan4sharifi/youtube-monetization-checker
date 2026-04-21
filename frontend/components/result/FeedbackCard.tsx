"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Check, ThumbsUp, ThumbsDown, Gauge } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Props = {
  handle: string;
};

type Rating = "very_accurate" | "somewhat" | "not_accurate";

const LABELS: Record<Rating, string> = {
  very_accurate: "Very accurate",
  somewhat: "Somewhat accurate",
  not_accurate: "Not accurate",
};

const ICONS: Record<Rating, any> = {
  very_accurate: ThumbsUp,
  somewhat: Gauge,
  not_accurate: ThumbsDown,
};

export default function FeedbackCard({ handle }: Props) {
  const { user } = useAuth();

  const normalizedHandle = useMemo(
    () => handle.replace(/^@/, "").toLowerCase(),
    [handle]
  );

  const [selected, setSelected] = useState<Rating | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      // fetch user-specific feedback
      if (user?.id) {
        try {
          const res = await fetch(
            `${API_URL}/feedback?channel_handle=${normalizedHandle}&user_id=${user.id}`,
            { cache: "no-store" }
          );

          if (res.ok) {
            const data = await res.json();
            if (!cancelled && data?.rating) {
              setSelected(data.rating as Rating);
              setSubmitted(true);
            }
          }
        } catch (err) {
          console.error("Fetch feedback error", err);
        }
      }

      // fetch summary (ALWAYS)
      try {
        const summaryRes = await fetch(
          `${API_URL}/feedback/summary?channel_handle=${normalizedHandle}`
        );

        if (summaryRes.ok) {
          const summaryData = await summaryRes.json();
          if (!cancelled) setSummary(summaryData);
        }
      } catch (e) {
        console.error("Summary fetch error", e);
      }

      if (!cancelled) setChecking(false);
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, [normalizedHandle, user?.id]);

  const submitFeedback = async (rating: Rating) => {
    if (!user?.id) return;
    if (loading) return;

    setError(null);
    setSelected(rating);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          channel_handle: normalizedHandle,
          rating,
          user_id: user.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);

      // refresh summary after vote
      try {
        const summaryRes = await fetch(
          `${API_URL}/feedback/summary?channel_handle=${normalizedHandle}`
        );
        if (summaryRes.ok) {
          const summaryData = await summaryRes.json();
          setSummary(summaryData);
        }
      } catch (e) {
        console.error("Summary refresh error", e);
      }
    } catch (error) {
      console.error("Feedback error", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setSelected(null);
  };

  // Not logged in state
  if (!user) {
    return (
      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          How accurate is this estimate?
        </h3>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          Sign in to rate this estimate
        </p>
      </div>
    );
  }

  if (checking) {
    return (
      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-6">
        <div className="h-5 w-48 animate-pulse rounded bg-[var(--background)]" />
        <div className="mt-4 flex gap-3">
          <div className="h-9 w-32 animate-pulse rounded-full bg-[var(--background)]" />
          <div className="h-9 w-40 animate-pulse rounded-full bg-[var(--background)]" />
          <div className="h-9 w-36 animate-pulse rounded-full bg-[var(--background)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            How accurate is this estimate?
          </h3>
          {summary?.total > 0 && summary?.accuracy_score !== null && (
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              {Math.round(summary.accuracy_score * 100)}% of users found this accurate
            </p>
          )}
        </div>
        {submitted && (
          <button
            onClick={reset}
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Change your mind
          </button>
        )}
      </div>

      {submitted ? (
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--foreground)] bg-[color:color-mix(in_srgb,var(--background)_80%,transparent)]">
            <Check className="h-4 w-4" />
            {selected ? LABELS[selected] : "Submitted"}
          </span>
          <span className="text-sm text-[var(--muted-foreground)]">
            Thanks for your feedback
          </span>
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {(Object.keys(LABELS) as Rating[]).map((key) => {
            const Icon = ICONS[key];
            return (
              <button
                key={key}
                onClick={() => submitFeedback(key)}
                disabled={loading}
                className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all border border-[var(--border)]
                  ${
                    selected === key
                      ? "bg-[var(--foreground)] text-white"
                      : "text-[var(--foreground)] hover:bg-[var(--background)]"
                  } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                <Icon className="h-4 w-4" />
                <span>{LABELS[key]}</span>
              </button>
            );
          })}
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}