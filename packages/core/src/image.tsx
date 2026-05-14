import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fit?: "cover" | "contain" | "fill";
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  // Default `alt` to an empty string so a missing prop renders a valid
  // decorative image rather than an accessibility violation.
  ({ fit = "cover", alt = "", className, ...props }, ref) => (
    <img ref={ref} alt={alt} className={cn("heeh-image", `heeh-image--${fit}`, className)} {...props} />
  )
);

Image.displayName = "Image";
