"use client";

import { Button, Grid } from "@heeh-ui/core";
import {
  Checkbox,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  Input,
  Select,
  Textarea
} from "@heeh-ui/forms";
import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PreviewBox } from "../../../components-gallery/PreviewBox";
import { PropsTable } from "../../../components-gallery/PropsTable";

const formProps = [
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    notes: "Marks a field wrapper invalid for styling and data attributes."
  },
  {
    name: "title",
    type: "ReactNode",
    defaultValue: "undefined",
    notes: "Optional FormSection heading."
  },
  {
    name: "description",
    type: "ReactNode",
    defaultValue: "undefined",
    notes: "Optional FormSection supporting text."
  }
];

const frameworkOptions = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Storybook", value: "storybook" }
];

export default function FormLayoutPage() {
  return (
    <ComponentDoc
      title="Form layout"
      description="Field and section primitives for checking labels, messages, grouped controls, and submit rhythm."
    >
      <DocSection title="Overview">
        <PreviewBox title="Default preview">
          <form className="gallery-form-panel">
            <FormSection
              title="Project setup"
              description="A compact form exposes where field spacing and non-input controls diverge."
            >
              <Grid columns={2} gap="md" className="gallery-form-grid">
                <FormField>
                  <FormLabel htmlFor="project-name">Project name</FormLabel>
                  <Input id="project-name" placeholder="HeeH UI" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="framework">Framework</FormLabel>
                  <Select id="framework" options={frameworkOptions} placeholder="Choose framework" />
                </FormField>
              </Grid>
              <FormField invalid>
                <FormLabel htmlFor="scope">Package scope</FormLabel>
                <Input id="scope" aria-invalid="true" placeholder="@heeh-ui" />
                <FormMessage tone="danger">Use a valid package scope before publishing.</FormMessage>
              </FormField>
              <FormField>
                <FormLabel htmlFor="notes">Notes</FormLabel>
                <Textarea id="notes" placeholder="What should this component prove?" />
              </FormField>
              <Checkbox label="Include docs examples" />
              <Button type="submit">Save project</Button>
            </FormSection>
          </form>
        </PreviewBox>
      </DocSection>
      <DocSection title="Variants" description="Form layout uses composition rather than variant props in v1." />
      <DocSection title="Sizes" description="Field density comes from surrounding layout and the child input size." />
      <DocSection title="States" description="Invalid field state is present, but success, warning, required, and loading form states are not modeled yet." />
      <DocSection title="Example usage">
        <CodeBlock>{`<FormField invalid>
  <FormLabel htmlFor="scope">Package scope</FormLabel>
  <Input id="scope" aria-invalid="true" />
  <FormMessage tone="danger">Use a valid package scope.</FormMessage>
</FormField>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={formProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Form layout is the clearest reminder that Input is skin-aware but its surrounding field system still depends on shared CSS."
      />
    </ComponentDoc>
  );
}
