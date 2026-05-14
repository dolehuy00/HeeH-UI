"use client";

import type { ReactNode } from "react";
import { Heading, Stack, Text } from "@heeh-ui/core";

export type ComponentDocProps = {
  children: ReactNode;
  description: string;
  title: string;
};

export function ComponentDoc({ children, description, title }: ComponentDocProps) {
  return (
    <article className="gallery-doc">
      <Stack gap="lg">
        <header className="gallery-doc__header">
          <Text as="span" size="sm" tone="muted">
            Component contract
          </Text>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Text size="lg" tone="muted">
            {description}
          </Text>
        </header>
        {children}
      </Stack>
    </article>
  );
}

export function DocSection({
  children,
  description,
  title
}: {
  children?: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <section className="gallery-doc-section">
      <Stack gap="md">
        <div className="gallery-doc-section__header">
          <Heading as="h3" size="md">
            {title}
          </Heading>
          {description ? <Text tone="muted">{description}</Text> : null}
        </div>
        {children}
      </Stack>
    </section>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return <pre className="gallery-code"><code>{children}</code></pre>;
}
