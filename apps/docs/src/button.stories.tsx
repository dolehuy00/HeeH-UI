import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@heeh-ui/core";

const meta = {
  title: "Core/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Danger: Story = {
  args: {
    variant: "danger"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Saving"
  }
};
