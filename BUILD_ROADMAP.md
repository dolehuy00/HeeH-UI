# HeeH UI Build Roadmap to Date

This document reconstructs the development path of HeeH UI from the commit history of the `HeeH-UI` repository, up to the latest reviewed commit `e5ca23f` on 2026-05-13.

## Development Direction

HeeH UI is being built as a scalable React UI library for enterprise products, design systems, and data-heavy interfaces. The current architecture separates responsibilities into clear layers:

- `tokens` and `styles`: design foundations, CSS variables, and global stylesheet entrypoints.
- `theme`: runtime provider, theme mode handling, and active skin injection.
- `skins`: visual presets such as `office`, `minimal`, and `cartoon`.
- `core`: neutral primitive components, focused on headless behavior, ref forwarding, and stable APIs.
- `components`: public component layer that can compose core primitives and theme runtime.
- `forms`, `data-display`, `charts`, and `patterns`: higher-level packages for forms, tables/lists, charts, and product patterns.
- `apps/docs` and `apps/playground`: documentation, Storybook, and integration testing environments.

The guiding principle is consistent: behavior belongs in `core`, visual identity belongs in `skins`, injection belongs in `theme`, and public components should not import every skin inside the render path.

## Timeline by Commit

### 1. Repository Initialization

Commit: `f3957d0` - `Initial commit`

The first milestone created the basic legal/project foundation with the `LICENSE` file. This was the minimal starting point before introducing the workspace and package structure.

Result:

- The repository gained a license.
- No UI code or monorepo structure existed yet.

### 2. Monorepo and Core Package Structure

Commit: `c0e712a` - `add: project struct`

This was the largest foundation commit. The project was structured as a `pnpm` workspace with Turborepo, plus two internal apps:

- `apps/docs`: documentation and Storybook app.
- `apps/playground`: Vite app for local integration testing.

The main packages were introduced:

- `@heeh-ui/core`
- `@heeh-ui/components`
- `@heeh-ui/forms`
- `@heeh-ui/data-display`
- `@heeh-ui/charts`
- `@heeh-ui/hooks`
- `@heeh-ui/icons`
- `@heeh-ui/patterns`
- `@heeh-ui/styles`
- `@heeh-ui/theme`
- `@heeh-ui/tokens`
- `@heeh-ui/utils`

At this stage, `core` already included the first primitives such as `Box`, `Button`, and `Stack`; `theme` had an initial provider; `tokens` and `styles` had CSS entrypoints; and `docs` included the first button story.

Result:

- The workspace skeleton was established.
- Package boundaries were created so each layer could evolve independently.
- The project gained a foundation for primitives, styles, theme runtime, docs, and playground usage.

### 3. Remote Main Synchronization

Commit: `875f1ca` - `Merge remote-tracking branch 'origin/main'`

This merge commit did not add direct file changes in the name-status log, but it marked synchronization with the remote `origin/main` branch after the project structure was created.

Result:

- Local history was connected back to the remote branch.
- No major architecture change was recorded in this commit.

### 4. Dependency Updates and CSS Type Declarations

Commit: `61c238a` - `update: package to latest version`

After the skeleton was in place, dependencies were updated across the workspace: the root app, Storybook docs, playground, and packages. This commit also added `css.d.ts` files for `styles` and `tokens`, allowing TypeScript to understand CSS imports.

Result:

- Dependencies were moved to newer versions.
- CSS imports became friendlier to TypeScript.
- The toolchain became more stable for later component development.

### 5. First README Update

Commit: `10d4d7a` - `update: readme.md`

The README was updated to better describe the project goal and usage. This was an early documentation step that clarified the package structure, workspace commands, and the role of each layer.

Result:

- HeeH UI gained an introductory project document.
- Basic development conventions and scripts started to be documented.

### 6. Core Primitive Expansion

Commit: `e3bee42` - `add: init core component`

This was a key UI architecture milestone. `packages/core` expanded from a few initial primitives into a broader foundation set:

- `Box`
- `Button`
- `Card`
- `Container`
- `Flex`
- `Grid`
- `Heading`
- `Icon`
- `IconButton`
- `Image`
- `Label`
- `Link`
- `Separator`
- `Stack`
- `Surface`
- `Text`

`packages/core/src/index.ts` was updated to export these primitives. This layer is intended to stay neutral, reusable, non-domain-specific, and independent from skin presets.

Result:

- Core gained enough primitives to compose structured interfaces.
- The headless/core-first direction became clearer.
- The primitives became available for Storybook, public components, and higher-level packages.

### 7. Skin Package Initialization

Commit: `a74196c` - `add: init skin pakage`

This commit created `@heeh-ui/skins` and introduced the first visual presets:

- `office`
- `minimal`
- `cartoon`

Each skin currently includes `button.skin.ts` and `input.skin.ts`, plus its own entrypoint. The package also includes `types.ts`, which re-exports skin contract types.

Result:

- The skin-driven styling strategy became concrete.
- Visual identity moved out of `core`.
- Multiple presets demonstrated that one behavior layer can support different appearances.

### 8. Theme Provider and Active Skin Injection

Commit: `51a6e6a` - `add: init theme provider`

`packages/theme/src/theme-provider.tsx` became an important runtime layer. It currently provides:

- `UIProvider` / `ThemeProvider`
- `useTheme`
- `useSkin`
- `ThemeMode`: `light`, `dark`, `system`
- `UISkin` and `ButtonSkinFn`
- `defaultSkin`

The provider stores theme mode in `localStorage`, sets `data-theme` on the document root, and passes the active skin through React context.

Result:

