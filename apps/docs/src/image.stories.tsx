import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@heeh-ui/core";

const meta = {
  title: "Core/Image",
  component: Image,
  args: {
    alt: "Gradient placeholder",
    src: "https://placehold.co/640x360/png",
    style: {
      width: 320,
      height: 180
    }
  }
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cover: Story = {
  args: {
    fit: "cover"
  }
};

export const Contain: Story = {
  args: {
    fit: "contain"
  }
};
