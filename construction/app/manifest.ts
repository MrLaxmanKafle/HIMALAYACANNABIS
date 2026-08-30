import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.oneLiner,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f3",
    theme_color: "#22262e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
