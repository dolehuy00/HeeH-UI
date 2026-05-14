import * as React from "react";
import { useSkin, type CardSkinProps } from "@heeh-ui/theme";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: CardSkinProps["tone"];
  variant?: CardSkinProps["variant"];
};

export function Card({ tone = "default", variant = "default", className, ...props }: CardProps) {
  const skin = useSkin();

  return <div className={skin.card({ tone, variant, className })} {...props} />;
}
