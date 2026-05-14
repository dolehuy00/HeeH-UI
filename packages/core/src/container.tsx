import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "lg", className, ...props }, ref) => (
    <div ref={ref} className={cn("heeh-container", `heeh-container--${size}`, className)} {...props} />
  )
);

Container.displayName = "Container";
