import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn("heeh-separator", `heeh-separator--${orientation}`, className)}
      {...props}
    />
  );
}

export const Divider = Separator;
