import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Separator, Stack, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Separator",
  component: Separator
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <Stack gap="md" className="docs-stack--narrow">
      <Text>Above</Text>
      <Separator />
      <Text>Below</Text>
    </Stack>
  )
};

export const Vertical: Story = {
  render: () => (
    <Flex align="center" gap="md" className="docs-flex--short">
      <Text>Left</Text>
      <Separator orientation="vertical" />
      <Text>Right</Text>
    </Flex>
  )
};
