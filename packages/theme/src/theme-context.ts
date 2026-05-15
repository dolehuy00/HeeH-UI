"use client";

import * as React from "react";
import type { ThemeContextValue } from "./types";

export const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function useThemeContext(hookName = "Theme hook") {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(`${hookName} must be used inside ThemeProvider.`);
  }

  return context;
}
