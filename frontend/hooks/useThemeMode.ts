"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { ThemeMode } from "@/types/theme";

const STORAGE_KEY = "theme-mode";
const THEME_CHANGE_EVENT = "theme-mode-change";

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark";
}

function getSystemMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredMode(): ThemeMode | null {
  if (typeof window === "undefined") return null;

  const storedMode = window.localStorage.getItem(STORAGE_KEY);
  return isThemeMode(storedMode) ? storedMode : null;
}

function getThemeSnapshot(): ThemeMode {
  return getStoredMode() ?? getSystemMode();
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}

function subscribeToThemeChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function subscribeToMountedState() {
  return () => undefined;
}

export function useThemeMode() {
  const mode = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const mounted = useSyncExternalStore(
    subscribeToMountedState,
    () => true,
    () => false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleMode = () => {
    const nextMode: ThemeMode = mode === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", nextMode === "dark");
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return { mode, toggleMode, mounted };
}
