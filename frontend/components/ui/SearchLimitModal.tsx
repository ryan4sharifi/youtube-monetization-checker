"use client";

import { useEffect } from "react";
import { supabase } from "@/services/supabaseClient";
import { Lock, X, ArrowRight, Sparkles } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchLimitModal({ open, onClose }: Props) {

  const handleGoogleSignIn = async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: "google" });
    } catch (err) {
      console.error("Google sign-in error", err);
    }
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--background)] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)]/10">
              <Lock className="h-4 w-4 text-[var(--foreground)]" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                Free limit reached
              </h3>
              <p className="text-xs text-[var(--foreground-muted)]">
                Continue with an account
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* body */}
        <div className="mt-5 space-y-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
          <p>
            You’ve used your free searches. Sign in to continue analyzing channels and unlock full insights.
          </p>

          <div className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
            <Sparkles className="h-3.5 w-3.5" />
            Save channels & track performance
          </div>

          <div className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
            <Sparkles className="h-3.5 w-3.5" />
            Get earnings estimates & insights
          </div>
        </div>

        {/* actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleGoogleSignIn}
            className="h-11 rounded-full bg-[var(--foreground)] text-sm font-medium text-white transition hover:opacity-90"
          >
            <span className="flex items-center justify-center gap-2">
              Continue with Google
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

          <button
            onClick={onClose}
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}