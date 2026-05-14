import { cn } from "@heeh-ui/styles";
import type {
  CardSkinProps,
  HeadingSkinProps,
  InputSkinProps,
  SectionSkinProps,
  SurfaceSkinProps,
  TextSkinProps
} from "../types";

export function cartoonSurfaceSkin({ tone = "default", className }: SurfaceSkinProps) {
  return cn(
    "heeh-surface",
    `heeh-surface--${tone}`,
    "heeh-skin-cartoon-surface",
    `heeh-skin-cartoon-surface--${tone}`,
    className
  );
}

export function cartoonCardSkin({
  variant = "default",
  tone = "default",
  className
}: CardSkinProps) {
  return cn(
    "heeh-card",
    `heeh-card--${variant}`,
    `heeh-surface--${tone}`,
    "heeh-skin-cartoon-card",
    `heeh-skin-cartoon-card--${variant}`,
    className
  );
}

export function cartoonHeadingSkin({ size = "md", className }: HeadingSkinProps) {
  return cn(
    "heeh-heading",
    `heeh-heading--${size}`,
    "heeh-skin-cartoon-heading",
    `heeh-skin-cartoon-heading--${size}`,
    className
  );
}

export function cartoonTextSkin({ size = "md", tone = "default", className }: TextSkinProps) {
  return cn(
    "heeh-text",
    `heeh-text--${size}`,
    `heeh-text--${tone}`,
    "heeh-skin-cartoon-text",
    `heeh-skin-cartoon-text--${tone}`,
    className
  );
}

export function cartoonInputSkin({
  size = "md",
  state = "default",
  disabled,
  className
}: InputSkinProps) {
  return cn(
    "heeh-input",
    `heeh-input--${size}`,
    `heeh-input--${state}`,
    "heeh-skin-cartoon-input",
    `heeh-skin-cartoon-input--${state}`,
    disabled && "heeh-input--disabled",
    className
  );
}

export function cartoonSectionSkin({
  spacing = "md",
  tone = "default",
  className
}: SectionSkinProps) {
  return cn(
    "heeh-section",
    `heeh-section--${spacing}`,
    `heeh-section--${tone}`,
    "heeh-skin-cartoon-section",
    `heeh-skin-cartoon-section--${tone}`,
    className
  );
}
