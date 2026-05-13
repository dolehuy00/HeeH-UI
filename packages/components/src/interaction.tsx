import * as React from "react";
import { Button } from "@heeh-ui/core";
import { cn } from "@heeh-ui/utils";

export function DragHandle({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("heeh-drag-handle", className)} aria-hidden="true" {...props}>⋮⋮</span>;
}

export function SortableList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("heeh-sortable-list", className)} {...props} />;
}

export function DnDContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-dnd-container", className)} {...props} />;
}

export function Resizable({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-resizable", className)} {...props} />;
}

export function Selectable({ selected, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { selected?: boolean }) {
  return <div data-selected={selected || undefined} className={cn("heeh-selectable", className)} {...props} />;
}

export function CommandBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-command-bar", className)} {...props} />;
}

export const ActionBar = CommandBar;

export function FloatingActionButton(props: React.ComponentProps<typeof Button>) {
  return <Button {...props} className={cn("heeh-fab", props.className)} />;
}

export function SpeedDial({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-speed-dial", className)} {...props} />;
}
