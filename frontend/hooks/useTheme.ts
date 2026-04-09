"use client";

import { useMemo } from "react";
import { semanticThemes, typography } from "@/theme";
import type { ThemeMode } from "@/types/theme";

export function useTheme(mode: ThemeMode) {
  return useMemo(
    () => ({
      colors: semanticThemes[mode],
      typography,
      mode,
    }),
    [mode]
  );
}