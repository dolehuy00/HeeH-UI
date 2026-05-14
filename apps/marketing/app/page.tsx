import { GalleryShell } from "../components-gallery/GalleryShell";
import { ComponentsOverview } from "../components-gallery/OverviewPage";

export default function Page() {
  return (
    <GalleryShell>
      <ComponentsOverview />
    </GalleryShell>
  );
}
