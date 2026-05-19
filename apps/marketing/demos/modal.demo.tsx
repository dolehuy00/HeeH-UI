"use client";

import * as React from "react";
import { Button, Stack, Text } from "@heeh-ui/core";
import { Dialog } from "@heeh-ui/components/client";
import { PreviewBox } from "../components-gallery/PreviewBox";

export function ModalInteractionDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <PreviewBox
      title="Interactive preview"
      description="The modal is intentionally simple: it exposes overlay, dialog surface, close action, and content spacing."
    >
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog open={open} title="Publish component docs" onOpenChange={setOpen}>
        <Stack gap="md">
          <Text tone="muted">
            This checks whether the active skin still feels coherent inside an overlay.
          </Text>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </Stack>
      </Dialog>
    </PreviewBox>
  );
}
