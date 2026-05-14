import type { UISkin } from "../types";
import { cartoonButtonSkin } from "./button.skin";
import {
  cartoonCardSkin,
  cartoonHeadingSkin,
  cartoonInputSkin,
  cartoonSectionSkin,
  cartoonSurfaceSkin,
  cartoonTextSkin
} from "./foundation.skin";

export const cartoonSkin: UISkin = {
  button: cartoonButtonSkin,
  card: cartoonCardSkin,
  surface: cartoonSurfaceSkin,
  heading: cartoonHeadingSkin,
  text: cartoonTextSkin,
  input: cartoonInputSkin,
  section: cartoonSectionSkin
};

export { cartoonButtonSkin };
export {
  cartoonCardSkin,
  cartoonHeadingSkin,
  cartoonInputSkin,
  cartoonSectionSkin,
  cartoonSurfaceSkin,
  cartoonTextSkin
};
