import "@heeh-ui/tokens/css";
import "@heeh-ui/styles/css";
import "./docs.css";
import type { Preview } from "@storybook/react-vite";
import { cartoonSkin } from "@heeh-ui/skins/cartoon";
import { minimalSkin } from "@heeh-ui/skins/minimal";
import { officeSkin } from "@heeh-ui/skins/office";
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
