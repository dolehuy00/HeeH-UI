"use client";

import * as React from "react";
import { ThemeContext } from "./theme-context";
import type { ResolvedTheme, SkinName, ThemeMode, ThemeProviderProps } from "./types";

function resolveTheme(theme: ThemeMode): ResolvedTheme {
  if (theme !== "system") return theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function UIProvider({
  children,
  defaultSkin = "office",
  defaultTheme = "system",
  skin: controlledSkin,
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
  const [uncontrolledSkin, setUncontrolledSkin] = React.useState<SkinName>(defaultSkin);
  const skin = controlledSkin ?? uncontrolledSkin;

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

  const setSkin = React.useCallback((nextSkin: SkinName) => {
    setUncontrolledSkin(nextSkin);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, skin, setSkin }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeProvider = UIProvider;
