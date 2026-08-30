/**
 * GitHub Pages serves files by extension. Next's file-based OG route emits an
 * extensionless `opengraph-image`, which gets served as application/octet-stream
 * — and Facebook/LinkedIn/X crawlers reject images without an image/* type.
 * Copy each to `opengraph-image.png` so the URLs in our metadata resolve to a
 * file the crawlers will actually accept.
 */
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join } from "node:path";

let copied = 0;
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry === "opengraph-image") {
      copyFileSync(full, `${full}.png`);
      copied++;
    }
  }
}
walk("out");
console.log(`og-png: wrote ${copied} .png copies`);
