import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: [
    "@heeh-ui/components",
    "@heeh-ui/core",
    "@heeh-ui/forms",
    "@heeh-ui/skins",
    "@heeh-ui/styles",
    "@heeh-ui/theme",
    "@heeh-ui/tokens",
    "@heeh-ui/utils"
  ]
};

export default nextConfig;
