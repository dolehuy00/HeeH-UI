import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "elevated";
  variant?: "default" | "elevated" | "outline";
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ tone = "default", variant = "default", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("heeh-card", `heeh-card--${variant}`, `heeh-surface--${tone}`, className)}
      {...props}
    />
  )
);

Card.displayName = "Card";
