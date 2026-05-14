# HeeH UI Skin Contract

This package contains visual presets for HeeH UI. Skins are presentation-only objects that satisfy the `UISkin` contract from `@heeh-ui/theme`.

Core components must not import this package. Apps, docs, and composition layers choose a skin and pass it into `UIProvider`.

## Contract v1

The current v1 contract covers the minimum surface needed to build a simple marketing app:

```ts
export type UISkin = {
  button: ButtonSkinFn;
  card: CardSkinFn;
  surface: SurfaceSkinFn;
  heading: HeadingSkinFn;
  text: TextSkinFn;
  input: InputSkinFn;
  section: SectionSkinFn;
};
```

Each function receives variant-style props and returns a class string. Skin functions should be cheap, deterministic, and should not allocate or compute styles for inactive skins during render.

## Import Paths

Prefer scoped skin imports when an app only needs one preset:

```ts
import { officeSkin } from "@heeh-ui/skins/office";
```

Use the root barrel only for tooling or demos that intentionally need all skins:

```ts
import { officeSkin, cartoonSkin, minimalSkin } from "@heeh-ui/skins";
```

The current apps use subpath imports for explicit bundle boundaries:

- `@heeh-ui/skins/office`
- `@heeh-ui/skins/cartoon`
- `@heeh-ui/skins/minimal`

## Usage

```tsx
import { Button } from "@heeh-ui/core";
import { officeSkin } from "@heeh-ui/skins/office";
import { UIProvider } from "@heeh-ui/theme";

export function App() {
  return (
    <UIProvider skin={officeSkin}>
      <Button variant="primary">Start</Button>
    </UIProvider>
  );
}
```

## Skin Examples

### Office

Office is the default enterprise-style preset. It favors restrained radius, subtle shadows, and token-driven semantic colors.

```ts
import { officeSkin } from "@heeh-ui/skins/office";
```

### Cartoon

Cartoon emphasizes heavier borders, larger radius, and strong offset shadows. It is useful for stress-testing whether the contract supports a visibly different visual language.

```ts
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
```

### Minimal

Minimal removes most decoration and pushes toward flat surfaces, sharp edges, and low visual weight.

```ts
import { minimalSkin } from "@heeh-ui/skins/minimal";
```

## Rules

- Do not import skins from `@heeh-ui/core`.
- Do not import all skins in reusable components.
- Do not switch skin presets inside component render paths.
- Do not add domain-specific props to skin functions.
- Prefer variants and tones over boolean prop growth.
- Keep visual decisions in skin/style layers and behavior in core.

## Known Gaps

The marketing app shows that contract v1 works, but v2 should likely add:

- card anatomy and density
- responsive layout contract for grids/sections
- textarea/select skin coverage
- section alignment and width semantics
- stronger token ownership for marketing-specific backgrounds
