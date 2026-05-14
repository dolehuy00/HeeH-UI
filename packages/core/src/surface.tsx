import * as React from "react";
import { useSkin, type SurfaceSkinProps } from "@heeh-ui/theme";

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: SurfaceSkinProps["tone"];
};

export function Surface({ tone = "default", className, ...props }: SurfaceProps) {
  const skin = useSkin();

  return <div className={skin.surface({ tone, className })} {...props} />;
}
