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
    <Stack gap="md" style={{ width: 320 }}>
      <Text>Above</Text>
      <Separator />
      <Text>Below</Text>
    </Stack>
  )
};

export const Vertical: Story = {
  render: () => (
    <Flex align="center" gap="md" style={{ height: 48 }}>
      <Text>Left</Text>
      <Separator orientation="vertical" />
      <Text>Right</Text>
    </Flex>
  )
};
