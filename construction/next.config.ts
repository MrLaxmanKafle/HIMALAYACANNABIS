import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is a set of HTML files, servable from any CDN.
  // Nothing here needs a server, and a contractor site that survives a traffic
  // spike from a tender award is worth more than one that renders on request.
  output: "export",
  images: { unoptimized: true },
  // Every canonical URL ends in a slash. See lib/href.ts for why this matters
  // enough to be enforced at the href level rather than left to redirects.
  trailingSlash: true,
  // Set BASE_PATH=/HIMALAYACANNABIS-construction when serving from a project
  // URL; leave unset once the site is served from its own apex domain.
  basePath: process.env.BASE_PATH || "",
  // This project sits inside the himalayacannabis repo, which has its own
  // lockfile. Pin the workspace root so Turbopack does not infer the parent.
  turbopack: { root: __dirname },
};

export default nextConfig;
