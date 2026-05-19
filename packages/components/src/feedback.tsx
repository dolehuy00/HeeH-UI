import * as React from "react";
import { Heading, Text } from "@heeh-ui/core";
import { cn } from "@heeh-ui/utils";

export function Spinner({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("heeh-spinner", className)} aria-hidden="true" {...props} />;
}

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-skeleton", className)} aria-hidden="true" {...props} />;
}

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
};

export function Progress({ value = 0, max = 100, className, ...props }: ProgressProps) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn("heeh-progress", className)}
      {...props}
    >
      <span className="heeh-progress__bar" style={{ width: `${percent}%` }} />
    </div>
  );
}

export function ProgressCircle({ value = 0, max = 100, className, ...props }: ProgressProps) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn("heeh-progress-circle", className)}
      style={{ "--heeh-progress": `${percent}%` } as React.CSSProperties}
      {...props}
    >
      <span>{Math.round(percent)}%</span>
    </div>
  );
}

export function LoadingOverlay({
  children = "Loading",
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("heeh-loading-overlay", className)} {...props}>
      <Spinner />
      <span>{children}</span>
    </div>
  );
}

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export function EmptyState({ title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div className={cn("heeh-empty-state", className)} {...props}>
      <Heading size="sm">{title}</Heading>
      {description ? <Text tone="muted">{description}</Text> : null}
      {action}
    </div>
  );
}

export type FeedbackTone = "info" | "success" | "warning" | "danger";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: FeedbackTone;
  title?: React.ReactNode;
};

export function Alert({ tone = "info", title, className, children, ...props }: AlertProps) {
  return (
    <div role="status" className={cn("heeh-alert", `heeh-alert--${tone}`, className)} {...props}>
      {title ? <strong>{title}</strong> : null}
      {children ? <div>{children}</div> : null}
    </div>
  );
}

export function Banner(props: AlertProps) {
  return <Alert {...props} className={cn("heeh-banner", props.className)} />;
}

export type StatusBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: FeedbackTone | "neutral";
};

export function StatusBadge({ tone = "neutral", className, ...props }: StatusBadgeProps) {
  return <span className={cn("heeh-status-badge", `heeh-status-badge--${tone}`, className)} {...props} />;
}

export type ResultProps = EmptyStateProps & {
  status?: FeedbackTone;
};

export function Result({ status = "info", className, ...props }: ResultProps) {
  return <EmptyState className={cn("heeh-result", `heeh-result--${status}`, className)} {...props} />;
}
