import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

export function Container({ size = "lg", className, ...props }: ContainerProps) {
  return <div className={cn("heeh-container", `heeh-container--${size}`, className)} {...props} />;
}
