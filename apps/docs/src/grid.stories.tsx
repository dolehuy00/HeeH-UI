import type { Meta, StoryObj } from "@storybook/react";
import { Grid, Surface, Text } from "@heeh-ui/core";

const meta = {
  title: "Core/Grid",
  component: Grid
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap="md" style={{ width: 640 }}>
      {["One", "Two", "Three"].map((item) => (
        <Surface key={item} tone="muted" style={{ padding: 16 }}>
          <Text>{item}</Text>
        </Surface>
      ))}
    </Grid>
  )
};
