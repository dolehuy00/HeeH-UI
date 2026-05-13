import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Text",
  component: Text,
  args: {
    children: "Text content"
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm">
      <Text size="sm">Small text</Text>
      <Text size="md">Medium text</Text>
      <Text size="lg">Large text</Text>
    </Stack>
  )
};

export const Tones: Story = {
  render: () => (
    <Stack gap="sm">
      <Text tone="default">Default text</Text>
      <Text tone="muted">Muted text</Text>
      <Text tone="danger">Danger text</Text>
    </Stack>
  )
};
