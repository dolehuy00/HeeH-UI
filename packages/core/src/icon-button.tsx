import * as React from "react";
import { Button, type ButtonProps } from "./button.js";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  label: string;
  icon: React.ReactNode;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, icon, className, ...props }, ref) => (
    <Button ref={ref} aria-label={label} className={className} {...props}>
      <span className="heeh-icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </Button>
  )
);

IconButton.displayName = "IconButton";
