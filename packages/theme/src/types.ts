import type * as React from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";
export type SkinName = "office" | "cartoon" | "minimal";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultSkin?: SkinName;
  defaultTheme?: ThemeMode;
  skin?: SkinName;
  storageKey?: string;
  theme?: ThemeMode;
};

export type ThemeContextValue = {
  /** The configured mode, including `"system"`. */
  theme: ThemeMode;
  /** The concrete theme actually applied to the document (`"system"` resolved). */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
  skin: SkinName;
  setSkin: (skin: SkinName) => void;
};
