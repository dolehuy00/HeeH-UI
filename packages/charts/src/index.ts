export type ChartDatum = Record<string, string | number | null>;

export type ChartSeries = {
  key: string;
  label: string;
  color?: string;
};
