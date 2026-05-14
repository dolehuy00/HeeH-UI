"use client";

import { Button, Stack } from "@heeh-ui/core";
import {
  Checkbox,
  DatePicker,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Select,
  Slider,
  Switch,
  Textarea
} from "@heeh-ui/forms";
import { PreviewBox } from "../components-gallery/PreviewBox";
import { VariantGrid } from "../components-gallery/VariantGrid";

const roleOptions = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Maintainer", value: "maintainer" }
];

export function InputDefaultDemo() {
  return (
    <PreviewBox title="Default preview">
      <VariantGrid>
        <Input aria-label="Project name" placeholder="Project name" />
        <Input aria-label="Invalid package" state="invalid" placeholder="@scope/package" />
      </VariantGrid>
    </PreviewBox>
  );
}

export function InputSizesDemo() {
  return (
    <PreviewBox title="Sizes">
      <VariantGrid>
        <Input aria-label="Small input" size="sm" placeholder="Small" />
        <Input aria-label="Medium input" size="md" placeholder="Medium" />
        <Input aria-label="Large input" size="lg" placeholder="Large" />
      </VariantGrid>
    </PreviewBox>
  );
}

export function InputStatesDemo() {
  return (
    <PreviewBox title="States">
      <VariantGrid>
        <Input aria-label="Disabled input" disabled placeholder="Disabled" />
        <Input aria-label="Invalid input" aria-invalid="true" placeholder="Invalid" />
        <Input aria-label="Read only input" readOnly defaultValue="Read only value" />
      </VariantGrid>
    </PreviewBox>
  );
}

export function FormControlsDemo() {
  return (
    <PreviewBox title="Nearby form controls">
      <form className="gallery-form-demo">
        <FormField>
          <FormLabel htmlFor="gallery-role">Role</FormLabel>
          <Select id="gallery-role" options={roleOptions} placeholder="Choose a role" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="gallery-notes">Notes</FormLabel>
          <Textarea id="gallery-notes" placeholder="What should this skin communicate?" />
          <FormMessage>Textarea and select are not part of skin contract v1 yet.</FormMessage>
        </FormField>
        <Stack gap="sm">
          <Checkbox label="Remember this setup" />
          <Switch label="Enable compact preview" />
          <Slider aria-label="Demo slider" defaultValue={60} />
        </Stack>
        <DatePicker aria-label="Review date" />
        <Button type="submit">Save demo</Button>
      </form>
    </PreviewBox>
  );
}
