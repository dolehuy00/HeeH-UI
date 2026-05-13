import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  EmptyState,
  Pagination,
  Popover,
  Progress,
  Skeleton,
  Tabs
} from "@heeh-ui/components";
import { Button, Card, Grid, Heading, Stack, Text } from "@heeh-ui/core";
import { Avatar, Badge, MetricCard, Table, Tag } from "@heeh-ui/data-display";
import { JsonViewer, PermissionGuard } from "@heeh-ui/patterns";

const meta = {
  title: "Catalog/Component Groups",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const rows = [
  { name: "Office", status: "Stable" },
  { name: "Cartoon", status: "Draft" }
];

export const Overview: Story = {
  render: () => (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 32 }}>
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading as="h1" size="lg">
            Component catalog
          </Heading>
          <Text tone="muted">
            Baseline components across overlays, navigation, feedback, data display, layout,
            interaction, media, and enterprise patterns.
          </Text>
        </Stack>

        <Grid columns={2} gap="md">
          <Card tone="elevated" style={{ padding: 20 }}>
            <Stack gap="md">
              <Heading size="sm">Feedback</Heading>
              <Alert title="Heads up">This is an alert baseline.</Alert>
              <Progress value={64} />
              <Skeleton style={{ height: 48 }} />
              <EmptyState title="No results" description="Try changing filters." />
            </Stack>
          </Card>

          <Card tone="elevated" style={{ padding: 20 }}>
            <Stack gap="md">
              <Heading size="sm">Navigation</Heading>
              <Tabs
                items={[
                  { id: "one", label: "One", content: "First tab" },
                  { id: "two", label: "Two", content: "Second tab" }
                ]}
              />
              <Pagination page={1} pageCount={5} />
            </Stack>
          </Card>

          <Card tone="elevated" style={{ padding: 20 }}>
            <Stack gap="md">
              <Heading size="sm">Data display</Heading>
              <Table
                columns={[
                  { id: "name", header: "Name", cell: (row: (typeof rows)[number]) => row.name },
                  {
                    id: "status",
                    header: "Status",
                    cell: (row: (typeof rows)[number]) => <Badge>{row.status}</Badge>
                  }
                ]}
                data={rows}
              />
              <MetricCard label="Revenue" value="$24.8k" trend="+12%" />
              <Stack direction="row" gap="sm">
                <Avatar fallback="H" />
                <Tag>Design system</Tag>
              </Stack>
            </Stack>
          </Card>

          <Card tone="elevated" style={{ padding: 20 }}>
            <Stack gap="md">
              <Heading size="sm">Patterns</Heading>
              <PermissionGuard allowed fallback="No access">
                <Button>Protected action</Button>
              </PermissionGuard>
              <JsonViewer value={{ skin: "office", ready: true }} />
            </Stack>
          </Card>
        </Grid>

        <Popover>Overlay components are present as baseline shells.</Popover>
      </Stack>
    </main>
  )
};
