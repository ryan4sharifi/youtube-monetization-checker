"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useTheme } from "@/hooks/useTheme";
import type { ThemeMode } from "@/types/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
  mounted: boolean;
  theme: ReturnType<typeof useTheme>;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { mode, toggleMode, mounted } = useThemeMode();
  const theme = useTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, mounted, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }

  return context;
}