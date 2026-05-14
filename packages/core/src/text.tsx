import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "div";
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "danger";
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as = "p", size = "md", tone = "default", className, ...props }, ref) => {
    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn("heeh-text", `heeh-text--${size}`, `heeh-text--${tone}`, className)}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
