import * as React from "react";
import { useSkin, type HeadingSkinProps } from "@heeh-ui/theme";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: HeadingSkinProps["size"];
};

export function Heading({
  as: Component = "h2",
  size = "md",
  className,
  ...props
}: HeadingProps) {
  const skin = useSkin();

  return <Component className={skin.heading({ size, className })} {...props} />;
}
