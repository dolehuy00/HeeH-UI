import type { Meta, StoryObj } from "@storybook/react";
import { Button, Flex } from "@heeh-ui/core";

const meta = {
  title: "Core/Flex",
  component: Flex
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Flex align="center" gap="sm" justify="between" style={{ width: 480 }}>
      <Button>Left</Button>
      <Button variant="outline">Right</Button>
    </Flex>
  )
};
