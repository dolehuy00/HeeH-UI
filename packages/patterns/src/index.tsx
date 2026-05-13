import * as React from "react";
import { Button, Stack } from "@heeh-ui/core";
import { Input, Select } from "@heeh-ui/forms";
import { DataColumn, Table, Timeline } from "@heeh-ui/data-display";
import { cn } from "@heeh-ui/utils";

export function QueryTable<TData>({ query, onQueryChange, ...props }: React.ComponentProps<typeof Table<TData>> & { query?: string; onQueryChange?: (query: string) => void }) {
  return (
    <Stack gap="md">
      <Input placeholder="Search" value={query} onChange={(event) => onQueryChange?.(event.currentTarget.value)} />
      <Table {...props} />
    </Stack>
  );
}

export function CrudTable<TData>({ onCreate, ...props }: React.ComponentProps<typeof Table<TData>> & { onCreate?: () => void }) {
  return (
    <Stack gap="md">
      {onCreate ? <Button onClick={onCreate}>Create</Button> : null}
      <Table {...props} />
    </Stack>
  );
}

export function FilterBuilder({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-filter-builder", className)} {...props} />;
}

export function AdvancedSearch({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-advanced-search", className)} {...props} />;
}

export function PermissionGuard({ allowed, fallback = null, children }: { allowed: boolean; fallback?: React.ReactNode; children: React.ReactNode }) {
  return allowed ? <>{children}</> : <>{fallback}</>;
}

export function AuditTimeline(props: React.ComponentProps<typeof Timeline>) {
  return <Timeline {...props} />;
}

export function DiffViewer({ before, after, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { before: React.ReactNode; after: React.ReactNode }) {
  return (
    <div className={cn("heeh-diff-viewer", className)} {...props}>
      <pre>{before}</pre>
      <pre>{after}</pre>
    </div>
  );
}

export function JsonViewer({ value, className, ...props }: React.HTMLAttributes<HTMLPreElement> & { value: unknown }) {
  return <pre className={cn("heeh-json-viewer", className)} {...props}>{JSON.stringify(value, null, 2)}</pre>;
}

export function TreeTable<TData>(props: React.ComponentProps<typeof Table<TData>>) {
  return <Table {...props} />;
}

export function Scheduler({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-scheduler", className)} {...props} />;
}

export function KanbanBoard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-kanban-board", className)} {...props} />;
}

export function FlowBuilder({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-flow-builder", className)} {...props} />;
}

export function RichTextEditor({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("heeh-rich-text-editor", className)} {...props} />;
}

export type { DataColumn };
