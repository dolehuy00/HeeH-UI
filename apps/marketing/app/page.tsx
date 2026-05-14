"use client";

import * as React from "react";
import { Button, Card, Container, Grid, Heading, Stack, Text } from "@heeh-ui/core";
import { Input } from "@heeh-ui/forms";
import { Section } from "@heeh-ui/components";
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
import { minimalSkin } from "@heeh-ui/skins/minimal";
import { officeSkin } from "@heeh-ui/skins/office";
import { UIProvider, useTheme, type ThemeMode, type UISkin } from "@heeh-ui/theme";

const skins: Record<string, UISkin> = {
  office: officeSkin,
  cartoon: cartoonSkin,
  minimal: minimalSkin
};

const features = [
  {
    title: "Headless core",
    description: "Behavior stays neutral, reusable, and ready for very different visual systems."
  },
  {
    title: "Skin injection",
    description: "Buttons, cards, surfaces, text, inputs, and sections resolve through one active skin."
  },
  {
    title: "Product-ready layers",
    description: "Compose primitives into marketing, dashboards, docs, and internal tools without rewriting behavior."
  },
  {
    title: "Token foundation",
    description: "Light and dark modes share semantic CSS variables that skins can build on."
  },
  {
    title: "Variant APIs",
    description: "Small variant contracts keep the system testable without boolean-heavy component props."
  },
  {
    title: "Monorepo workflow",
    description: "Apps consume the same packages used by docs and playground, so weak contracts show up quickly."
  }
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For prototypes and internal experiments.",
    features: ["Core primitives", "Theme provider", "Office skin"]
  },
  {
    name: "Team",
    price: "$19",
    description: "For product teams building real flows.",
    features: ["All starter features", "Multiple skins", "Forms and layouts"]
  },
  {
    name: "System",
    price: "$49",
    description: "For teams standardizing a visual language.",
    features: ["Skin contract v1", "Docs surface", "Landing and app patterns"]
  }
];

function MarketingShell() {
  const [skinName, setSkinName] = React.useState("office");

  return (
    <UIProvider skin={skins[skinName] ?? officeSkin}>
      <LandingPage skinName={skinName} onSkinChange={setSkinName} />
    </UIProvider>
  );
}

