import { cn } from "@heeh-ui/styles";
import type { ButtonSkinProps } from "../types";

export function officeButtonSkin({
  variant = "primary",
  size = "md",
  disabled,
  loading,
  className
}: ButtonSkinProps) {
  return cn(
    "heeh-button",
    `heeh-button--${size}`,
    "heeh-skin-office-button",
    `heeh-skin-office-button--${variant}`,
    (disabled || loading) && "heeh-button--disabled",
    className
  );
}
