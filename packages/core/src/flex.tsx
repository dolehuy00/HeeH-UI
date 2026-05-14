import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end" | "stretch";
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ align = "stretch", direction = "row", gap = "md", justify = "start", wrap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "heeh-flex",
        `heeh-flex--${direction}`,
        `heeh-flex--align-${align}`,
        `heeh-flex--justify-${justify}`,
        `heeh-stack--gap-${gap}`,
        wrap && "heeh-flex--wrap",
        className
      )}
      {...props}
    />
  )
);

Flex.displayName = "Flex";
