import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Stack } from "@heeh-ui/core";

const meta = {
  title: "Core/Heading",
  component: Heading,
  args: {
    children: "Heading"
  }
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm">
      <Heading size="sm">Small heading</Heading>
      <Heading size="md">Medium heading</Heading>
      <Heading size="lg">Large heading</Heading>
      <Heading size="xl">Extra large heading</Heading>
    </Stack>
  )
};
