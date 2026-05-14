import { GalleryShell } from "../../components-gallery/GalleryShell";
import type { ReactNode } from "react";

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return <GalleryShell>{children}</GalleryShell>;
}
