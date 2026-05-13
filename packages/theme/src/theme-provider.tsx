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

export type UISkin = {
  button: ButtonSkinFn;
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

export const defaultSkin: UISkin = {
  button: ({
    variant = "primary",
    size = "md",
    disabled,
    loading,
    className
  }: ButtonSkinProps) =>
    [
      "heeh-button",
      `heeh-button--${size}`,
      "heeh-skin-office-button",
      `heeh-skin-office-button--${variant}`,
      (disabled || loading) && "heeh-button--disabled",
      className
    ]
      .filter(Boolean)
      .join(" ")
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
