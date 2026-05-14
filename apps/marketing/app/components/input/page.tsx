"use client";

import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PropsTable } from "../../../components-gallery/PropsTable";
import {
  FormControlsDemo,
  InputDefaultDemo,
  InputSizesDemo,
  InputStatesDemo
} from "../../../demos/input.demo";

const inputProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    notes: "Maps to the active skin input sizing."
  },
  {
    name: "state",
    type: '"default" | "invalid"',
    defaultValue: '"default"',
    notes: "Can be set directly or inferred from aria-invalid=true."
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    notes: "Disables the native input and forwards the disabled state to the skin."
  }
];

export default function InputPage() {
  return (
    <ComponentDoc
      title="Input"
      description="Skin-aware native input used for text, date, time, file, and related single-value controls."
    >
      <DocSection title="Overview">
        <InputDefaultDemo />
      </DocSection>
      <DocSection title="Variants" description="Input v1 uses state rather than visual variants. Invalid is the first semantic state." />
      <DocSection title="Sizes">
        <InputSizesDemo />
      </DocSection>
      <DocSection title="States">
        <InputStatesDemo />
      </DocSection>
      <DocSection title="Form control pressure">
        <FormControlsDemo />
      </DocSection>
      <DocSection title="Example usage">
        <CodeBlock>{`<Input
  aria-label="Package name"
  placeholder="@heeh-ui/core"
/>

<Input
  aria-invalid="true"
  placeholder="Required field"
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={inputProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Input is wired into the skin contract, while Select, Textarea, Checkbox, Switch, and Slider still rely on shared styles. That gap is now visible in one place."
      />
    </ComponentDoc>
  );
}
