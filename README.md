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

## Getting Started

Install dependencies from the repository root:

```bash
pnpm install
```

On Windows PowerShell, if `pnpm` is blocked by the script execution policy, use `pnpm.cmd` instead:

```bash
pnpm.cmd install
```

## Run Apps

Run the Storybook documentation app:

```bash
pnpm --filter @heeh-ui/docs dev
```

Storybook starts at `http://localhost:6006`. If that port is already in use, Storybook will offer another port.

Run the local playground app:

```bash
pnpm --filter @heeh-ui/playground dev
```

Vite starts at `http://localhost:5173` by default.

Run every dev task in the workspace:

```bash
pnpm dev
```

## Verify

Typecheck all packages:

```bash
pnpm typecheck
```

Build all packages and apps:

```bash
pnpm build
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

- React 19
- TypeScript
- pnpm workspace
- Turborepo
- Tailwind/CSS variables
- CVA-style variant definitions
- Radix UI or React Aria for complex accessibility primitives
- TanStack for data-heavy engines
