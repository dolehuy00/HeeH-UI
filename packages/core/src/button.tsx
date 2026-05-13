import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@heeh-ui/utils";

export const buttonVariants = cva(
  "heeh-button",
  {
    variants: {
      variant: {
        solid: "heeh-button--solid",
        outline: "heeh-button--outline",
        ghost: "heeh-button--ghost"
      },
      size: {
        sm: "heeh-button--sm",
        md: "heeh-button--md",
        lg: "heeh-button--lg"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
