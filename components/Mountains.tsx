/**
 * Layered Himalayan ridge scene. Pure SVG — no network, no JS.
 * Ridges recede into atmospheric haze toward the horizon.
 */
export default function Mountains({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mtn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.19 0.032 152)" />
          <stop offset="55%" stopColor="oklch(0.26 0.045 140)" />
          <stop offset="100%" stopColor="oklch(0.42 0.07 120)" />
        </linearGradient>
        <linearGradient id="mtn-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.52 0.06 130)" />
          <stop offset="100%" stopColor="oklch(0.4 0.06 135)" />
        </linearGradient>
        <linearGradient id="mtn-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.34 0.055 142)" />
          <stop offset="100%" stopColor="oklch(0.27 0.045 148)" />
        </linearGradient>
        <linearGradient id="mtn-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.24 0.04 150)" />
          <stop offset="100%" stopColor="oklch(0.19 0.032 152)" />
        </linearGradient>
      </defs>

      <rect width="1440" height="560" fill="url(#mtn-sky)" />

      {/* High snow peaks, catching light */}
      <path
        d="M0 330 L110 250 L190 300 L320 170 L410 260 L520 120 L590 210 L700 90 L810 220 L900 150 L1030 270 L1140 180 L1250 280 L1340 230 L1440 300 L1440 560 L0 560 Z"
        fill="url(#mtn-far)"
      />
      <path
        d="M520 120 L560 175 L535 160 L505 190 L480 165 L455 180 Z M700 90 L745 155 L715 138 L688 168 L662 140 Z M900 150 L935 200 L912 185 L888 210 L868 188 Z"
        fill="oklch(0.85 0.02 120)"
        opacity="0.8"
      />

      {/* Haze band */}
      <rect y="270" width="1440" height="140" fill="oklch(0.55 0.05 125)" opacity="0.16" />

      {/* Mid ridge */}
      <path
        d="M0 420 L140 340 L260 400 L400 310 L540 395 L660 330 L820 410 L960 340 L1100 415 L1240 355 L1360 405 L1440 380 L1440 560 L0 560 Z"
        fill="url(#mtn-mid)"
      />

      {/* Near ridge — terraced foothills */}
      <path
        d="M0 500 L120 450 L280 495 L430 440 L620 500 L790 455 L980 505 L1160 460 L1320 500 L1440 470 L1440 560 L0 560 Z"
        fill="url(#mtn-near)"
      />
    </svg>
  );
}
