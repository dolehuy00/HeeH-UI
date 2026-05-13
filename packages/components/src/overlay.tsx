import * as React from "react";
import { Button, Heading } from "@heeh-ui/core";
import { cn } from "@heeh-ui/utils";

export type DialogProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  title?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({ open = false, title, onOpenChange, className, children, ...props }: DialogProps) {
  if (!open) return null;

  return (
    <div className="heeh-overlay" role="presentation">
      <div role="dialog" aria-modal="true" className={cn("heeh-dialog", className)} {...props}>
        <div className="heeh-dialog__header">
          {title ? <Heading size="sm">{title}</Heading> : null}
          {onOpenChange ? (
            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          ) : null}
        </div>
        <div className="heeh-dialog__body">{children}</div>
      </div>
    </div>
  );
}

export const Modal = Dialog;
export const AlertDialog = Dialog;

export type DrawerProps = DialogProps & {
  side?: "left" | "right" | "top" | "bottom";
};

export function Drawer({ side = "right", className, ...props }: DrawerProps) {
  return <Dialog {...props} className={cn("heeh-drawer", `heeh-drawer--${side}`, className)} />;
}

export const Sheet = Drawer;

export function Popover({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-popover", className)} {...props} />;
}

export function Tooltip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span role="tooltip" className={cn("heeh-tooltip", className)} {...props} />;
}

export const HoverCard = Popover;

export function DropdownMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="menu" className={cn("heeh-menu-surface", className)} {...props} />;
}

export const ContextMenu = DropdownMenu;

export function Toast({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="status" className={cn("heeh-toast", className)} {...props} />;
}

export function Snackbar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="status" className={cn("heeh-snackbar", className)} {...props} />;
}
