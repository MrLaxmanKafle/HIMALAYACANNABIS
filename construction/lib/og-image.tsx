import { ImageResponse } from "next/og";
import { company } from "@/lib/company";

/**
 * Rendered at 2x the nominal 1200x630 so the card stays sharp on high-DPI
 * displays and after LinkedIn/X re-compress it. Geometry is written in nominal
 * units and multiplied by S.
 *
 * The artwork is a section through a road cut: ground line, cut face, drainage
 * and a deck above. It is the subject matter of the site drawn the way the site
 * talks about it, which beats a stock photograph of a crane.
 */
const S = 2;
export const ogImageSize = { width: 1200 * S, height: 630 * S };
export const ogContentType = "image/png";

const GRAPHITE = "#22262e";
const GRAPHITE_2 = "#2c313a";
const LINE = "#454d59";
const PAPER = "#f4f2ee";
const PAPER_2 = "#b9bec7";
const AMBER = "#e0912f";

export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: GRAPHITE,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width={1200 * S}
          height={630 * S}
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* survey grid */}
          <g stroke={LINE} strokeWidth="0.6" opacity="0.5">
            {Array.from({ length: 25 }, (_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="630" />
            ))}
            {Array.from({ length: 13 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} />
            ))}
          </g>
          {/* hillside section with a road cut benched into it */}
          <path
            d="M0 630 L0 500 L220 470 L430 400 L560 396 L560 356 L700 330 L900 250 L1050 232 L1200 190 L1200 630 Z"
            fill={GRAPHITE_2}
          />
          <path
            d="M0 500 L220 470 L430 400 L560 396 L560 356 L700 330 L900 250 L1050 232 L1200 190"
            fill="none"
            stroke={LINE}
            strokeWidth="2"
          />
          {/* carriageway */}
          <path d="M430 400 L560 396" stroke={AMBER} strokeWidth="5" />
          {/* deck of a structure crossing the cut */}
          <path d="M700 330 L1050 232" stroke={PAPER_2} strokeWidth="3" opacity="0.55" />
          <path d="M790 353 L790 420 M900 322 L900 400 M1000 294 L1000 380" stroke={PAPER_2} strokeWidth="2" opacity="0.4" />
        </svg>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${46 * S}px ${56 * S}px 0`,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 * S }}>
            <svg width={38 * S} height={38 * S} viewBox="0 0 40 40">
              <rect width="40" height="40" rx="3" fill={PAPER} opacity="0.1" />
              <path d="M5 17h30" stroke={PAPER} strokeWidth="2.5" />
              <path d="M13 17v16M27 17v16" stroke={PAPER} strokeWidth="2.5" />
              <path d="M4 33h32" stroke={PAPER} strokeWidth="1.5" opacity="0.5" />
              <path d="M13 17 20 8l7 9" stroke={PAPER} strokeWidth="2" fill="none" />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 23 * S,
                fontWeight: 700,
                color: PAPER,
                letterSpacing: -0.4 * S,
              }}
            >
              {company.shortName.toUpperCase()}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 19 * S, color: PAPER_2 }}>
            {company.domain}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: `0 ${56 * S}px`,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20 * S,
              fontWeight: 700,
              color: AMBER,
              textTransform: "uppercase",
              letterSpacing: 3 * S,
              marginBottom: 18 * S,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: (title.length > 46 ? 52 : 62) * S,
              fontWeight: 750,
              color: PAPER,
              lineHeight: 1.08,
              letterSpacing: -1.5 * S,
              maxWidth: 1010 * S,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                display: "flex",
                fontSize: 23 * S,
                color: PAPER_2,
                marginTop: 24 * S,
                maxWidth: 880 * S,
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
