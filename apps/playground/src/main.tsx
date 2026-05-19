import * as React from "react";
import { createRoot } from "react-dom/client";
import "@heeh-ui/tokens/css";
import "@heeh-ui/styles/css";
import "./playground.css";
import { Button, Heading, Stack, Text } from "@heeh-ui/core";
import { Card } from "@heeh-ui/components";
import type { SkinName } from "@heeh-ui/theme";
import { UIProvider, useTheme } from "@heeh-ui/theme/client";

const skins: SkinName[] = ["office", "cartoon", "minimal"];

function App() {
  const [skinName, setSkinName] = React.useState<SkinName>("office");

  return (
    <UIProvider skin={skinName}>
      <Playground skinName={skinName} setSkinName={setSkinName} />
    </UIProvider>
  );
}

function Playground({
  skinName,
  setSkinName
}: {
  skinName: SkinName;
  setSkinName: React.Dispatch<React.SetStateAction<SkinName>>;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <main className="playground-shell">
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading as="h1" size="lg">HeeH UI Playground</Heading>
          <Text tone="muted">
            Integration surface for tokens, theme, skins, primitives, and composed components.
          </Text>
        </Stack>

        <Card title="Skin system" description={`Current skin: ${skinName}`}>
          <Stack direction="row" gap="sm">
            {skins.map((name) => (
              <Button
                key={name}
                variant={skinName === name ? "primary" : "outline"}
                onClick={() => setSkinName(name)}
              >
                {name}
              </Button>
            ))}
          </Stack>
        </Card>

        <Card title="Theme system" description={`Current theme: ${theme}`}>
          <Stack direction="row" gap="sm">
            <Button onClick={() => setTheme("light")}>Light</Button>
            <Button variant="outline" onClick={() => setTheme("dark")}>
              Dark
            </Button>
            <Button variant="ghost" onClick={() => setTheme("system")}>
              System
            </Button>
          </Stack>
        </Card>
      </Stack>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
