import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 2, gap = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("heeh-grid", `heeh-grid--cols-${columns}`, `heeh-stack--gap-${gap}`, className)}
      {...props}
    />
  )
);

Grid.displayName = "Grid";
