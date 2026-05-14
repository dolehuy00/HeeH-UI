import type { UISkin } from "../types";
import { officeButtonSkin } from "./button.skin";
import {
  officeCardSkin,
  officeHeadingSkin,
  officeInputSkin,
  officeSectionSkin,
  officeSurfaceSkin,
  officeTextSkin
} from "./foundation.skin";

export const officeSkin: UISkin = {
  button: officeButtonSkin,
  card: officeCardSkin,
  surface: officeSurfaceSkin,
  heading: officeHeadingSkin,
  text: officeTextSkin,
  input: officeInputSkin,
  section: officeSectionSkin
};

export { officeButtonSkin };
export {
  officeCardSkin,
  officeHeadingSkin,
  officeInputSkin,
  officeSectionSkin,
  officeSurfaceSkin,
  officeTextSkin
};