function LandingPage({
  skinName,
  onSkinChange
}: {
  skinName: string;
  onSkinChange: (skinName: string) => void;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <Navbar
        skinName={skinName}
        theme={theme}
        onSkinChange={onSkinChange}
        onThemeChange={setTheme}
      />
      <Hero />
      <FeatureGrid />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar({
  skinName,
  theme,
  onSkinChange,
  onThemeChange
}: {
  skinName: string;
  theme: ThemeMode;
  onSkinChange: (skinName: string) => void;
  onThemeChange: (theme: ThemeMode) => void;
}) {
  return (
    <header className="marketing-navbar">
      <Container size="xl" className="marketing-navbar__inner">
        <a className="marketing-brand" href="#hero" aria-label="HeeH UI home">
          <span className="marketing-brand__mark" aria-hidden="true" />
          <span>HeeH UI</span>
        </a>
        <nav className="marketing-navlinks" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Start</a>
        </nav>
        <div className="marketing-controls" aria-label="Theme and skin controls">
          {Object.keys(skins).map((name) => (
            <Button
              key={name}
              size="sm"
              variant={skinName === name ? "primary" : "ghost"}
              onClick={() => onSkinChange(name)}
            >
              {name}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline"
            onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <Section id="hero" spacing="xl" tone="default" className="marketing-hero">
      <Container size="xl" className="marketing-hero__grid">
        <Stack gap="lg" className="marketing-hero__copy">
          <Stack gap="sm">
            <Text as="span" size="sm" tone="muted" className="marketing-eyebrow">
              Skin contract v1 stress test
            </Text>
            <Heading as="h1" size="xl" className="marketing-hero__title">
              One landing page. Three skins. Same component contract.
            </Heading>
            <Text size="lg" tone="muted" className="marketing-hero__lead">
              HeeH UI separates behavior from visual identity so teams can ship serious
              product interfaces without welding every component to one brand style.
            </Text>
          </Stack>
          <div className="marketing-actions">
            <Button size="lg">Build with HeeH</Button>
            <Button size="lg" variant="outline">View contract</Button>
          </div>
        </Stack>
        <ProductPreview />
      </Container>
    </Section>
  );
}

function ProductPreview() {
  return (
    <Card variant="elevated" tone="elevated" className="marketing-preview" aria-label="Product preview">
      <Stack gap="md">
        <div className="marketing-preview__toolbar">
          <span />
          <span />
          <span />
        </div>
        <Grid columns={2} gap="md" className="marketing-preview__metrics">
          <Card variant="outline" className="marketing-preview__metric">
            <Text size="sm" tone="muted">Adoption</Text>
            <Heading as="h3" size="lg">87%</Heading>
          </Card>
          <Card variant="outline" className="marketing-preview__metric">
            <Text size="sm" tone="muted">Render cost</Text>
            <Heading as="h3" size="lg">Low</Heading>
          </Card>
        </Grid>
        <div className="marketing-preview__chart" aria-hidden="true">
          <span className="marketing-preview__bar marketing-preview__bar--low" />
          <span className="marketing-preview__bar marketing-preview__bar--mid" />
          <span className="marketing-preview__bar marketing-preview__bar--base" />
          <span className="marketing-preview__bar marketing-preview__bar--high" />
          <span className="marketing-preview__bar marketing-preview__bar--steady" />
        </div>
        <Input aria-label="Demo email input" placeholder="team@product.dev" />
      </Stack>
    </Card>
  );
}

function FeatureGrid() {
  return (
    <Section id="features" spacing="xl" tone="muted">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="sm" className="marketing-section-heading">
            <Heading as="h2" size="lg">Built to reveal contract gaps early</Heading>
            <Text size="lg" tone="muted">
              This page deliberately reuses the same small contract across multiple content
              densities, so weak styling APIs show up in real layout pressure.
            </Text>
          </Stack>
          <Grid columns={3} gap="lg" className="marketing-feature-grid">
            {features.map((feature) => (
              <Card key={feature.title} variant="default" className="marketing-feature-card">
                <Stack gap="sm">
                  <span className="marketing-feature-card__icon" aria-hidden="true" />
                  <Heading as="h3" size="md">{feature.title}</Heading>
                  <Text tone="muted">{feature.description}</Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" spacing="xl" tone="default">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="sm" className="marketing-section-heading">
            <Heading as="h2" size="lg">Pricing that tests cards, text, and buttons</Heading>
            <Text size="lg" tone="muted">
              Three card densities, repeated call-to-actions, and enough copy to make skin
              spacing choices visible.
            </Text>
          </Stack>
          <Grid columns={3} gap="lg" className="marketing-pricing-grid">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                variant={index === 1 ? "elevated" : "outline"}
                tone={index === 1 ? "elevated" : "default"}
                className="marketing-price-card"
              >
                <Stack gap="lg">
                  <Stack gap="xs">
                    <Text as="span" tone="muted">{plan.name}</Text>
                    <Heading as="h3" size="xl">{plan.price}</Heading>
                    <Text tone="muted">{plan.description}</Text>
                  </Stack>
                  <ul className="marketing-plan-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button variant={index === 1 ? "primary" : "outline"}>
                    Choose {plan.name}
                  </Button>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section id="cta" spacing="xl" tone="accent" className="marketing-cta">
      <Container size="lg">
        <Card variant="elevated" tone="elevated" className="marketing-cta__card">
          <Stack gap="lg" className="marketing-cta__content">
            <Stack gap="sm">
              <Heading as="h2" size="lg">Try the contract under real page pressure.</Heading>
              <Text size="lg" tone="muted">
                Add a skin, switch the page, and watch which APIs are too narrow before
                the system spreads into product code.
              </Text>
            </Stack>
            <form className="marketing-signup">
              <Input aria-label="Work email" placeholder="work@email.com" />
              <Button type="submit">Request preview</Button>
            </form>
          </Stack>
        </Card>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="marketing-footer">
      <Container size="xl" className="marketing-footer__inner">
        <Text tone="muted">HeeH UI</Text>
        <Text tone="muted">Skin contract v1: button, card, surface, heading, text, input, section.</Text>
      </Container>
    </footer>
  );
}

export default function Page() {
  return <MarketingShell />;
}
