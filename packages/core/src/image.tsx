import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fit?: "cover" | "contain" | "fill";
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ fit = "cover", className, ...props }, ref) => (
    <img ref={ref} className={cn("heeh-image", `heeh-image--${fit}`, className)} {...props} />
  )
);

Image.displayName = "Image";
