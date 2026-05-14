# HeeH UI Marketing App

This app is a small Next.js landing page built to stress-test the HeeH UI skin contract in a real page flow.

It intentionally uses the current contract surface:

- `button`
- `card`
- `surface`
- `heading`
- `text`
- `input`
- `section`

The goal is not to create a polished product site first. The goal is to force the design system to reveal where the skin contract is strong, where it is thin, and which component APIs need to grow next.

## Page Structure

The landing page follows a simple marketing flow:

```txt
Navbar
Hero
FeatureGrid
Pricing
CTA
Footer
```

The page includes a skin switcher for:

- `office`
- `cartoon`
- `minimal`

It also includes a light/dark theme toggle. This makes it easy to check whether the same page layout survives different visual identities and theme modes.

## Run Locally

From the repository root:

```bash
pnpm --filter @heeh-ui/marketing dev
```

On Windows PowerShell, use:

```bash
pnpm.cmd --filter @heeh-ui/marketing dev
```

The app runs on the default Next.js port:

```txt
http://localhost:3000
```

If the port is already in use:

```bash
pnpm.cmd --filter @heeh-ui/marketing exec next dev --hostname 0.0.0.0 -p 3001
```

## Build

Build only the marketing app:

```bash
pnpm --filter @heeh-ui/marketing build
```

Build the full workspace:

```bash
pnpm build
```

The app uses static export via `output: "export"` in `next.config.ts`, so the production output is written to:

```txt
apps/marketing/out
```

## Files

```txt
apps/marketing/
  app/
    layout.tsx        # imports tokens, global styles, and page CSS
    page.tsx          # landing page and skin/theme switching
    marketing.css     # page-level layout CSS
  next.config.ts      # Next config and workspace package transpilation
  package.json
  tsconfig.json
```

## What This App Tests

This page uses HeeH UI packages as a consuming app would:

- `@heeh-ui/core` for primitives like `Button`, `Card`, `Container`, `Grid`, `Heading`, `Stack`, and `Text`.
- `@heeh-ui/components` for `Section`.
- `@heeh-ui/forms` for `Input`.
- `@heeh-ui/theme` for `UIProvider`, `useTheme`, and active skin injection.
- `@heeh-ui/skins` for `officeSkin`, `cartoonSkin`, and `minimalSkin`.
- `@heeh-ui/tokens/css` and `@heeh-ui/styles/css` for styling foundations.

The page deliberately repeats cards, text, buttons, inputs, and sections across different density levels: hero, dashboard preview, feature cards, pricing cards, and CTA form.

## Contract Gaps Found

The app builds and runs, but it exposes useful gaps in the current v1 contract:

1. `Card` needs richer skin-aware structure.
   Current card styling works for simple boxes, but marketing cards need better control over padding, header/body/footer spacing, density, and emphasis.

2. `Grid` is not skin-aware or responsive by contract.
   The page still needs custom CSS for responsive feature and pricing grids.

3. `Input` only covers the base native input.
   `Textarea`, `Select`, and related form controls do not yet use the skin contract.

4. `Section` needs stronger layout semantics.
   A marketing page needs section width, background treatment, spacing scale, and content alignment to be more systematic.

5. Page CSS is still doing too much visual work.
   `marketing.css` is useful for stress testing, but some repeated decisions should eventually move into components, tokens, or skin functions.

## Current Status

The marketing app is a working proof that skin contract v1 is usable for a simple promotional page.

It is also a practical checklist for contract v2:

- expand card anatomy
- add responsive layout primitives
- bring select/textarea into the input contract
- improve section semantics
- reduce page-specific CSS by moving reusable decisions into the system
