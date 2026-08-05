/**
 * Custom illustration set for the Hemp Wellness Valley concept.
 * Flat-illustration SVG in the site's existing palette — no stock photography,
 * since the facility does not exist yet and photos would misrepresent it.
 */

const C = {
  sky: "oklch(0.19 0.032 152)",
  skyMid: "oklch(0.28 0.045 142)",
  skyLight: "oklch(0.42 0.07 120)",
  card: "oklch(0.23 0.036 150)",
  ridgeFar: "oklch(0.5 0.06 132)",
  ridgeMid: "oklch(0.34 0.055 142)",
  ridgeNear: "oklch(0.24 0.04 150)",
  terrace: "oklch(0.3 0.05 140)",
  terraceLine: "oklch(0.4 0.06 138)",
  leaf: "oklch(0.74 0.14 145)",
  leafDeep: "oklch(0.55 0.12 148)",
  marigold: "oklch(0.8 0.14 78)",
  ink: "oklch(0.95 0.018 120)",
  ink2: "oklch(0.8 0.045 140)",
  ink3: "oklch(0.68 0.05 142)",
  snow: "oklch(0.88 0.02 120)",
};

export function ValleyHero({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.sky} />
          <stop offset="55%" stopColor={C.skyMid} />
          <stop offset="100%" stopColor={C.skyLight} />
        </linearGradient>
        <linearGradient id="vh-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.ridgeFar} />
          <stop offset="100%" stopColor={C.ridgeMid} />
        </linearGradient>
      </defs>
      <rect width="1440" height="640" fill="url(#vh-sky)" />
      {/* distant peaks */}
      <path d="M0 320 L150 220 L260 280 L420 150 L540 250 L680 110 L820 260 L980 170 L1120 290 L1300 200 L1440 280 L1440 640 L0 640 Z" fill="url(#vh-far)" opacity="0.6" />
      <path d="M420 150 L455 210 L432 193 L402 222 L378 195 Z M680 110 L720 190 L688 168 L655 205 L625 172 Z" fill={C.snow} opacity="0.75" />
      {/* mid ridge */}
      <path d="M0 400 L180 340 L320 390 L500 320 L640 400 L820 335 L980 405 L1160 345 L1320 400 L1440 375 L1440 640 L0 640 Z" fill={C.ridgeMid} opacity="0.85" />
      {/* terraced foothill with hemp rows */}
      <path d="M0 470 L200 430 L420 465 L640 420 L860 468 L1080 425 L1300 465 L1440 440 L1440 640 L0 640 Z" fill={C.ridgeNear} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${-40 + i * 20} ${520 + i * 20} Q 720 ${495 + i * 20} ${1480 - i * 20} ${520 + i * 20}`}
          stroke={C.terraceLine}
          strokeWidth="2.5"
          fill="none"
          opacity={0.55 - i * 0.06}
        />
      ))}
      {/* two simple eco-lodges on the terrace */}
      <g transform="translate(300,500)">
        <path d="M-38 40 L-38 0 L0 -34 L38 0 L38 40 Z" fill={C.card} />
        <rect x="-8" y="14" width="16" height="26" fill={C.sky} />
        <circle cx="55" cy="20" r="7" fill={C.marigold} opacity="0.7" />
      </g>
      <g transform="translate(980,485)">
        <path d="M-30 32 L-30 0 L0 -28 L30 0 L30 32 Z" fill={C.card} />
        <rect x="-6" y="10" width="12" height="22" fill={C.sky} />
      </g>
      {/* winding path connecting the valley */}
      <path d="M120 560 Q 400 500 700 540 T 1320 500" stroke={C.marigold} strokeWidth="3" strokeDasharray="2 14" fill="none" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true">
      <rect width="420" height="320" rx="16" fill="oklch(0.23 0.036 150)" />
      {children}
    </svg>
  );
}

export function SpaArt({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Badge>
        <circle cx="210" cy="165" r="105" fill={C.leafDeep} opacity="0.18" />
        <path d="M140 210 Q210 260 280 210 L268 195 Q210 232 152 195 Z" fill={C.card} stroke={C.terraceLine} strokeWidth="2" />
        <path d="M148 205 Q210 240 272 205 L272 195 Q210 228 148 195 Z" fill="oklch(0.3 0.05 140)" />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${188 + i * 17} 190 C ${180 + i * 17} 160, ${200 + i * 17} 150, ${190 + i * 17} 120}`}
            stroke={C.ink3}
            strokeWidth="3"
            fill="none"
            opacity="0.55"
            strokeLinecap="round"
          />
        ))}
        <path d="M295 150 C 275 150 262 165 262 182 C 262 198 275 210 295 210 C 285 195 285 165 295 150 Z" fill={C.leaf} />
        <ellipse cx="150" cy="245" rx="16" ry="7" fill={C.ridgeNear} />
        <ellipse cx="170" cy="252" rx="11" ry="5" fill={C.ridgeNear} />
        <ellipse cx="185" cy="256" rx="7" ry="3.5" fill={C.ridgeNear} />
      </Badge>
    </div>
  );
}

