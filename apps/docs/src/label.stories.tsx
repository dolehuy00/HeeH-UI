import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@heeh-ui/core";

const meta = {
  title: "Core/Label",
  component: Label,
  args: {
    children: "Email address"
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
