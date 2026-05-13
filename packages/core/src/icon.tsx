import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  label?: string;
};

export function Icon({ children, label, className, ...props }: IconProps) {
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("heeh-icon", className)}
      {...props}
    >
      {children}
    </span>
  );
}