export function RestaurantArt({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Badge>
        <circle cx="210" cy="170" r="92" fill="oklch(0.3 0.05 140)" />
        <circle cx="210" cy="170" r="72" fill="oklch(0.34 0.055 142)" />
        <circle cx="210" cy="170" r="52" fill="oklch(0.26 0.045 148)" />
        <path d="M210 148 C 198 148 190 158 192 170 C 194 180 202 186 210 186 C 204 174 204 158 210 148 Z" fill={C.leaf} />
        {[
          [180, 165], [225, 155], [195, 190], [230, 185], [175, 185], [215, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" fill={C.marigold} opacity="0.85" />
        ))}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${190 + i * 14} 95 C ${185 + i * 14} 78, ${198 + i * 14} 70, ${192 + i * 14} 55}`}
            stroke={C.ink3}
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
        ))}
        <rect x="112" y="150" width="7" height="65" rx="3" fill={C.ink3} opacity="0.6" />
        <rect x="300" y="150" width="7" height="65" rx="3" fill={C.ink3} opacity="0.6" />
      </Badge>
    </div>
  );
}

export function TourArt({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Badge>
        <path d="M95 190 L325 190" stroke={C.terraceLine} strokeWidth="2" strokeDasharray="6 8" opacity="0.7" />
        {/* field */}
        <rect x="70" y="150" width="90" height="80" rx="10" fill="oklch(0.3 0.05 140)" />
        {[0, 1, 2].map((r) => (
          <g key={r}>
            {[0, 1, 2, 3].map((c) => (
              <path key={c} d={`M${88 + c * 18} ${210 - r * 18} L${88 + c * 18} ${196 - r * 18}`} stroke={C.leaf} strokeWidth="4" strokeLinecap="round" />
            ))}
          </g>
        ))}
        {/* flask */}
        <g transform="translate(210,150)">
          <path d="M-10 0 L-10 -30 L10 -30 L10 0 L26 34 C 26 46 -26 46 -26 34 Z" fill="none" stroke={C.ink2} strokeWidth="3" />
          <path d="M-19 20 C -14 12 14 12 19 20 L 26 34 C 26 46 -26 46 -26 34 Z" fill={C.leaf} opacity="0.8" />
        </g>
        {/* product jar */}
        <g transform="translate(335,168)">
          <rect x="-18" y="-8" width="36" height="46" rx="6" fill="none" stroke={C.ink2} strokeWidth="3" />
          <rect x="-12" y="-18" width="24" height="12" rx="3" fill={C.marigold} />
          <rect x="-14" y="6" width="28" height="16" fill={C.leafDeep} opacity="0.7" />
        </g>
        <circle cx="115" cy="190" r="5" fill={C.marigold} />
        <circle cx="335" cy="190" r="5" fill={C.marigold} />
      </Badge>
    </div>
  );
}

export function LodgeArt({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Badge>
        <path d="M40 210 L120 140 L200 210 Z" fill={C.ridgeMid} opacity="0.55" />
        <path d="M170 220 L260 130 L350 220 Z" fill={C.ridgeFar} opacity="0.5" />
        {[[70, 140], [270, 120], [330, 150], [110, 118]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" fill={C.snow} opacity="0.8" />
        ))}
        <path d="M148 250 L148 190 L210 145 L272 190 L272 250 Z" fill={C.card} stroke={C.terraceLine} strokeWidth="2" />
        <path d="M148 190 L210 145 L272 190" fill="none" stroke={C.ink3} strokeWidth="2" opacity="0.6" />
        <rect x="192" y="205" width="36" height="45" fill="oklch(0.19 0.032 152)" />
        <rect x="200" y="212" width="8" height="12" fill={C.marigold} opacity="0.85" />
        <circle cx="205" cy="270" r="14" fill="oklch(0.3 0.05 140)" />
        <path d="M205 270 C 200 258 210 254 205 244 C 214 250 216 262 205 270 Z" fill={C.marigold} />
      </Badge>
    </div>
  );
}

export function TrainingArt({ className = "" }: { className?: string }) {
  const people: [number, number, string][] = [
    [138, 222, "oklch(0.68 0.05 142)"],
    [282, 222, "oklch(0.68 0.05 142)"],
    [210, 232, "oklch(0.8 0.14 78)"],
  ];
  return (
    <div className={className}>
      <Badge>
        <ellipse cx="210" cy="252" rx="130" ry="16" fill="oklch(0.19 0.032 152)" opacity="0.45" />
        {/* central sapling */}
        <rect x="203" y="150" width="14" height="62" rx="6" fill={C.leafDeep} />
        {[
          "M210 152 C 186 152 174 134 180 112",
          "M210 152 C 234 152 246 134 240 112",
          "M210 137 C 192 137 183 122 189 104",
          "M210 137 C 228 137 237 122 231 104",
        ].map((d, i) => (
          <path key={i} d={d} stroke={C.leaf} strokeWidth="9" fill="none" strokeLinecap="round" />
        ))}
        {/* people gathered around, facing the sapling */}
        {people.map(([x, y, headColor], i) => (
          <g key={i}>
            <path
              d={`M${x - 22} ${y + 26} L${x - 16} ${y - 6} Q${x} ${y - 18} ${x + 16} ${y - 6} L${x + 22} ${y + 26} Z`}
              fill="oklch(0.3 0.05 140)"
              stroke="oklch(0.4 0.06 138)"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y - 30} r="16" fill={headColor} />
          </g>
        ))}
        {/* small clipboard for the marigold figure */}
        <rect x="196" y="216" width="16" height="20" rx="2" fill={C.ink} opacity="0.85" />
        <rect x="199" y="220" width="10" height="2.4" fill={C.leafDeep} />
        <rect x="199" y="225" width="10" height="2.4" fill={C.leafDeep} />
      </Badge>
    </div>
  );
}

export function HeritageArt({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Badge>
        {/* pagoda roofline */}
        <path d="M210 55 L268 96 L152 96 Z" fill={C.card} />
        <path d="M210 82 L285 128 L135 128 Z" fill="oklch(0.3 0.05 140)" />
        <rect x="204" y="42" width="12" height="18" fill={C.marigold} opacity="0.9" />
        <circle cx="210" cy="40" r="4" fill={C.marigold} />
        {/* woven cloth grid */}
        <rect x="120" y="140" width="180" height="110" rx="6" fill="oklch(0.19 0.032 152)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={"v" + i} x1={140 + i * 28} y1="150" x2={140 + i * 28} y2="240" stroke={C.ink3} strokeWidth="2" opacity="0.55" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={"h" + i} x1="130" y1={158 + i * 20} x2="290" y2={158 + i * 20} stroke={C.leaf} strokeWidth="3" opacity="0.7" />
        ))}
      </Badge>
    </div>
  );
}
