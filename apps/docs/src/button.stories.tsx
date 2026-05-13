import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@heeh-ui/core";

const meta = {
  title: "Core/Button",
  component: Button,
  args: {
    children: "Button"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};
