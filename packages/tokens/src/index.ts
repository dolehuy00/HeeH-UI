export const colors = {
  background: "hsl(var(--heeh-color-background))",
  foreground: "hsl(var(--heeh-color-foreground))",
  primary: "hsl(var(--heeh-color-primary))",
  primaryForeground: "hsl(var(--heeh-color-primary-foreground))",
  border: "hsl(var(--heeh-color-border))",
  muted: "hsl(var(--heeh-color-muted))",
  mutedForeground: "hsl(var(--heeh-color-muted-foreground))"
} as const;

export const spacing = {
  xs: "var(--heeh-spacing-xs)",
  sm: "var(--heeh-spacing-sm)",
  md: "var(--heeh-spacing-md)",
  lg: "var(--heeh-spacing-lg)",
  xl: "var(--heeh-spacing-xl)"
} as const;

export const radii = {
  sm: "var(--heeh-radius-sm)",
  md: "var(--heeh-radius-md)",
  lg: "var(--heeh-radius-lg)"
} as const;

export const typography = {
  fontSans: "var(--heeh-font-sans)",
  textSm: "var(--heeh-text-sm)",
  textMd: "var(--heeh-text-md)",
  textLg: "var(--heeh-text-lg)"
} as const;
