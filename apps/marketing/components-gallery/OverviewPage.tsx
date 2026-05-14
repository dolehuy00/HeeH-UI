import Link from "next/link";
import { Button, Card, Grid, Heading, Stack, Surface, Text } from "@heeh-ui/core";
import { Input } from "@heeh-ui/forms";
import { ComponentDoc, DocSection } from "./ComponentLayout";
import { PreviewBox } from "./PreviewBox";
import { VariantGrid } from "./VariantGrid";

const componentGroups = [
  {
    href: "/components/button",
    title: "Button",
    description: "Action contract for primary, secondary, destructive, ghost, and outline commands."
  },
  {
    href: "/components/text-heading",
    title: "Text / Heading",
    description: "Typography scale and tone behavior across skin identities."
  },
  {
    href: "/components/card",
    title: "Card / Surface",
    description: "Base content containers, elevation, borders, and background tones."
  },
  {
    href: "/components/input",
    title: "Input",
    description: "Native input contract plus the nearby form controls that still need pressure testing."
  },
  {
    href: "/components/modal",
    title: "Modal",
    description: "Overlay composition using current core actions and dialog styling."
  },
  {
    href: "/components/table",
    title: "Table",
    description: "Data display density, borders, and readable state under each skin."
  },
  {
    href: "/components/form-layout",
    title: "Form layout",
    description: "Field grouping, labels, messages, and submit actions in product-like forms."
  }
];

export function ComponentsOverview() {
  return (
    <ComponentDoc
      title="Component Gallery"
      description="A practical playground for checking the skin contract against real component pressure instead of guessing on paper."
    >
      <PreviewBox
        title="Contract smoke test"
        description="Switch theme, skin, and density in the header. The same component instances stay mounted while the visual contract changes."
      >
        <VariantGrid>
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Input aria-label="Overview email" placeholder="team@heeh.dev" />
        </VariantGrid>
        <Surface tone="muted" className="gallery-overview-surface">
          <Stack gap="sm">
            <Heading as="h3" size="md">
              Surface tone check
            </Heading>
            <Text tone="muted">
              This block verifies text, heading, surface, input, and button skins together.
            </Text>
          </Stack>
        </Surface>
      </PreviewBox>

      <DocSection
        title="Current priority"
        description="The first pass focuses on components most likely to expose skin contract gaps."
      >
        <Grid columns={3} gap="md" className="gallery-overview-grid">
          {componentGroups.map((group) => (
            <Link key={group.href} className="gallery-component-link" href={group.href}>
              <Card variant="outline" className="gallery-component-card">
                <Stack gap="sm">
                  <Heading as="h3" size="sm">
                    {group.title}
                  </Heading>
                  <Text tone="muted">{group.description}</Text>
                </Stack>
              </Card>
            </Link>
          ))}
        </Grid>
      </DocSection>
    </ComponentDoc>
  );
}
