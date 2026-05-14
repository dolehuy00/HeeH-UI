"use client";

import { Card, Heading, Stack, Surface, Text } from "@heeh-ui/core";
import { PreviewBox } from "../components-gallery/PreviewBox";
import { VariantGrid } from "../components-gallery/VariantGrid";

export function CardDefaultDemo() {
  return (
    <PreviewBox title="Default preview">
      <Card className="gallery-demo-card">
        <Stack gap="sm">
          <Heading as="h4" size="sm">
            Release checklist
          </Heading>
          <Text tone="muted">A plain card should work before heavier layout patterns appear.</Text>
        </Stack>
      </Card>
    </PreviewBox>
  );
}

export function CardVariantsDemo() {
  return (
    <PreviewBox title="Variants">
      <VariantGrid>
        <Card className="gallery-demo-card">
          <Text>Default</Text>
        </Card>
        <Card variant="outline" className="gallery-demo-card">
          <Text>Outline</Text>
        </Card>
        <Card variant="elevated" tone="elevated" className="gallery-demo-card">
          <Text>Elevated</Text>
        </Card>
      </VariantGrid>
    </PreviewBox>
  );
}

export function SurfaceTonesDemo() {
  return (
    <PreviewBox title="Surface tones" description="Surface is useful for page bands, panels, and muted tool areas.">
      <VariantGrid>
        <Surface tone="default" className="gallery-demo-surface">
          <Text>Default surface</Text>
        </Surface>
        <Surface tone="muted" className="gallery-demo-surface">
          <Text>Muted surface</Text>
        </Surface>
        <Surface tone="elevated" className="gallery-demo-surface">
          <Text>Elevated surface</Text>
        </Surface>
      </VariantGrid>
    </PreviewBox>
  );
}
