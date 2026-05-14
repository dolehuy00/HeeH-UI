import type { UISkin } from "../types";
import { minimalButtonSkin } from "./button.skin";
import {
  minimalCardSkin,
  minimalHeadingSkin,
  minimalInputSkin,
  minimalSectionSkin,
  minimalSurfaceSkin,
  minimalTextSkin
} from "./foundation.skin";

export const minimalSkin: UISkin = {
  button: minimalButtonSkin,
  card: minimalCardSkin,
  surface: minimalSurfaceSkin,
  heading: minimalHeadingSkin,
  text: minimalTextSkin,
  input: minimalInputSkin,
  section: minimalSectionSkin
};

export { minimalButtonSkin };
export {
  minimalCardSkin,
  minimalHeadingSkin,
  minimalInputSkin,
  minimalSectionSkin,
  minimalSurfaceSkin,
  minimalTextSkin
};
