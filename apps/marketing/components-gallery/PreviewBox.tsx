"use client";

import type { ReactNode } from "react";
import { Heading, Text } from "@heeh-ui/core";

export function PreviewBox({
  children,
  description,
  title
}: {
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <section className="gallery-preview">
      <div className="gallery-preview__header">
        <Heading as="h4" size="sm">
          {title}
        </Heading>
        {description ? <Text tone="muted">{description}</Text> : null}
      </div>
      <div className="gallery-preview__body">{children}</div>
    </section>
  );
}
