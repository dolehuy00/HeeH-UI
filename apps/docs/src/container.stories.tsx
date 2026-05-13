import type { Meta, StoryObj } from "@storybook/react";
import { Container, Surface, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Container",
  component: Container,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container size="md" style={{ paddingBlock: 32 }}>
      <Surface tone="muted" style={{ padding: 24 }}>
        <Text>Centered container content</Text>
      </Surface>
    </Container>
  )
};
