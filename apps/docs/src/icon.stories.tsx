import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@heeh-ui/core";

const meta = {
  title: "Core/Icon",
  component: Icon,
  args: {
    children: "★"
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Decorative: Story = {};

export const Accessible: Story = {
  args: {
    label: "Favorite"
  }
};
