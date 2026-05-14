import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  label?: string;
};

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ children, label, className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("heeh-icon", className)}
      {...props}
    >
      {children}
    </span>
  )
);

Icon.displayName = "Icon";
