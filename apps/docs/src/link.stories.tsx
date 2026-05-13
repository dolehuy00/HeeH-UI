import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@heeh-ui/core";

const meta = {
  title: "Core/Link",
  component: Link,
  args: {
    href: "https://example.com",
    children: "Example link"
  }
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
