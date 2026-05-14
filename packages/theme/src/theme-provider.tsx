import * as React from "react";

export type ThemeMode = "light" | "dark" | "system";

export type ButtonSkinProps = {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

export type ButtonSkinFn = (props: ButtonSkinProps) => string;

export type SurfaceSkinProps = {
  tone?: "default" | "muted" | "elevated";
  className?: string;
};

export type SurfaceSkinFn = (props: SurfaceSkinProps) => string;

export type CardSkinProps = {
  variant?: "default" | "elevated" | "outline";
  tone?: SurfaceSkinProps["tone"];
  className?: string;
};

export type CardSkinFn = (props: CardSkinProps) => string;

export type HeadingSkinProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export type HeadingSkinFn = (props: HeadingSkinProps) => string;

export type TextSkinProps = {
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "danger";
  className?: string;
};

export type TextSkinFn = (props: TextSkinProps) => string;

export type InputSkinProps = {
  size?: "sm" | "md" | "lg";
  state?: "default" | "invalid";
  disabled?: boolean;
  className?: string;
};

export type InputSkinFn = (props: InputSkinProps) => string;

export type SectionSkinProps = {
  spacing?: "sm" | "md" | "lg" | "xl";
  tone?: "default" | "muted" | "accent";
  className?: string;
};

export type SectionSkinFn = (props: SectionSkinProps) => string;

export type UISkin = {
  button: ButtonSkinFn;
  card: CardSkinFn;
  surface: SurfaceSkinFn;
  heading: HeadingSkinFn;
  text: TextSkinFn;
  input: InputSkinFn;
  section: SectionSkinFn;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
  skin?: UISkin;
};

type ThemeContextValue = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  skin: UISkin;
};

function skinClass(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const defaultSkin: UISkin = {
  button: ({
    variant = "primary",
    size = "md",
    disabled,
    loading,
    className
  }: ButtonSkinProps) =>
    skinClass(
      "heeh-button",
      `heeh-button--${size}`,
      "heeh-skin-office-button",
      `heeh-skin-office-button--${variant}`,
      (disabled || loading) && "heeh-button--disabled",
      className
    ),
  card: ({ variant = "default", tone = "default", className }: CardSkinProps) =>
    skinClass(
      "heeh-card",
      `heeh-card--${variant}`,
      "heeh-skin-office-card",
      `heeh-skin-office-card--${variant}`,
      `heeh-surface--${tone}`,
      className
    ),
  surface: ({ tone = "default", className }: SurfaceSkinProps) =>
    skinClass(
      "heeh-surface",
      `heeh-surface--${tone}`,
      "heeh-skin-office-surface",
      `heeh-skin-office-surface--${tone}`,
      className
    ),
  heading: ({ size = "md", className }: HeadingSkinProps) =>
    skinClass(
      "heeh-heading",
      `heeh-heading--${size}`,
      "heeh-skin-office-heading",
      `heeh-skin-office-heading--${size}`,
      className
    ),
  text: ({ size = "md", tone = "default", className }: TextSkinProps) =>
    skinClass(
      "heeh-text",
      `heeh-text--${size}`,
      `heeh-text--${tone}`,
      "heeh-skin-office-text",
      `heeh-skin-office-text--${tone}`,
      className
    ),
  input: ({ size = "md", state = "default", disabled, className }: InputSkinProps) =>
    skinClass(
      "heeh-input",
      `heeh-input--${size}`,
      `heeh-input--${state}`,
      "heeh-skin-office-input",
      `heeh-skin-office-input--${state}`,
      disabled && "heeh-input--disabled",
      className
    ),
  section: ({ spacing = "md", tone = "default", className }: SectionSkinProps) =>
    skinClass(
      "heeh-section",
      `heeh-section--${spacing}`,
      `heeh-section--${tone}`,
      "heeh-skin-office-section",
      `heeh-skin-office-section--${tone}`,
      className
    )
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function UIProvider({
  children,
  defaultTheme = "system",
  storageKey = "heeh-ui-theme",
  skin = defaultSkin
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    return (window.localStorage.getItem(storageKey) as ThemeMode | null) ?? defaultTheme;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    const resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.dataset.theme = resolvedTheme;
  }, [theme]);

  const setTheme = React.useCallback(
    (nextTheme: ThemeMode) => {
      window.localStorage.setItem(storageKey, nextTheme);
      setThemeState(nextTheme);
    },
    [storageKey]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, skin }}>{children}</ThemeContext.Provider>
  );
}

export const ThemeProvider = UIProvider;

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}

export function useSkin() {
  return React.useContext(ThemeContext)?.skin ?? defaultSkin;
}
