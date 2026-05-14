"use client";

import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PropsTable } from "../../../components-gallery/PropsTable";
import {
  ButtonDefaultDemo,
  ButtonSizesDemo,
  ButtonStatesDemo,
  ButtonVariantsDemo
} from "../../../demos/button.demo";

const buttonProps = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "danger" | "ghost" | "outline"',
    defaultValue: '"primary"',
    notes: "Intent-free enough for skins, specific enough for product actions."
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    notes: "Maps to skin button sizing and spacing."
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    notes: "Disables native click behavior and passes state to the skin."
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    notes: "Renders the spinner and disables the action while pending."
  }
];

export default function ButtonPage() {
  return (
    <ComponentDoc
      title="Button"
      description="Base action component used for primary, secondary, destructive, quiet, and bordered commands."
    >
      <DocSection title="Overview">
        <ButtonDefaultDemo />
      </DocSection>
      <DocSection title="Variants">
        <ButtonVariantsDemo />
      </DocSection>
      <DocSection title="Sizes">
        <ButtonSizesDemo />
      </DocSection>
      <DocSection title="States">
        <ButtonStatesDemo />
      </DocSection>
      <DocSection title="Example usage">
        <CodeBlock>{`<Button variant="primary" size="lg">
  Publish changes
</Button>

<Button variant="danger" loading>
  Delete workspace
</Button>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={buttonProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="The core component only asks the active skin for classes. Office, cartoon, and minimal can change color, radius, shadow, and motion without changing Button props."
      />
    </ComponentDoc>
  );
}
