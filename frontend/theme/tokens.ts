export const colorTokens = {
  neutral: {
    0: "#FFFFFF",
    25: "#FCFCFD",
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },
  brand: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  success: {
    50: "#ECFDF3",
    100: "#D1FADF",
    500: "#12B76A",
    600: "#039855",
    700: "#027A48",
  },
  warning: {
    50: "#FFFAEB",
    100: "#FEF0C7",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
  },
  danger: {
    50: "#FEF3F2",
    100: "#FEE4E2",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
  },
} as const;

export const fontTokens = {
  family: {
    heading: "var(--font-plus-jakarta)",
    body: "var(--font-inter)",
    mono: "ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  lineHeight: {
    tight: 1.15,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
  },
} as const;

export const spacingTokens = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
} as const;

export const radiusTokens = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  pill: "9999px",
} as const;

export const shadowTokens = {
  sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
  md: "0 8px 24px rgba(15, 23, 42, 0.08)",
  lg: "0 16px 40px rgba(15, 23, 42, 0.12)",
  xl: "0 24px 64px rgba(15, 23, 42, 0.16)",
} as const;

export const semanticThemes = {
  light: {
    background: "var(--background)",
    backgroundElevated: "var(--background-elevated)",
    foreground: "var(--foreground)",
    foregroundMuted: "var(--foreground-muted)",
    border: "var(--border)",
    borderStrong: "var(--border-strong)",
    brand: "var(--brand)",
    brandHover: "var(--brand-hover)",
    card: "var(--card)",
    cardMuted: "var(--card-muted)",
    success: "var(--success)",
    successSoft: "var(--success-soft)",
    warning: "var(--warning)",
    warningSoft: "var(--warning-soft)",
    danger: "var(--danger)",
    dangerSoft: "var(--danger-soft)",
    shadow: "var(--shadow)",
  },
  dark: {
    background: "var(--background)",
    backgroundElevated: "var(--background-elevated)",
    foreground: "var(--foreground)",
    foregroundMuted: "var(--foreground-muted)",
    border: "var(--border)",
    borderStrong: "var(--border-strong)",
    brand: "var(--brand)",
    brandHover: "var(--brand-hover)",
    card: "var(--card)",
    cardMuted: "var(--card-muted)",
    success: "var(--success)",
    successSoft: "var(--success-soft)",
    warning: "var(--warning)",
    warningSoft: "var(--warning-soft)",
    danger: "var(--danger)",
    dangerSoft: "var(--danger-soft)",
    shadow: "var(--shadow)",
  },
} as const;

export const radius = radiusTokens;
export const spacing = spacingTokens;
export const shadows = shadowTokens;

export const typography = {
  display: {
    fontFamily: fontTokens.family.heading,
    fontSize: fontTokens.size["5xl"],
    fontWeight: fontTokens.weight.extrabold,
    lineHeight: fontTokens.lineHeight.tight,
    letterSpacing: "-0.04em",
  },
  h1: {
    fontFamily: fontTokens.family.heading,
    fontSize: fontTokens.size["4xl"],
    fontWeight: fontTokens.weight.bold,
    lineHeight: fontTokens.lineHeight.tight,
    letterSpacing: "-0.03em",
  },
  h2: {
    fontFamily: fontTokens.family.heading,
    fontSize: fontTokens.size["3xl"],
    fontWeight: fontTokens.weight.bold,
    lineHeight: fontTokens.lineHeight.snug,
    letterSpacing: "-0.025em",
  },
  h3: {
    fontFamily: fontTokens.family.heading,
    fontSize: fontTokens.size["2xl"],
    fontWeight: fontTokens.weight.semibold,
    lineHeight: fontTokens.lineHeight.snug,
  },
  bodyLg: {
    fontFamily: fontTokens.family.body,
    fontSize: fontTokens.size.lg,
    fontWeight: fontTokens.weight.regular,
    lineHeight: fontTokens.lineHeight.relaxed,
  },
  body: {
    fontFamily: fontTokens.family.body,
    fontSize: fontTokens.size.base,
    fontWeight: fontTokens.weight.regular,
    lineHeight: fontTokens.lineHeight.normal,
  },
  bodySm: {
    fontFamily: fontTokens.family.body,
    fontSize: fontTokens.size.sm,
    fontWeight: fontTokens.weight.regular,
    lineHeight: fontTokens.lineHeight.normal,
  },
  label: {
    fontFamily: fontTokens.family.body,
    fontSize: fontTokens.size.sm,
    fontWeight: fontTokens.weight.semibold,
    lineHeight: fontTokens.lineHeight.normal,
    letterSpacing: "-0.01em",
  },
} as const;