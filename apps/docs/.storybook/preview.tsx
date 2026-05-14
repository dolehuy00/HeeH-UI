import "@heeh-ui/tokens/css";
import "@heeh-ui/styles/css";
import "./docs.css";
import type { Preview } from "@storybook/react-vite";
import { UIProvider, type SkinName } from "@heeh-ui/theme";

const skins: SkinName[] = ["office", "cartoon", "minimal"];

function resolveSkin(value: unknown): SkinName {
  return skins.includes(value as SkinName) ? (value as SkinName) : "office";
}

const preview: Preview = {
  globalTypes: {
    skin: {
      description: "UI skin",
      defaultValue: "office",
      toolbar: {
        title: "Skin",
        icon: "paintbrush",
        items: ["office", "cartoon", "minimal"],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => (
      <UIProvider skin={resolveSkin(context.globals.skin)}>
        <Story />
      </UIProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
