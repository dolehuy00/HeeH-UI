# HeeH UI Component Gallery

This app is a small Next.js component gallery and playground for stress-testing the HeeH UI skin contract.

It replaces the earlier promotional landing page with a more useful open-source surface:

```txt
Header: theme switch + skin switch + density switch
Sidebar: component navigation
Main: component docs, previews, variants, states, props, and skin notes
```

The goal is to test components under real layout pressure while switching between `office`, `cartoon`, and `minimal` skins.

## Routes

```txt
/
/components
/components/button
/components/text-heading
/components/card
/components/input
/components/modal
/components/table
/components/form-layout
```

The root route renders the same gallery shell as `/components`.

## Structure

```txt
apps/marketing/
  app/
    layout.tsx
    page.tsx
    marketing.css
    components/
      layout.tsx
      page.tsx
      button/page.tsx
      card/page.tsx
      input/page.tsx
  components-gallery/
    GalleryShell.tsx
    ComponentLayout.tsx
    PreviewBox.tsx
    VariantGrid.tsx
    PropsTable.tsx
    OverviewPage.tsx
  demos/
    button.demo.tsx
    card.demo.tsx
    input.demo.tsx
    modal.demo.tsx
```

## Run Locally

From the repository root:

```bash
pnpm --filter @heeh-ui/marketing dev
```

On Windows PowerShell:

```bash
pnpm.cmd --filter @heeh-ui/marketing dev
```

Default URL:

```txt
http://localhost:3000
```

If the port is already in use:

```bash
pnpm.cmd --filter @heeh-ui/marketing exec next dev --hostname 0.0.0.0 -p 3001
```

## Build

Build only this app:

```bash
pnpm --filter @heeh-ui/marketing build
```

Build the full workspace:

```bash
pnpm build
```

The app uses static export via `output: "export"` in `next.config.ts`, so production output is written to:

```txt
apps/marketing/out
```

## What This App Tests

- `@heeh-ui/core`: Button, Card, Surface, Heading, Text, Grid, Stack, Container.
- `@heeh-ui/forms`: Input and nearby form controls.
- `@heeh-ui/components`: Section and Dialog/Modal composition.
- `@heeh-ui/data-display`: Table and Tag density checks.
- `@heeh-ui/theme`: UIProvider, useTheme, and active skin injection.
- `@heeh-ui/skins/office`, `@heeh-ui/skins/cartoon`, and `@heeh-ui/skins/minimal`: explicit skin imports.

## Current Contract Gaps

This gallery intentionally makes unresolved v1 gaps visible:

- Card and Surface need richer anatomy, padding, and interactive state contracts.
- Select, Textarea, Checkbox, Switch, and Slider are still mostly shared-style controls, while Input is skin-aware.
- Modal sizing, overlay treatment, and dialog anatomy are not yet fully skin-contract driven.
- Table density, sorting, selection, loading, and empty states are not modeled yet.
- Form layout has useful primitives, but field state semantics need to grow beyond invalid.
