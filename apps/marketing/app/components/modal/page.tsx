"use client";

import { Button, Text } from "@heeh-ui/core";
import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PreviewBox } from "../../../components-gallery/PreviewBox";
import { PropsTable } from "../../../components-gallery/PropsTable";
import { VariantGrid } from "../../../components-gallery/VariantGrid";
import { ModalInteractionDemo } from "../../../demos/modal.demo";

const modalProps = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "false",
    notes: "Controls whether the dialog is mounted."
  },
  {
    name: "title",
    type: "ReactNode",
    defaultValue: "undefined",
    notes: "Optional header title."
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    notes: "Enables the built-in close action."
  }
];

export default function ModalPage() {
  return (
    <ComponentDoc
      title="Modal"
      description="Overlay component for focused flows, currently composed from shared overlay styles and core actions."
    >
      <DocSection title="Overview">
        <ModalInteractionDemo />
      </DocSection>
      <DocSection title="Variants" description="Dialog, Modal, and AlertDialog currently share the same implementation." />
      <DocSection title="Sizes" description="Modal sizing is CSS-driven in v1 and not part of the component contract." />
      <DocSection title="States">
        <PreviewBox title="Trigger states">
          <VariantGrid>
            <Button>Open modal</Button>
            <Button disabled>Unavailable</Button>
            <Text tone="muted">Open and closed are controlled by the parent.</Text>
          </VariantGrid>
        </PreviewBox>
      </DocSection>
      <DocSection title="Example usage">
        <CodeBlock>{`const [open, setOpen] = React.useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Dialog open={open} title="Confirm" onOpenChange={setOpen}>
  Modal content
</Dialog>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={modalProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Modal exposes a real next gap: overlay, dialog radius, dialog spacing, and close action are not yet fully skin-contract driven."
      />
    </ComponentDoc>
  );
}
