import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be served from GitHub Pages / any CDN.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Set BASE_PATH=/HIMALAYACANNABIS when serving from the *.github.io project
  // URL; leave unset once the site is served from himalayacannabis.com.
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
