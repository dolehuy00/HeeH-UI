"use client";

import { Table, Tag, type DataColumn } from "@heeh-ui/data-display";
import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PreviewBox } from "../../../components-gallery/PreviewBox";
import { PropsTable } from "../../../components-gallery/PropsTable";

type PackageRow = {
  name: string;
  owner: string;
  status: string;
  surface: string;
};

const rows: PackageRow[] = [
  { name: "@heeh-ui/core", owner: "Foundation", status: "Stable", surface: "Headless primitives" },
  { name: "@heeh-ui/forms", owner: "Inputs", status: "Needs pressure", surface: "Controls and fields" },
  { name: "@heeh-ui/components", owner: "Composition", status: "Early", surface: "Overlay and layout" }
];

const columns: Array<DataColumn<PackageRow>> = [
  { id: "name", header: "Package", cell: (row) => row.name },
  { id: "owner", header: "Owner", cell: (row) => row.owner },
  { id: "surface", header: "Surface", cell: (row) => row.surface },
  { id: "status", header: "Status", cell: (row) => <Tag>{row.status}</Tag> }
];

const tableProps = [
  {
    name: "columns",
    type: "Array<DataColumn<TData>>",
    defaultValue: "required",
    notes: "Defines headers, cell renderers, and optional widths."
  },
  {
    name: "data",
    type: "TData[]",
    defaultValue: "required",
    notes: "Rows rendered by the table."
  }
];

export default function TablePage() {
  return (
    <ComponentDoc
      title="Table"
      description="Data display primitive for checking density, borders, row rhythm, and readable tags across skins."
    >
      <DocSection title="Overview">
        <PreviewBox title="Default preview">
          <Table columns={columns} data={rows} />
        </PreviewBox>
      </DocSection>
      <DocSection title="Variants" description="Table has no skin-aware variants yet. Tag styling provides a nearby data-display contrast check." />
      <DocSection title="Sizes" description="Density is currently controlled by CSS and surrounding layout, not Table props." />
      <DocSection title="States" description="Loading, empty, selected, and sorted states are not modeled in the v1 data display API." />
      <DocSection title="Example usage">
        <CodeBlock>{`<Table
  columns={[
    { id: "name", header: "Package", cell: (row) => row.name },
    { id: "status", header: "Status", cell: (row) => <Tag>{row.status}</Tag> }
  ]}
  data={rows}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={tableProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Table is intentionally included before it has a contract, because dense data often exposes token and spacing issues faster than marketing sections."
      />
    </ComponentDoc>
  );
}
