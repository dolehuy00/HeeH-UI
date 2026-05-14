export const colors = {
  background: "hsl(var(--heeh-color-background))",
  foreground: "hsl(var(--heeh-color-foreground))",
  primary: "hsl(var(--heeh-color-primary))",
  primaryForeground: "hsl(var(--heeh-color-primary-foreground))",
  secondary: "hsl(var(--heeh-color-secondary))",
  secondaryForeground: "hsl(var(--heeh-color-secondary-foreground))",
  accent: "hsl(var(--heeh-color-accent))",
  accentForeground: "hsl(var(--heeh-color-accent-foreground))",
  surface: "hsl(var(--heeh-color-surface))",
  surfaceForeground: "hsl(var(--heeh-color-surface-foreground))",
  border: "hsl(var(--heeh-color-border))",
  muted: "hsl(var(--heeh-color-muted))",
  mutedForeground: "hsl(var(--heeh-color-muted-foreground))",
  info: "hsl(var(--heeh-color-info))",
  infoForeground: "hsl(var(--heeh-color-info-foreground))",
  success: "hsl(var(--heeh-color-success))",
  successForeground: "hsl(var(--heeh-color-success-foreground))",
  warning: "hsl(var(--heeh-color-warning))",
  warningForeground: "hsl(var(--heeh-color-warning-foreground))",
  danger: "hsl(var(--heeh-color-danger))",
  dangerForeground: "hsl(var(--heeh-color-danger-foreground))"
} as const;

export const backgrounds = {
  body: "var(--heeh-background-body)",
  surface: "var(--heeh-background-surface)",
  muted: "var(--heeh-background-muted)",
  accent: "var(--heeh-background-accent)",
  chrome: "var(--heeh-background-chrome)",
  overlay: "var(--heeh-background-overlay)",
  lightbox: "var(--heeh-background-lightbox)"
} as const;

export const gradients = {
  hero: "var(--heeh-gradient-hero)",
  surface: "var(--heeh-gradient-surface)",
  accent: "var(--heeh-gradient-accent)"
} as const;

export const spacing = {
  xs: "var(--heeh-spacing-xs)",
  sm: "var(--heeh-spacing-sm)",
  md: "var(--heeh-spacing-md)",
  lg: "var(--heeh-spacing-lg)",
  xl: "var(--heeh-spacing-xl)"
} as const;

export const radii = {
  xs: "var(--heeh-radius-xs)",
  sm: "var(--heeh-radius-sm)",
  md: "var(--heeh-radius-md)",
  lg: "var(--heeh-radius-lg)",
  xl: "var(--heeh-radius-xl)",
  "2xl": "var(--heeh-radius-2xl)",
  pill: "var(--heeh-radius-pill)"
} as const;

export const shadows = {
  xs: "var(--heeh-shadow-xs)",
  sm: "var(--heeh-shadow-sm)",
  md: "var(--heeh-shadow-md)",
  lg: "var(--heeh-shadow-lg)",
  xl: "var(--heeh-shadow-xl)",
  focus: "var(--heeh-shadow-focus)",
  cartoon: "var(--heeh-shadow-cartoon)"
} as const;

export const motion = {
  durationFast: "var(--heeh-motion-duration-fast)",
  durationBase: "var(--heeh-motion-duration-base)",
  durationSlow: "var(--heeh-motion-duration-slow)",
  durationSpin: "var(--heeh-motion-duration-spin)",
  easeStandard: "var(--heeh-motion-ease-standard)",
  easeEmphasized: "var(--heeh-motion-ease-emphasized)"
} as const;

export const typography = {
  fontSans: "var(--heeh-font-sans)",
  textSm: "var(--heeh-text-sm)",
  textMd: "var(--heeh-text-md)",
  textLg: "var(--heeh-text-lg)"
} as const;
