import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Grid, Heading, Stack, Text } from "@heeh-ui/core";
import { Input } from "@heeh-ui/forms";
import { Section } from "@heeh-ui/components";
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
import { minimalSkin } from "@heeh-ui/skins/minimal";
import { officeSkin } from "@heeh-ui/skins/office";
import { UIProvider, type UISkin } from "@heeh-ui/theme";

const meta = {
  title: "Skins/Contract Examples",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const examples: Array<{ name: string; skin: UISkin; description: string }> = [
  {
    name: "Office",
    skin: officeSkin,
    description: "Restrained enterprise baseline with subtle shadows and token colors."
  },
  {
    name: "Cartoon",
    skin: cartoonSkin,
    description: "Chunkier borders, stronger radius, and expressive offset shadows."
  },
  {
    name: "Minimal",
    skin: minimalSkin,
    description: "Reduced decoration, sharp surfaces, and a quieter reading rhythm."
  }
];

function ContractPanel({ name, skin, description }: (typeof examples)[number]) {
  return (
    <UIProvider skin={skin}>
      <Section spacing="lg" tone="default" className="docs-card">
        <Card variant="elevated" tone="elevated" className="docs-card">
          <Stack gap="lg">
            <Stack gap="xs">
              <Text as="span" tone="muted">{name}</Text>
              <Heading as="h2" size="lg">{name} skin example</Heading>
              <Text tone="muted">{description}</Text>
            </Stack>
            <Grid columns={2} gap="md">
              <Card variant="outline" className="docs-card--sm">
                <Stack gap="xs">
                  <Heading as="h3" size="sm">Card + text</Heading>
                  <Text tone="muted">This card is resolved through the active skin.</Text>
                </Stack>
              </Card>
              <Card variant="outline" className="docs-card--sm">
                <Stack gap="xs">
                  <Heading as="h3" size="sm">Input</Heading>
                  <Input placeholder="team@heeh.dev" aria-label={`${name} email example`} />
                </Stack>
              </Card>
            </Grid>
            <Stack direction="row" gap="sm">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Stack>
          </Stack>
        </Card>
      </Section>
    </UIProvider>
  );
}

export const PerSkin: Story = {
  render: () => (
    <main className="docs-canvas">
      <Stack gap="lg">
        {examples.map((example) => (
          <ContractPanel key={example.name} {...example} />
        ))}
      </Stack>
    </main>
  )
};
