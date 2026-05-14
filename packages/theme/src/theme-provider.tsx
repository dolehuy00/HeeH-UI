"use client";

import * as React from "react";

export type ThemeMode = "light" | "dark" | "system";
export type SkinName = "office" | "cartoon" | "minimal";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultSkin?: SkinName;
  defaultTheme?: ThemeMode;
  skin?: SkinName;
  storageKey?: string;
  theme?: ThemeMode;
};

export type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  /** The configured mode, including `"system"`. */
  theme: ThemeMode;
  /** The concrete theme actually applied to the document (`"system"` resolved). */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function resolveTheme(theme: ThemeMode): ResolvedTheme {
  if (theme !== "system") return theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function UIProvider({
  children,
  defaultSkin = "office",
  defaultTheme = "system",
  skin = defaultSkin,
  storageKey = "heeh-ui-theme",
  theme: controlledTheme
}: ThemeProviderProps) {
  // Always start from `defaultTheme` so the server render and the first client
  // render produce identical markup. The persisted value is read after mount.
  const [uncontrolledTheme, setUncontrolledTheme] = React.useState<ThemeMode>(defaultTheme);

  React.useEffect(() => {
    if (controlledTheme !== undefined) return;

    try {
      const stored = window.localStorage.getItem(storageKey) as ThemeMode | null;

      if (stored) setUncontrolledTheme(stored);
    } catch {
      // localStorage can be unavailable (private mode, disabled storage) — ignore.
    }
  }, [controlledTheme, storageKey]);

  const theme = controlledTheme ?? uncontrolledTheme;

  // Start from a deterministic value so server and first client render match;
  // the real resolved value is computed in the effect below (client-only).
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(
    theme === "dark" ? "dark" : "light"
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    const apply = () => {
      const resolved = resolveTheme(theme);

      setResolvedTheme(resolved);
      root.dataset.theme = resolved;
    };

    apply();

    if (theme !== "system") return;

    // Keep `data-theme` in sync when the OS colour-scheme preference changes.
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", apply);

    return () => media.removeEventListener("change", apply);
  }, [theme]);

  React.useEffect(() => {
    window.document.documentElement.dataset.skin = skin;
  }, [skin]);

  const setTheme = React.useCallback(
    (nextTheme: ThemeMode) => {
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Persistence is best-effort — the in-memory state still updates below.
      }

      setUncontrolledTheme(nextTheme);
    },
    [storageKey]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
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
