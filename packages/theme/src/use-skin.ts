"use client";

import { useThemeContext } from "./theme-context";

export function useSkin() {
  const { skin, setSkin } = useThemeContext("useSkin");

  return { skin, setSkin };
}
