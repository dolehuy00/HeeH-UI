# HeeH UI

HeeH UI is structured as a scalable React UI library for enterprise products, design systems, and data-heavy interfaces.

## Architecture

```txt
apps/
  docs/                 # Storybook or documentation app
  playground/           # Local integration app

packages/
  tokens/               # Design tokens and CSS variables
  styles/               # Global CSS entrypoints
  utils/                # Shared utilities
  hooks/                # Shared React hooks
  icons/                # Icon exports and icon conventions
  theme/                # Theme provider and theme runtime
  core/                 # Low-level primitives
  components/           # Business-ready composed components
  forms/                # Form adapters
  data-display/         # Table, tree, timeline, list abstractions
  patterns/             # Complex product patterns/templates
  charts/               # Chart wrappers
```

## Dependency Direction

Packages should depend downward only:

```txt
patterns
components / data-display / forms / charts
core
theme
hooks / utils / icons
tokens / styles
```

Avoid importing business-ready components into `core`, `theme`, `tokens`, `hooks`, or `utils`.

## Component Contract

Large reusable components should support:

- controlled and uncontrolled modes
- accessible keyboard behavior
- token-based styling
- variant APIs instead of boolean prop explosion
- slot or render APIs for customization
- headless logic separated from presentation where complexity grows

## Recommended Stack

- React 18
- TypeScript
- pnpm workspace
- Turborepo
- Tailwind/CSS variables
- CVA-style variant definitions
- Radix UI or React Aria for complex accessibility primitives
- TanStack for data-heavy engines
