import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type BoxProps<TElement extends React.ElementType = "div"> = {
  as?: TElement;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<TElement>, "as" | "className">;

type BoxComponent = <TElement extends React.ElementType = "div">(
  props: BoxProps<TElement> & {
    ref?: React.ComponentPropsWithRef<TElement>["ref"];
  }
) => React.ReactElement | null;

// forwardRef erases the polymorphic generic, so the implementation is typed
// against the `"div"` default and the public `Box` is cast back to the
// generic signature below.
const BoxImpl = React.forwardRef<HTMLElement, BoxProps>(({ as, className, ...props }, ref) => {
  const Component = (as ?? "div") as React.ElementType;

  return <Component ref={ref} className={cn("heeh-box", className)} {...props} />;
});

BoxImpl.displayName = "Box";

export const Box = BoxImpl as unknown as BoxComponent;
