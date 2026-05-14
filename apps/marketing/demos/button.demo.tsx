"use client";

import { Button } from "@heeh-ui/core";
import { PreviewBox } from "../components-gallery/PreviewBox";
import { VariantGrid } from "../components-gallery/VariantGrid";

export function ButtonDefaultDemo() {
  return (
    <PreviewBox title="Default preview">
      <VariantGrid>
        <Button>Primary action</Button>
        <Button variant="outline">Secondary path</Button>
      </VariantGrid>
    </PreviewBox>
  );
}

export function ButtonVariantsDemo() {
  return (
    <PreviewBox title="Variants" description="Variant names stay product-neutral and skin-resolved.">
      <VariantGrid>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
      </VariantGrid>
    </PreviewBox>
  );
}

export function ButtonSizesDemo() {
  return (
    <PreviewBox title="">
      <VariantGrid>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </VariantGrid>
    </PreviewBox>
  );
}

export function ButtonStatesDemo() {
  return (
    <PreviewBox title="States">
      <VariantGrid>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button variant="danger" disabled>
          Disabled danger
        </Button>
      </VariantGrid>
    </PreviewBox>
  );
}
