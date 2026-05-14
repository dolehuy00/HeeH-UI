import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SegmentedControlProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
};

export function SegmentedControl({
  children,
  className,
  label,
  ...props
}: SegmentedControlProps) {
  return (
    <div className={cn("heeh-segmented-control", className)} {...props}>
      {label ? <span className="heeh-segmented-control__label">{label}</span> : null}
      <div className="heeh-segmented-control__items">{children}</div>
    </div>
  );
}

export type SegmentedControlItemProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  selected?: boolean;
  className?: string;
};

export const SegmentedControlItem = React.forwardRef<
  HTMLButtonElement,
  SegmentedControlItemProps
>(({ children, className, selected, type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    aria-pressed={selected}
    data-selected={selected || undefined}
    className={cn(
      "heeh-segmented-control__item",
      selected && "heeh-segmented-control__item--selected",
      className
    )}
    {...props}
  >
    {children}
  </button>
));

SegmentedControlItem.displayName = "SegmentedControlItem";
