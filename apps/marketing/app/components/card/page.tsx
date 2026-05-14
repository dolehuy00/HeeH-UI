import { ComponentDoc, CodeBlock, DocSection } from "../../../components-gallery/ComponentLayout";
import { PropsTable } from "../../../components-gallery/PropsTable";
import {
  CardDefaultDemo,
  CardVariantsDemo,
  SurfaceTonesDemo
} from "../../../demos/card.demo";

const cardProps = [
  {
    name: "variant",
    type: '"default" | "elevated" | "outline"',
    defaultValue: '"default"',
    notes: "Controls border and elevation affordance."
  },
  {
    name: "tone",
    type: '"default" | "muted" | "elevated"',
    defaultValue: '"default"',
    notes: "Reuses surface tone language for card backgrounds."
  }
];

const surfaceProps = [
  {
    name: "tone",
    type: '"default" | "muted" | "elevated"',
    defaultValue: '"default"',
    notes: "Describes background role without tying the component to a domain."
  }
];

export default function CardPage() {
  return (
    <ComponentDoc
      title="Card / Surface"
      description="Foundational containers for grouped content, page panels, and elevated interface areas."
    >
      <DocSection title="Overview">
        <CardDefaultDemo />
      </DocSection>
      <DocSection title="Variants">
        <CardVariantsDemo />
      </DocSection>
      <DocSection title="Sizes" description="Card has no size prop in v1; density currently comes from layout CSS and child spacing." />
      <DocSection title="States" description="Interactive card states are not part of the current headless Card API." />
      <DocSection title="Surface tones">
        <SurfaceTonesDemo />
      </DocSection>
      <DocSection title="Example usage">
        <CodeBlock>{`<Card variant="outline" tone="default">
  <Heading as="h3" size="sm">Release notes</Heading>
  <Text tone="muted">Small grouped content.</Text>
</Card>

<Surface tone="muted">
  Page-level muted area
</Surface>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props table">
        <PropsTable rows={cardProps} />
        <PropsTable rows={surfaceProps} />
      </DocSection>
      <DocSection
        title="Skin behavior"
        description="Cards and surfaces reveal the first v1 pressure point: padding, anatomy, and interactive states still live outside the skin contract."
      />
    </ComponentDoc>
  );
}
