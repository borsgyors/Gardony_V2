import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig: NextConfig = {
  output: "export", // ✅ IMPORTANT

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  allowedDevOrigins: [
    "www.orchids.app",
    "3000-a4c2c2ec-f22b-4c0b-a1ad-49994a533e38.proxy.daytona.works",
  ],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

export default nextConfig;
