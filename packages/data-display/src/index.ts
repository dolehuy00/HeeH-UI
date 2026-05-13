import type * as React from "react";

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
