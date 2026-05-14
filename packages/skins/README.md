# HeeH UI Skins

This package exposes the built-in skin names for HeeH UI.

Skins are app-level visual presets, not runtime class resolver objects. Components render stable classes such as `heeh-button`, `heeh-button--primary`, and `heeh-card--elevated`. The active skin is selected globally with:

```html
<html data-skin="office">
```

The shared stylesheet then applies skin-specific CSS variables and selectors:

```css
[data-skin="cartoon"] {
  --heeh-button-radius: var(--heeh-radius-2xl);
}

.heeh-button {
  border-radius: var(--heeh-button-radius);
}
```

## Exports

```ts
import { officeSkin } from "@heeh-ui/skins/office";
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
import { minimalSkin } from "@heeh-ui/skins/minimal";
```

Each export is a typed skin name:

```ts
officeSkin; // "office"
cartoonSkin; // "cartoon"
minimalSkin; // "minimal"
```

## Usage

```tsx
import { Button } from "@heeh-ui/core";
import { UIProvider } from "@heeh-ui/theme";

export function App() {
  return (
    <UIProvider skin="office">
      <Button variant="primary">Start</Button>
    </UIProvider>
  );
}
```

For SSR-first apps, set the initial skin on the server-rendered document:

```tsx
<html data-skin="office">
```

`UIProvider` is only needed when an app wants a client-side skin switcher.

## Rules

- Core components must not import skins or read skin context.
- Skins are selected at the app/document boundary with `data-skin`.
- Component variants stay stable across skins.
- Visual identity belongs in CSS variables and global skin selectors.
- Keep behavior in components and visual decisions in styles.
