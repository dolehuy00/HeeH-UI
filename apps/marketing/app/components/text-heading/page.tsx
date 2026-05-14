import { Heading, Text } from "@heeh-ui/core";
import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PreviewBox } from "../../../components-gallery/PreviewBox";
import { PropsTable } from "../../../components-gallery/PropsTable";
import { VariantGrid } from "../../../components-gallery/VariantGrid";

const textProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    notes: "Controls body text scale."
  },
  {
    name: "tone",
    type: '"default" | "muted" | "danger"',
    defaultValue: '"default"',
    notes: "Semantic text color role."
  },
  {
    name: "as",
    type: '"p" | "span" | "div"',
    defaultValue: '"p"',
    notes: "Controls rendered body element without changing skin behavior."
  }
];

const headingProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    defaultValue: '"md"',
    notes: "Controls heading scale."
  },
  {
    name: "as",
    type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
    defaultValue: '"h2"',
    notes: "Keeps semantic heading level separate from visual size."
  }
];

export default function TextHeadingPage() {
  return (
    <ComponentDoc
      title="Text / Heading"
      description="Typography primitives that separate semantic element choice from visual scale and tone."
    >
      <DocSection title="Overview">
        <PreviewBox title="Default preview">
          <Heading as="h3" size="lg">
            Build composable interfaces
          </Heading>
          <Text tone="muted">
            The active skin decides the typographic voice without adding domain props.
          </Text>
        </PreviewBox>
      </DocSection>
      <DocSection title="Variants">
        <PreviewBox title="Text tones">
          <VariantGrid>
            <Text>Default text</Text>
            <Text tone="muted">Muted text</Text>
            <Text tone="danger">Danger text</Text>
          </VariantGrid>
        </PreviewBox>
      </DocSection>
      <DocSection title="Sizes">
        <PreviewBox title="Heading and text sizes">
          <div className="gallery-type-scale">
            <Heading as="h3" size="xl">Heading xl</Heading>
            <Heading as="h3" size="lg">Heading lg</Heading>
            <Heading as="h3" size="md">Heading md</Heading>
            <Heading as="h3" size="sm">Heading sm</Heading>
            <Text size="lg">Text lg</Text>
            <Text size="md">Text md</Text>
            <Text size="sm">Text sm</Text>
          </div>
        </PreviewBox>
      </DocSection>
      <DocSection title="States" description="Text and Heading do not carry interactive states in v1." />
      <DocSection title="Example usage">
        <CodeBlock>{`<Heading as="h1" size="xl">
  Component Gallery
</Heading>

<Text size="lg" tone="muted">
  Skin-aware supporting copy.
</Text>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={headingProps} />
        <PropsTable rows={textProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Heading and Text show whether a skin has a recognizable typographic voice while preserving semantic HTML."
      />
    </ComponentDoc>
  );
}
