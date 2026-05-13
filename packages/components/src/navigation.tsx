import * as React from "react";
import { Button, Link } from "@heeh-ui/core";
import { Input } from "@heeh-ui/forms";
import { cn } from "@heeh-ui/utils";

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  items: Array<{ id: string; label: React.ReactNode; content: React.ReactNode }>;
  defaultValue?: string;
};

export function Tabs({ items, defaultValue, className, ...props }: TabsProps) {
  const [active, setActive] = React.useState(defaultValue ?? items[0]?.id);

  return (
    <div className={cn("heeh-tabs", className)} {...props}>
      <div role="tablist" className="heeh-tabs__list">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={active === item.id}
            className="heeh-tabs__tab"
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="heeh-tabs__panel">
        {items.find((item) => item.id === active)?.content}
      </div>
    </div>
  );
}

export function Breadcrumb({ items, className, ...props }: React.HTMLAttributes<HTMLElement> & { items: Array<{ label: React.ReactNode; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("heeh-breadcrumb", className)} {...props}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <aside className={cn("heeh-sidebar", className)} {...props} />;
}

export function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("heeh-navbar", className)} {...props} />;
}

export type PaginationProps = React.HTMLAttributes<HTMLElement> & {
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({ page, pageCount, onPageChange, className, ...props }: PaginationProps) {
  return (
    <nav className={cn("heeh-pagination", className)} {...props}>
      <Button size="sm" variant="outline" disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>
        Previous
      </Button>
      <span>
        {page} / {pageCount}
      </span>
      <Button size="sm" variant="outline" disabled={page >= pageCount} onClick={() => onPageChange?.(page + 1)}>
        Next
      </Button>
    </nav>
  );
}

export function Menu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul role="menu" className={cn("heeh-menu", className)} {...props} />;
}

export const Menubar = Menu;

export function CommandPalette({ placeholder = "Search commands", className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { placeholder?: string }) {
  return (
    <div className={cn("heeh-command-palette", className)} {...props}>
      <Input placeholder={placeholder} />
      <div className="heeh-command-palette__content">{children}</div>
    </div>
  );
}

export function StepIndicator({ steps, current = 0, className, ...props }: React.HTMLAttributes<HTMLOListElement> & { steps: React.ReactNode[]; current?: number }) {
  return (
    <ol className={cn("heeh-step-indicator", className)} {...props}>
      {steps.map((step, index) => (
        <li key={index} data-active={index === current || undefined} data-complete={index < current || undefined}>
          {step}
        </li>
      ))}
    </ol>
  );
}

export function TreeView({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul role="tree" className={cn("heeh-tree-view", className)} {...props} />;
}

export function Accordion({ className, ...props }: React.DetailsHTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("heeh-accordion", className)} {...props} />;
}

export function Collapse({ open, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { open?: boolean }) {
  return open ? <div className={cn("heeh-collapse", className)} {...props} /> : null;
}
