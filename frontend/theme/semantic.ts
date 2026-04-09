

import { colorTokens } from "./tokens";

export const semanticThemes = {
  light: {
    background: colorTokens.neutral[25],
    backgroundElevated: colorTokens.neutral[0],
    foreground: colorTokens.neutral[900],
    foregroundMuted: colorTokens.neutral[500],
    border: colorTokens.neutral[200],
    borderStrong: colorTokens.neutral[300],
    brand: colorTokens.brand[600],
    brandHover: colorTokens.brand[700],
    card: colorTokens.neutral[0],
    cardMuted: colorTokens.neutral[50],
    success: colorTokens.success[600],
    successSoft: colorTokens.success[50],
    warning: colorTokens.warning[600],
    warningSoft: colorTokens.warning[50],
    danger: colorTokens.danger[600],
    dangerSoft: colorTokens.danger[50],
    shadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
  },
  dark: {
    background: colorTokens.neutral[950],
    backgroundElevated: "#081120",
    foreground: colorTokens.neutral[50],
    foregroundMuted: colorTokens.neutral[400],
    border: "rgba(148, 163, 184, 0.18)",
    borderStrong: "rgba(148, 163, 184, 0.3)",
    brand: colorTokens.brand[400],
    brandHover: colorTokens.brand[300],
    card: "rgba(15, 23, 42, 0.72)",
    cardMuted: "rgba(15, 23, 42, 0.92)",
    success: colorTokens.success[500],
    successSoft: "rgba(18, 183, 106, 0.12)",
    warning: colorTokens.warning[500],
    warningSoft: "rgba(247, 144, 9, 0.12)",
    danger: colorTokens.danger[500],
    dangerSoft: "rgba(240, 68, 56, 0.12)",
    shadow: "0 20px 48px rgba(2, 6, 23, 0.45)",
  },
} as const;