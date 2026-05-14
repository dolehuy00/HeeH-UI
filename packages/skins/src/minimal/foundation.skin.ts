import { cn } from "@heeh-ui/styles";
import type {
  CardSkinProps,
  HeadingSkinProps,
  InputSkinProps,
  SectionSkinProps,
  SurfaceSkinProps,
  TextSkinProps
} from "../types";

export function minimalSurfaceSkin({ tone = "default", className }: SurfaceSkinProps) {
  return cn(
    "heeh-surface",
    `heeh-surface--${tone}`,
    "heeh-skin-minimal-surface",
    `heeh-skin-minimal-surface--${tone}`,
    className
  );
}

export function minimalCardSkin({
  variant = "default",
  tone = "default",
  className
}: CardSkinProps) {
  return cn(
    "heeh-card",
    `heeh-card--${variant}`,
    `heeh-surface--${tone}`,
    "heeh-skin-minimal-card",
    `heeh-skin-minimal-card--${variant}`,
    className
  );
}

export function minimalHeadingSkin({ size = "md", className }: HeadingSkinProps) {
  return cn(
    "heeh-heading",
    `heeh-heading--${size}`,
    "heeh-skin-minimal-heading",
    `heeh-skin-minimal-heading--${size}`,
    className
  );
}

export function minimalTextSkin({ size = "md", tone = "default", className }: TextSkinProps) {
  return cn(
    "heeh-text",
    `heeh-text--${size}`,
    `heeh-text--${tone}`,
    "heeh-skin-minimal-text",
    `heeh-skin-minimal-text--${tone}`,
    className
  );
}

export function minimalInputSkin({
  size = "md",
  state = "default",
  disabled,
  className
}: InputSkinProps) {
  return cn(
    "heeh-input",
    `heeh-input--${size}`,
    `heeh-input--${state}`,
    "heeh-skin-minimal-input",
    `heeh-skin-minimal-input--${state}`,
    disabled && "heeh-input--disabled",
    className
  );
}

export function minimalSectionSkin({
  spacing = "md",
  tone = "default",
  className
}: SectionSkinProps) {
  return cn(
    "heeh-section",
    `heeh-section--${spacing}`,
    `heeh-section--${tone}`,
    "heeh-skin-minimal-section",
    `heeh-skin-minimal-section--${tone}`,
    className
  );
}
