# HeeH UI

HeeH UI is structured as a scalable React UI library for enterprise products, design systems, and data-heavy interfaces.

## Architecture

HeeH UI is a pnpm/Turborepo workspace. The library is split by responsibility so
behavior, styling, design tokens, and product-level composition can evolve
independently.

```txt
apps/
  docs/                 # Storybook or documentation app
  playground/           # Local integration app

packages/
  charts/               # Chart wrappers
  components/           # Business-ready composed components
  core/                 # Low-level primitives
  data-display/         # Table, tree, timeline, list abstractions
  forms/                # Form adapters
  hooks/                # Shared React hooks
  icons/                # Icon exports and icon conventions
  patterns/             # Complex product patterns/templates
  skins/                # Complete visual presets
  styles/               # Global CSS entrypoints
  theme/                # Theme provider and theme runtime
  tokens/               # Design tokens and CSS variables
  utils/                # Shared utilities
```

## UI Architecture Contract

The most important rule in this repo is separation of behavior from visual
identity.

```txt
tokens/styles
  design primitives and global CSS entrypoints

theme
  provider helpers for app-level theme and skin attributes

skins
  typed skin names such as office, minimal, cartoon

core
  headless primitives: behavior, accessibility, focus, keyboard, refs

components
  public components that emit stable classes and consume global CSS

forms / data-display / charts / patterns
  higher-level adapters and product patterns built on the lower layers
```

### Core Components

`packages/core` contains reusable UI behavior. Core components must remain
headless and product-neutral.

Core may contain:

- accessibility behavior
- keyboard and focus management
- controlled/uncontrolled state logic
- stable primitive props
- `forwardRef` and `className` support

Core must not contain:

- business or domain-specific props
- skin-specific imports
- visual preset selection
- large render-time conditional trees
- imports from high-level packages such as `components`, `forms`, or `patterns`

### Skins

`packages/skins` exposes built-in skin names. A skin owns the component
appearance for a visual identity through global CSS variables and selectors.

Current skin folders include:

```txt
packages/skins/src/
  office/
  minimal/
  cartoon/
```

Skins are selected at the app/document boundary with `data-skin`, for example
`<html data-skin="office">`.

### Theme Provider

`packages/theme` owns small app-level helpers for theme and skin attributes.
Core components do not consume skin context.

```tsx
<html data-skin="office">
```

CSS owns the skin switch:

```css
[data-skin="office"] {
  --heeh-button-radius: var(--heeh-radius-md);
}

.heeh-button {
  border-radius: var(--heeh-button-radius);
}
```

### Components

`packages/components` is the public styled layer. Components should compose
core primitives, emit stable classes, and expose variant-based APIs.

Prefer:

```tsx
<Button variant="danger" size="md" />
```

Avoid boolean prop growth:

```tsx
<Button isDanger isLarge isGhost isElevated />
```

When a component grows complex, move reusable behavior down into `core` or a
focused hook, and keep presentation decisions in the skin layer.

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

Dependency rules:

- `core` can use low-level utilities and focused hooks, but not skins or theme context.
- `components` can use `core` and stable CSS classes.
- `skins` exposes app-level skin names; visual rules live in styles/tokens.
- `patterns` can compose public components into larger product flows.
- Apps may import any package needed for demos, docs, and integration testing.

## Component Contract

Large reusable components should support:

- controlled and uncontrolled modes
- accessible keyboard behavior
- token-based styling
- variant APIs instead of boolean prop explosion
- slot or render APIs for customization
- headless logic separated from presentation where complexity grows

Before adding or changing a component, check:

- Does the API use variants instead of many booleans?
- Is behavior separated from skin-specific styling?
- Are props stable enough for repeated use in lists/grids?
- Does the component avoid runtime skin resolution in render?
- Is the component free of business/domain language?
- Are large collections virtualized or prepared for virtualization?

## Performance Contract

Render paths should stay small and predictable.

Required:

- keep state close to where it is used
- prefer lookup maps or variant functions over nested conditionals
- avoid unstable object/function props in large lists
- lazy-load expensive features such as editors, charts, and advanced tables
- use virtualization for large tables, grids, and infinite lists
- avoid importing entire feature packs into core components

Memoization should be intentional. Use `memo`, `useMemo`, and `useCallback`
when the component is frequently repeated, props are stable, and the render cost
is meaningful.

## Private Reference Rules

Private project architecture rules live outside this README and should be
treated as the internal source of truth:

- `../docs/rules/core_component_rule.md`
- `../docs/rules/performance_rule.md`
- `../docs/architecture/skin_architecture.md`

## Recommended Stack

- React 19
- TypeScript
- pnpm workspace
- Turborepo
- Tailwind/CSS variables
- CVA-style variant definitions
- Radix UI or React Aria for complex accessibility primitives
- TanStack for data-heavy engines
