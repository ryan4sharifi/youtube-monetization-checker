import type { semanticThemes, typography } from "@/theme";

export type ThemeMode = "light" | "dark";
export type SemanticTheme = (typeof semanticThemes)[ThemeMode];
export type TypographyTheme = typeof typography;