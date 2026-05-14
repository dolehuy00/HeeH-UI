"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Container,
  Heading,
  SegmentedControl,
  SegmentedControlItem,
  Text
} from "@heeh-ui/core";
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
import { minimalSkin } from "@heeh-ui/skins/minimal";
import { officeSkin } from "@heeh-ui/skins/office";
import { UIProvider, useTheme, type ThemeMode, type UISkin } from "@heeh-ui/theme";

const skins: Record<string, UISkin> = {
  office: officeSkin,
  cartoon: cartoonSkin,
  minimal: minimalSkin
};

const skinNames = Object.keys(skins);
const themeModes: ThemeMode[] = ["light", "dark", "system"];
const densityModes = ["comfortable", "compact"] as const;

const navItems = [
  { href: "/components", label: "Overview" },
  { href: "/components/button", label: "Button" },
  { href: "/components/text-heading", label: "Text / Heading" },
  { href: "/components/card", label: "Card / Surface" },
  { href: "/components/input", label: "Input" },
  { href: "/components/modal", label: "Modal" },
  { href: "/components/table", label: "Table" },
  { href: "/components/form-layout", label: "Form layout" }
];

type DensityMode = (typeof densityModes)[number];

export function GalleryShell({ children }: { children: React.ReactNode }) {
  const [skinName, setSkinName] = React.useState("office");
  const [density, setDensity] = React.useState<DensityMode>("comfortable");
  const activeSkin = skins[skinName] ?? officeSkin;

  return (
    <UIProvider skin={activeSkin} storageKey="heeh-ui-gallery-theme">
      <GalleryChrome
        density={density}
        onDensityChange={setDensity}
        onSkinChange={setSkinName}
        skinName={skinName}
      >
        {children}
      </GalleryChrome>
    </UIProvider>
  );
}

function GalleryChrome({
  children,
  density,
  onDensityChange,
  onSkinChange,
  skinName
}: {
  children: React.ReactNode;
  density: DensityMode;
  onDensityChange: (density: DensityMode) => void;
  onSkinChange: (skinName: string) => void;
  skinName: string;
}) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <main className={`gallery-shell gallery-shell--${density}`}>
      <header className="gallery-header">
        <Container size="xl" className="gallery-header__inner">
          <Link className="gallery-brand" href="/components" aria-label="HeeH UI components">
            <span className="gallery-brand__mark" aria-hidden="true" />
            <span>
              <Text as="span" size="sm" tone="muted">
                HeeH UI
              </Text>
              <Heading as="h1" size="sm">
                Core Components
              </Heading>
            </span>
          </Link>
          <div className="gallery-controls" aria-label="Gallery controls">
            <SegmentedControl label="Theme" aria-label="Theme mode">
              {themeModes.map((mode) => (
                <SegmentedControlItem
                  key={mode}
                  selected={theme === mode}
                  onClick={() => setTheme(mode)}
                >
                  {mode}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>
            <SegmentedControl label="Skin" aria-label="Skin mode">
              {skinNames.map((name) => (
                <SegmentedControlItem
                  key={name}
                  selected={skinName === name}
                  onClick={() => onSkinChange(name)}
                >
                  {name}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>
            <SegmentedControl label="Density" aria-label="Density mode">
              {densityModes.map((mode) => (
                <SegmentedControlItem
                  key={mode}
                  selected={density === mode}
                  onClick={() => onDensityChange(mode)}
                >
                  {mode}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>
          </div>
        </Container>
      </header>
      <div className="gallery-body">
        <aside className="gallery-sidebar" aria-label="Component navigation">
          <nav className="gallery-nav">
            {navItems.map((item) => {
              const isRootOverview = pathname === "/" && item.href === "/components";
              const isActive = pathname === item.href || isRootOverview;

              return (
                <Link
                  key={item.href}
                  className={isActive ? "gallery-nav__item gallery-nav__item--active" : "gallery-nav__item"}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <Container size="xl" className="gallery-main">
          {children}
        </Container>
      </div>
    </main>
  );
}
