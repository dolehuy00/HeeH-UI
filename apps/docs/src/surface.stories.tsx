import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Surface, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Surface",
  component: Surface
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tones: Story = {
  render: () => (
    <Stack gap="md" className="docs-stack--surface">
      <Surface tone="default" className="docs-card--sm">
        <Text>Default surface</Text>
      </Surface>
      <Surface tone="muted" className="docs-card--sm">
        <Text>Muted surface</Text>
      </Surface>
      <Surface tone="elevated" className="docs-card--sm">
        <Text>Elevated surface</Text>
      </Surface>
    </Stack>
  )
};
