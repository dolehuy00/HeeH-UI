import "@heeh-ui/tokens/css";
import "@heeh-ui/styles/css";
import type { Preview } from "@storybook/react-vite";
import { cartoonSkin, minimalSkin, officeSkin } from "@heeh-ui/skins";
import { UIProvider, type UISkin } from "@heeh-ui/theme";

const skins: Record<string, UISkin> = {
  office: officeSkin,
  cartoon: cartoonSkin,
  minimal: minimalSkin
};

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
      <UIProvider skin={skins[String(context.globals.skin)] ?? officeSkin}>
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
