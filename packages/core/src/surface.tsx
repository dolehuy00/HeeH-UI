import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "elevated";
};

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ tone = "default", className, ...props }, ref) => (
    <div ref={ref} className={cn("heeh-surface", `heeh-surface--${tone}`, className)} {...props} />
  )
);

Surface.displayName = "Surface";
