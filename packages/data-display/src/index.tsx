import * as React from "react";
import { cn } from "@heeh-ui/utils";

export type DataColumn<TData> = {
  id: string;
  header: React.ReactNode;
  cell: (row: TData) => React.ReactNode;
  width?: number;
};

export type DataViewState = {
  pageIndex: number;
  pageSize: number;
  sorting?: Array<{ id: string; desc: boolean }>;
};

export type TableProps<TData> = React.TableHTMLAttributes<HTMLTableElement> & {
  columns: Array<DataColumn<TData>>;
  data: TData[];
};

export function Table<TData>({ columns, data, className, ...props }: TableProps<TData>) {
  return (
    <table className={cn("heeh-table", className)} {...props}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} style={{ width: column.width }}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.id}>{column.cell(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const DataTable = Table;

export function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("heeh-list", className)} {...props} />;
}

export function DescriptionList({ className, ...props }: React.HTMLAttributes<HTMLDListElement>) {
  return <dl className={cn("heeh-description-list", className)} {...props} />;
}

export function KeyValue({ label, value, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className={cn("heeh-key-value", className)} {...props}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export function Timeline({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("heeh-timeline", className)} {...props} />;
}

export function Tag({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("heeh-tag", className)} {...props} />;
}

export const Badge = Tag;
export const Chip = Tag;

export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
};

export function Avatar({ src, alt = "", fallback, className, ...props }: AvatarProps) {
  return (
    <span className={cn("heeh-avatar", className)} {...props}>
      {src ? <img src={src} alt={alt} /> : fallback}
    </span>
  );
}

export function AvatarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-avatar-group", className)} {...props} />;
}

export function Calendar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-calendar", className)} {...props} />;
}

export function Statistic({ label, value, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className={cn("heeh-statistic", className)} {...props}>
      <span className="heeh-statistic__label">{label}</span>
      <strong className="heeh-statistic__value">{value}</strong>
    </div>
  );
}

export function MetricCard({ label, value, trend, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { label: React.ReactNode; value: React.ReactNode; trend?: React.ReactNode }) {
  return (
    <div className={cn("heeh-metric-card", className)} {...props}>
      <Statistic label={label} value={value} />
      {trend ? <span className="heeh-metric-card__trend">{trend}</span> : null}
    </div>
  );
}
