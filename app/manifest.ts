import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Himalaya Cannabis Pvt. Ltd.",
    short_name: "Himalaya Cannabis",
    description:
      "Licensed medical and industrial hemp from the Himalayan and hilly regions of Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#122415",
    theme_color: "#122415",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
