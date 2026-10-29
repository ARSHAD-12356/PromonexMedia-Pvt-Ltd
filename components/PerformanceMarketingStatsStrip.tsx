"use client";

import { motion } from "framer-motion";

// ─── Animated SVG Icons ───────────────────────────────────────────────────────

function MoneyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
      {/* Stack of notes */}
      <rect x="8" y="20" width="44" height="28" rx="3" stroke="#00C9F4" strokeWidth="2.2" />
      <rect x="12" y="16" width="44" height="28" rx="3" stroke="#00C9F4" strokeWidth="2.2" strokeDasharray="3 1.5" opacity="0.5" />
      {/* Circle in centre */}
      <circle cx="30" cy="34" r="6" stroke="#00C9F4" strokeWidth="2.2" />
      {/* Dollar lines */}
      <line x1="16" y1="34" x2="22" y2="34" stroke="#00C9F4" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="34" x2="44" y2="34" stroke="#00C9F4" strokeWidth="2" strokeLinecap="round" />
      {/* Coin */}
      <circle cx="50" cy="44" r="8" fill="#020B35" stroke="#0478FD" strokeWidth="2.2" />
      <text x="50" y="48" textAnchor="middle" fontSize="9" fill="#0478FD" fontWeight="bold">₹</text>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="32" cy="32" r="26" stroke="#00C9F4" strokeWidth="2.2" />
      <circle cx="32" cy="32" r="18" stroke="#00C9F4" strokeWidth="2.2" opacity="0.65" />
      <circle cx="32" cy="32" r="10" stroke="#00C9F4" strokeWidth="2.2" opacity="0.4" />
      <circle cx="32" cy="32" r="3.5" fill="#00C9F4" />
      {/* Arrow pointing at target */}
      <line x1="52" y1="12" x2="36" y2="28" stroke="#0478FD" strokeWidth="2.4" strokeLinecap="round" />
      <polyline points="46,12 52,12 52,18" stroke="#0478FD" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function RevenueIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
      {/* Wallet body */}
      <rect x="6" y="18" width="44" height="30" rx="4" stroke="#00C9F4" strokeWidth="2.2" />
      {/* Wallet flap */}
      <path d="M6 26h44" stroke="#00C9F4" strokeWidth="2.2" strokeLinecap="round" />
      {/* Coin slot */}
      <rect x="36" y="30" width="14" height="10" rx="2" stroke="#00C9F4" strokeWidth="2" />
      <circle cx="43" cy="35" r="2.5" fill="#0478FD" />
      {/* Rising arrow */}
      <polyline points="10,46 18,36 26,40 38,28" stroke="#00C9F4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    </svg>
  );
}

// ─── Stats data ───────────────────────────────────────────────────────────────
const STATS = [
  {
    Icon: MoneyIcon,
    label: "Ads Spend",
    sublabel: "Last 12 Months",
    value: "₹ 4,65,746,583",
    // float animation
    animation: {
      animate: { y: [0, -8, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
    },
  },
  {
    Icon: TargetIcon,
    label: "Average",
    sublabel: "ROAS",
    value: "3.8x",
    // continuous rotation
    animation: {
      animate: { rotate: [0, 360] },
      transition: { duration: 8, repeat: Infinity, ease: "linear" as const },
    },
  },
  {
    Icon: RevenueIcon,
    label: "Revenue",
    sublabel: "Last 12 Months",
    value: "₹ 15,41,621,189",
    // pulse scale
    animation: {
      animate: { scale: [1, 1.12, 1] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
    },
  },
];

export default function PerformanceMarketingStatsStrip() {
  return (
    <div className="w-full border-b border-[#E3EAF5] bg-white font-['Poppins',sans-serif] shadow-[0_4px_24px_rgba(6,26,64,0.06)]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center divide-y divide-[#E3EAF5] sm:flex-row sm:divide-x sm:divide-y-0">
        {STATS.map((s, i) => {
          const Icon = s.Icon;
          return (
            <div
              key={s.label + s.sublabel}
              className="flex flex-1 items-center gap-5 px-8 py-7 sm:py-6"
            >
              {/* Animated icon */}
              <motion.div {...s.animation} className="shrink-0">
                <Icon />
              </motion.div>

              {/* Text */}
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#061A40]">
                  {s.label}
                </p>
                <p className="text-[13px] text-[#4A5A75]">{s.sublabel}</p>
                <p className="mt-1 text-[22px] font-bold text-[#0478FD] sm:text-[20px] lg:text-[24px]">
                  {s.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
