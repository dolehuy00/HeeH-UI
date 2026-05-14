import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ direction = "column", gap = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "heeh-stack",
        direction === "row" ? "heeh-stack--row" : "heeh-stack--column",
        `heeh-stack--gap-${gap}`,
        className
      )}
      {...props}
    />
  )
);

Stack.displayName = "Stack";
