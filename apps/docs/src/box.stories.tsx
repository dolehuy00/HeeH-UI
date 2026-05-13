import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@heeh-ui/core";

const meta = {
  title: "Core/Box",
  component: Box,
  args: {
    children: "Box",
    style: {
      padding: 16,
      border: "1px solid hsl(var(--heeh-color-border))"
    }
  }
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
