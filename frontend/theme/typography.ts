

import { fontTokens } from "./tokens";

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