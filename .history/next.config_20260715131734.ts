import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/phailin-portfolio",
  assetPrefix: "/phailin-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;