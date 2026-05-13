import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  as?: "p" | "span" | "div";
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "danger";
};

export function Text({
  as: Component = "p",
  size = "md",
  tone = "default",
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn("heeh-text", `heeh-text--${size}`, `heeh-text--${tone}`, className)}
      {...props}
    />
  );
}
