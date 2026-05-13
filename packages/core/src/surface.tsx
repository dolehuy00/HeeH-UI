import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "elevated";
};

export function Surface({ tone = "default", className, ...props }: SurfaceProps) {
  return <div className={cn("heeh-surface", `heeh-surface--${tone}`, className)} {...props} />;
}
