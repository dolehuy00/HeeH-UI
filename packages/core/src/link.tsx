import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => (
    <a ref={ref} className={cn("heeh-link", className)} {...props} />
  )
);

Link.displayName = "Link";
