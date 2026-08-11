import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const GROUND = "#0d1912";
const RIDGE_FAR = "#2a4632";
const RIDGE_MID = "#345d3a";
const RIDGE_NEAR = "#2e7d32";
const PEAK = "#b9d9ba";
const INK = "#f2ede0";
const INK_2 = "#c7d0c2";
const MARIGOLD = "#e0a83e";

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
          background: GROUND,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Mountain silhouette layers */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M0 420 L120 300 L210 360 L340 220 L430 320 L560 180 L650 280 L780 150 L900 300 L1050 230 L1200 340 L1200 630 L0 630 Z"
            fill={RIDGE_FAR}
          />
          <path
            d="M560 180 L600 240 L575 222 L548 255 L522 228 Z M780 150 L825 220 L797 200 L768 235 L742 205 Z"
            fill={PEAK}
            opacity={0.85}
          />
          <path
            d="M0 520 L160 400 L280 460 L420 340 L540 440 L680 320 L820 450 L960 370 L1100 470 L1200 410 L1200 630 L0 630 Z"
            fill={RIDGE_MID}
          />
          <path
            d="M-20 630 L100 500 L240 570 L400 460 L560 560 L720 470 L880 580 L1040 490 L1220 590 L1220 630 Z"
            fill={RIDGE_NEAR}
          />
        </svg>

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "48px 56px 0",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: RIDGE_NEAR,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#fff",
                fontWeight: 700,
              }}
            >
              H
            </div>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: INK, letterSpacing: -0.5 }}>
              HIMALAYA CANNABIS
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 20, color: INK_2 }}>himalayacannabis.com</div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 56px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: MARIGOLD,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 42 ? 54 : 64,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: INK_2,
                marginTop: 24,
                maxWidth: 880,
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
