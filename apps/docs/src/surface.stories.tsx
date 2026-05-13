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
    <Stack gap="md" style={{ width: 360 }}>
      <Surface tone="default" style={{ padding: 16 }}>
        <Text>Default surface</Text>
      </Surface>
      <Surface tone="muted" style={{ padding: 16 }}>
        <Text>Muted surface</Text>
      </Surface>
      <Surface tone="elevated" style={{ padding: 16 }}>
        <Text>Elevated surface</Text>
      </Surface>
    </Stack>
  )
};
