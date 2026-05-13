import * as React from "react";
import type { ButtonSkinProps } from "@heeh-ui/theme";
import { useSkin } from "@heeh-ui/theme";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  ButtonSkinProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", disabled, loading, children, ...props }, ref) => {
    const skin = useSkin();
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={skin.button({ variant, size, disabled, loading, className })}
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
