import * as React from "react";
import { useSkin, type TextSkinProps } from "@heeh-ui/theme";

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  as?: "p" | "span" | "div";
  size?: TextSkinProps["size"];
  tone?: TextSkinProps["tone"];
};

export function Text({
  as: Component = "p",
  size = "md",
  tone = "default",
  className,
  ...props
}: TextProps) {
  const skin = useSkin();

  return <Component className={skin.text({ size, tone, className })} {...props} />;
}
