import { cn } from "@heeh-ui/styles";
import type { ButtonSkinProps } from "../types";

export function cartoonButtonSkin({
  variant = "primary",
  size = "md",
  disabled,
  loading,
  className
}: ButtonSkinProps) {
  return cn(
    "heeh-button",
    `heeh-button--${size}`,
    "heeh-skin-cartoon-button",
    `heeh-skin-cartoon-button--${variant}`,
    (disabled || loading) && "heeh-button--disabled",
    className
  );
}
