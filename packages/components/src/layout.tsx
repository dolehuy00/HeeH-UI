import * as React from "react";
import { cn } from "@heeh-ui/utils";

export function PageLayout({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-page-layout", className)} {...props} />;
}

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg" | "xl";
  tone?: "default" | "muted" | "accent";
};

export function Section({
  spacing = "md",
  tone = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("heeh-section", `heeh-section--${spacing}`, `heeh-section--${tone}`, className)}
      {...props}
    />
  );
}

export function Panel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-panel", className)} {...props} />;
}

export const ResizablePanel = Panel;
export const SplitPane = Panel;

export function ScrollArea({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-scroll-area", className)} {...props} />;
}

export function AspectRatio({ ratio = 16 / 9, className, style, ...props }: React.HTMLAttributes<HTMLDivElement> & { ratio?: number }) {
  return <div className={cn("heeh-aspect-ratio", className)} style={{ aspectRatio: ratio, ...style }} {...props} />;
}

export function Masonry({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-masonry", className)} {...props} />;
}

export function Viewport({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-viewport", className)} {...props} />;
}

export function Portal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
