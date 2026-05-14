import type { Meta, StoryObj } from "@storybook/react";
import { Card, Stack, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Card",
  component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card tone="elevated" className="docs-card--md docs-card--fixed">
      <Stack gap="xs">
        <Text>Core card</Text>
        <Text size="sm" tone="muted">
          A primitive surface for simple composition.
        </Text>
      </Stack>
    </Card>
  )
};
