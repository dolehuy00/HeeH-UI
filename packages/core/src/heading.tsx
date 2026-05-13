import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
};

export function Heading({
  as: Component = "h2",
  size = "md",
  className,
  ...props
}: HeadingProps) {
  return <Component className={cn("heeh-heading", `heeh-heading--${size}`, className)} {...props} />;
}
