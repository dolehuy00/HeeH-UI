import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type SegmentedControlProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
  labelId?: string;
};

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ children, className, label, labelId, ...props }, ref) => (
    <div ref={ref} className={cn("heeh-segmented-control", className)} {...props}>
      {label ? (
        <span className="heeh-segmented-control__label" id={labelId}>
          {label}
        </span>
      ) : null}
      <div
        className="heeh-segmented-control__items"
        role="radiogroup"
        aria-labelledby={label && labelId ? labelId : undefined}
      >
        {children}
      </div>
    </div>
  )
);

SegmentedControl.displayName = "SegmentedControl";

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
    role="radio"
    aria-checked={selected ?? false}
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
