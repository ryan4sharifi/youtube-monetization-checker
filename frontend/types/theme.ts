import type { semanticThemes } from "@/theme/semantic";
import type { typography } from "@/theme/typography";

export type ThemeMode = "light" | "dark";
export type SemanticTheme = (typeof semanticThemes)[ThemeMode];
export type TypographyTheme = typeof typography;