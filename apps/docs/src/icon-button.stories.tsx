import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@heeh-ui/core";

const meta = {
  title: "Core/IconButton",
  component: IconButton,
  args: {
    label: "Add item",
    icon: "+",
    variant: "primary",
    size: "md"
  }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};
