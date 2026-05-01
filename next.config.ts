import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/edge-solar-bc",
  assetPrefix: "/edge-solar-bc",
};

export default nextConfig;
