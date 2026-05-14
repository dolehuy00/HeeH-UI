import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  {
    className?: string;
    loading?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", disabled, loading, children, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "heeh-button",
          `heeh-button--${size}`,
          `heeh-button--${variant}`,
          (disabled || loading) && "heeh-button--disabled",
          className
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <span className="heeh-button__spinner" aria-hidden="true" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
