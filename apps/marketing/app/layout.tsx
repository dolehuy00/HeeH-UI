import type { Metadata } from "next";
import "@heeh-ui/tokens/css";
import "@heeh-ui/styles/css";
import "./marketing.css";

export const metadata: Metadata = {
  title: "HeeH UI Component Gallery",
  description: "A skin-driven component gallery for testing the HeeH UI contract."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
