"use client";

import { useThemeContext } from "./theme-context.js";

export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useThemeContext("useTheme");

  return { theme, resolvedTheme, setTheme };
}
