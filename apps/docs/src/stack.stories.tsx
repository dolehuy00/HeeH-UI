import type { Meta, StoryObj } from "@storybook/react";
import { Button, Stack } from "@heeh-ui/core";

const meta = {
  title: "Core/Stack",
  component: Stack
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Column: Story = {
  render: () => (
    <Stack gap="sm">
      <Button>One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="ghost">Three</Button>
    </Stack>
  )
};

export const Row: Story = {
  render: () => (
    <Stack direction="row" gap="sm">
      <Button>One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="ghost">Three</Button>
    </Stack>
  )
};
