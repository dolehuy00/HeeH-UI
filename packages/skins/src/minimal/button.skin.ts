import { cn } from "@heeh-ui/styles";
import type { ButtonSkinProps } from "../types";

export function minimalButtonSkin({
  variant = "primary",
  size = "md",
  disabled,
  loading,
  className
}: ButtonSkinProps) {
  return cn(
    "heeh-button",
    `heeh-button--${size}`,
    "heeh-skin-minimal-button",
    `heeh-skin-minimal-button--${variant}`,
    (disabled || loading) && "heeh-button--disabled",
    className
  );
}