- Components gained a skin injection mechanism instead of hard-coding a visual preset.
- Components can call `useSkin()` to access the active skin.
- The foundation was set for the rule that only the active skin should execute during render.

### 9. Styles Package Update

Commit: `2aa77a0` - `update: style package`

`@heeh-ui/styles` was updated around its CSS entrypoint and exports. This step gathered shared foundational classes and styles behind an official style package.

Result:

- The style layer became clearer.
- The global CSS entrypoint was standardized.
- Storybook and the playground gained a cleaner styling foundation.

### 10. Patterns Package Update

Commit: `623754a` - `update: pattens package`

`@heeh-ui/patterns` moved its source entry from `.ts` to `.tsx`, indicating that this package was becoming ready for JSX-based product patterns rather than only logic or type exports.

Result:

- `patterns` became ready to hold rendered templates and product patterns.
- The higher-level layer can later compose from `components` and `core`.

### 11. Forms Package Update

Commit: `4761e29` - `update: form package`

`@heeh-ui/forms` added two source groups:

- `controls.tsx`
- `field.tsx`

`index.ts` was updated to export these pieces. This created a separate form adapter layer instead of pushing form-specific concerns into core primitives.

Result:

- Field and form control APIs began to live in their own layer.
- Core avoided taking on complex form concerns.
- The project gained room to integrate form libraries later without bloating core APIs.

### 12. Data Display Package Update

Commit: `1399c65` - `update: data-display package`

`@heeh-ui/data-display` moved its entry to `.tsx` and introduced the current data display components and aliases:

- `Table`
- `DataTable`
- `VirtualTable`
- `List`
- `VirtualList`
- `DescriptionList`
- `KeyValue`
- `Timeline`
- `Tag`, `Badge`, `Chip`
- `Avatar`, `AvatarGroup`
- `Calendar`
- `Statistic`
- `MetricCard`

This step laid the foundation for data-heavy UI. One important note: `VirtualTable` and `VirtualList` are currently aliases, not real virtualization engines yet.

Result:

- A dedicated data-display layer exists for tables, lists, metrics, and data presentation elements.
- The initial API exists, but large collections still need true virtualization.

### 13. Components Package Update

Commit: `7f0eabd` - `update: component package`

`@heeh-ui/components` expanded into grouped public component modules:

- `feedback`
- `interaction`
- `layout`
- `media`
- `navigation`
- `overlay`
- `card`

`index.ts` was updated to export these groups. This step started to shape the public styled/component-ready layer above `core`.

Result:

- The public component API gained a functional grouping structure.
- The responsibilities of core primitives and public components became more distinct.
- The package became the place where core behavior can later be bound to the active skin.

### 14. Storybook and Playground Expansion

Commit: `491b93c` - `update: storybook`

Storybook expanded significantly to document and test more of the system. `preview.ts` became `preview.tsx`, enabling JSX-based provider/style setup. Many new stories were added:

- `box`
- `button`
- `card-core`
- `catalog`
- `container`
- `flex`
- `forms`
- `foundation`
- `grid`
- `heading`
- `icon-button`
- `icon`
- `image`
- `label`
- `link`
- `separator`
- `stack`
- `surface`
- `text`

The playground package and `main.tsx` were also updated for integration testing.

Result:

- The docs app became a stronger observation surface for the system.
- Core primitives and forms gained dedicated stories.
- The playground continued to serve as a runtime integration test environment alongside Storybook.

### 15. README Update for the Current Architecture

Commit: `e5ca23f` - `update: readme`

The current README summarizes the architecture contract of HeeH UI:

- Behavior is separated from visual identity.
- Core remains headless and product-neutral.
- Skins are visual presets.
- The theme provider manages injection.
- Components form the public styled layer.
- Dependency direction and performance expectations are documented.

Result:

- The README became the main orientation document for the repository.
- Dependency rules, component contracts, and performance expectations were made clearer.
- The development history from skeleton to current architecture was reflected in project documentation.

## Current State

As of commit `e5ca23f`, HeeH UI has:

- A `pnpm` + Turborepo monorepo with `build`, `dev`, `lint`, `typecheck`, and `clean` scripts.
- `apps/docs` using Storybook for component documentation.
- `apps/playground` using Vite for integration testing.
- A reasonably broad core primitive set for layout, typography, media, and basic interaction.
- A skin package with three initial presets: `office`, `minimal`, and `cartoon`.
- A theme provider with `useTheme`, `useSkin`, theme mode, and active skin context.
- Styles and tokens layers for CSS variables and global CSS.
- Specialized packages for forms, data display, charts, patterns, hooks, icons, and utils.
- A README that documents the architecture and development contract.

## Recommended Next Steps

The current commits establish the foundation. The next priorities should be:

1. Expand the skin contract beyond `button`.
2. Ensure public components in `packages/components` bind through `useSkin()` instead of directly styling or importing multiple skins.
3. Add controlled/uncontrolled behavior to stateful components.
4. Add accessibility primitives for overlays, navigation, form fields, and interactions.
5. Replace the `VirtualTable` and `VirtualList` aliases with real virtualization when handling large collections.
6. Add tests or story verification for important component APIs.
7. Check dependency direction so `core` does not import upward into `components`, `forms`, `patterns`, or `skins`.
8. Expand documentation by package: core, theme, skins, forms, data-display, and components.

## Conclusion

The roadmap so far shows a sensible build order: create the workspace, define package boundaries, build core primitives, separate skins and theme runtime, then expand the public component layer and documentation. The foundation is in place. The next phase should focus on tightening the contracts between `core`, `theme`, `skins`, and `components`, while increasing confidence through accessibility work, virtualization, and tests.
