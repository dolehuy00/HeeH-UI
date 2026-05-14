import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Label,
  Link,
  Separator,
  Stack,
  Surface,
  Text
} from "@heeh-ui/core";

const meta = {
  title: "Core/Foundation Showcase",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composition: Story = {
  render: () => (
    <Container size="md" className="docs-canvas docs-canvas--sm">
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading as="h1" size="lg">
            Foundation primitives
          </Heading>
          <Text tone="muted">
            Core building blocks for layout, typography, surfaces, and actions.
          </Text>
        </Stack>

        <Card tone="elevated" className="docs-card">
          <Stack gap="md">
            <Flex align="center" justify="between" wrap>
              <Stack gap="xs">
                <Label>Actions</Label>
                <Text size="sm" tone="muted">
                  Button consumes only the active skin.
                </Text>
              </Stack>
              <Flex gap="sm" wrap>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
              </Flex>
            </Flex>

            <Separator />

            <Grid columns={2} gap="md">
              <Surface tone="muted" className="docs-card--sm">
                <Stack gap="xs">
                  <Heading as="h3" size="sm">
                    Surface
                  </Heading>
                  <Text size="sm">Neutral content area.</Text>
                </Stack>
              </Surface>
              <Surface tone="elevated" className="docs-card--sm">
                <Stack gap="xs">
                  <Heading as="h3" size="sm">
                    Link
                  </Heading>
                  <Link href="https://example.com">Example link</Link>
                </Stack>
              </Surface>
            </Grid>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
};
