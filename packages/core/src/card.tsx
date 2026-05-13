import * as React from "react";
import { cn } from "@heeh-ui/utils";
import { Surface, type SurfaceProps } from "./surface";

export type CardProps = SurfaceProps;

export function Card({ className, ...props }: CardProps) {
  return <Surface className={cn("heeh-card", className)} {...props} />;
}
