"use client";

import { useThemeContext } from "./theme-context";

export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useThemeContext("useTheme");

  return { theme, resolvedTheme, setTheme };
}
