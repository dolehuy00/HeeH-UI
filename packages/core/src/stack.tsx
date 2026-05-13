import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

const gapClass = {
  xs: "heeh-stack--gap-xs",
  sm: "heeh-stack--gap-sm",
  md: "heeh-stack--gap-md",
  lg: "heeh-stack--gap-lg",
  xl: "heeh-stack--gap-xl"
};

export function Stack({
  direction = "column",
  gap = "md",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "heeh-stack",
        direction === "row" ? "heeh-stack--row" : "heeh-stack--column",
        gapClass[gap],
        className
      )}
      {...props}
    />
  );
}
