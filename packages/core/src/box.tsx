import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type BoxProps<TElement extends React.ElementType = "div"> = {
  as?: TElement;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<TElement>, "as" | "className">;

export function Box<TElement extends React.ElementType = "div">({
  as,
  className,
  ...props
}: BoxProps<TElement>) {
  const Component = as ?? "div";

  return <Component className={cn("heeh-box", className)} {...props} />;
}
