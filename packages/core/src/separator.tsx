import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn("heeh-separator", `heeh-separator--${orientation}`, className)}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

export const Divider = Separator;
