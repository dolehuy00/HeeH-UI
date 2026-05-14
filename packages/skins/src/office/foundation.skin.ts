import { cn } from "@heeh-ui/styles";
import type {
  CardSkinProps,
  HeadingSkinProps,
  InputSkinProps,
  SectionSkinProps,
  SurfaceSkinProps,
  TextSkinProps
} from "../types";

export function officeSurfaceSkin({ tone = "default", className }: SurfaceSkinProps) {
  return cn(
    "heeh-surface",
    `heeh-surface--${tone}`,
    "heeh-skin-office-surface",
    `heeh-skin-office-surface--${tone}`,
    className
  );
}

export function officeCardSkin({
  variant = "default",
  tone = "default",
  className
}: CardSkinProps) {
  return cn(
    "heeh-card",
    `heeh-card--${variant}`,
    `heeh-surface--${tone}`,
    "heeh-skin-office-card",
    `heeh-skin-office-card--${variant}`,
    className
  );
}

export function officeHeadingSkin({ size = "md", className }: HeadingSkinProps) {
  return cn(
    "heeh-heading",
    `heeh-heading--${size}`,
    "heeh-skin-office-heading",
    `heeh-skin-office-heading--${size}`,
    className
  );
}

export function officeTextSkin({ size = "md", tone = "default", className }: TextSkinProps) {
  return cn(
    "heeh-text",
    `heeh-text--${size}`,
    `heeh-text--${tone}`,
    "heeh-skin-office-text",
    `heeh-skin-office-text--${tone}`,
    className
  );
}

export function officeInputSkin({
  size = "md",
  state = "default",
  disabled,
  className
}: InputSkinProps) {
  return cn(
    "heeh-input",
    `heeh-input--${size}`,
    `heeh-input--${state}`,
    "heeh-skin-office-input",
    `heeh-skin-office-input--${state}`,
    disabled && "heeh-input--disabled",
    className
  );
}

export function officeSectionSkin({
  spacing = "md",
  tone = "default",
  className
}: SectionSkinProps) {
  return cn(
    "heeh-section",
    `heeh-section--${spacing}`,
    `heeh-section--${tone}`,
    "heeh-skin-office-section",
    `heeh-skin-office-section--${tone}`,
    className
  );
}
