"use client";

import { useEffect, useState } from "react";
import type { ThemeMode } from "@/types/theme";

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedMode = window.localStorage.getItem("theme-mode") as ThemeMode | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const nextMode: ThemeMode = storedMode ?? (systemPrefersDark ? "dark" : "light");

    setMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
    setMounted(true);
  }, []);

  const toggleMode = () => {
    const nextMode: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
    window.localStorage.setItem("theme-mode", nextMode);
  };

  return { mode, toggleMode, mounted };
}