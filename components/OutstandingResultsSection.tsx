"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Search,
  Eye,
  BarChart2,
  TrendingUp,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Share2,
  Target,
  Laptop,
  Camera,
  Gauge,
  MousePointerClick,
  Sparkles,
  Zap,
} from "lucide-react";

// --- TYPES & INTERFACES ---
type StatusType = "Growing" | "Optimized" | "Scaling";

interface SecondaryMetric {
  label: string;
  value: string;
}

interface KPIMetric {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

interface BaseServiceCard {
  id: string;
  header: string;
  subtitle: string;
  status: StatusType;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  icon: React.ReactNode;
}

interface HeroMetricCard extends BaseServiceCard {
  cardType: "hero-metric";
  mainMetric: string;
  mainLabel: string;
  trendText: string;
  trendSubtext: string;
  secondaryMetrics: SecondaryMetric[];
  chartPeak: string;
  chartMonths: string[];
  chartPoints: number[]; // 0 - 100 relative heights
  gradientColor: string;
  strokeColor: string;
}

interface KPIGridCard extends BaseServiceCard {
  cardType: "kpi-grid";
  kpiMetrics: KPIMetric[];
  barMonths: string[];
  barHeights: number[]; // percentages e.g. 38, 50, 62...
  barGradient: string;
}

interface WebDevCard extends BaseServiceCard {
  cardType: "web-dev";
  kpiMetrics: KPIMetric[];
  speedBefore: number;
  speedAfter: number;
  convBefore: string;
  convAfter: string;
  enquiriesGrowth: string;
}

type ServiceCardData = HeroMetricCard | KPIGridCard | WebDevCard;

// --- SERVICE CARDS DATA (7 PROMONEX SERVICES) ---
const SERVICES: ServiceCardData[] = [
  // 1. SEO PERFORMANCE
  {
    id: "seo",
    header: "SEO Performance",
    subtitle: "Organic search growth",
    status: "Growing",
    iconBg: "bg-[#EBF5FF]",
    iconBorder: "border-blue-100",
    iconColor: "text-[#0066FF]",
    icon: <Search size={20} className="stroke-[2.3]" />,
    cardType: "hero-metric",
    mainMetric: "+68%",
    mainLabel: "ORGANIC TRAFFIC",
    trendText: "↑ +68%",
    trendSubtext: "vs previous 6 months",
    secondaryMetrics: [
      { label: "Keywords Ranking", value: "+54%" },
      { label: "Organic Leads", value: "+41%" },
      { label: "Top-10 Keywords", value: "+32%" },
    ],
    chartPeak: "+68% Peak",
    chartMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    chartPoints: [28, 42, 54, 66, 80, 96],
    gradientColor: "#0066FF",
    strokeColor: "#0066FF",
  },

  // 2. META ADS
  {
    id: "meta-ads",
    header: "Meta Ads",
    subtitle: "Campaign performance",
    status: "Optimized",
    iconBg: "bg-[#EBF5FF]",
    iconBorder: "border-blue-100",
    iconColor: "text-[#0066FF]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-[#0066FF]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 8.35c-2.45-3.3-6.52-3.38-9.42-1.07C-.4 9.66-.75 14.54 1.76 17.5c2.61 3.09 7.37 3.07 9.87-.27l.37-.5.37.5c2.5 3.34 7.26 3.36 9.87.27 2.51-2.96 2.16-7.84-.82-10.22-2.9-2.31-6.97-2.23-9.42 1.07zm-2.02 5.86c-1.39 1.77-4.14 2.16-5.83.74-1.63-1.37-1.83-4.18-.46-5.84 1.4-1.69 4.19-2.07 5.87-.66l.42.36zm4.04 0-.42-.36c1.68-1.41 4.47-1.03 5.87.66 1.37 1.66 1.17 4.47-.46 5.84-1.69 1.42-4.44 1.03-5.83-.74z" />
      </svg>
    ),
    cardType: "kpi-grid",
    kpiMetrics: [
      {
        label: "REACH",
        value: "1.84L",
        change: "▲ +42%",
        icon: <Eye size={14} className="text-[#0066FF]" />,
      },
      {
        label: "IMPRESSIONS",
        value: "4.72L",
        change: "▲ +58%",
        icon: <BarChart2 size={14} className="text-[#0066FF]" />,
      },
      {
        label: "CTR",
        value: "2.9%",
        change: "▲ 1.9x avg",
        icon: <MousePointerClick size={14} className="text-[#0066FF]" />,
      },
      {
        label: "ROAS",
        value: "3.4x",
        change: "▲ +28%",
        icon: <TrendingUp size={14} className="text-[#0066FF]" />,
      },
    ],
    barMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    barHeights: [38, 50, 62, 74, 86, 98],
    barGradient: "from-[#0066FF] to-[#00D9FF]",
  },

  // 3. GOOGLE ADS
  {
    id: "google-ads",
    header: "Google Ads",
    subtitle: "Search campaign performance",
    status: "Optimized",
    iconBg: "bg-white",
    iconBorder: "border-slate-200",
    iconColor: "text-[#4285F4]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    ),
    cardType: "hero-metric",
    mainMetric: "+47%",
    mainLabel: "QUALIFIED LEADS",
    trendText: "↑ +47%",
    trendSubtext: "High-intent search traffic",
    secondaryMetrics: [
      { label: "ROAS", value: "3.8x" },
      { label: "Cost Per Lead", value: "-24%" },
      { label: "Conversion Rate", value: "+39%" },
    ],
    chartPeak: "3.8x ROAS",
    chartMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    chartPoints: [32, 46, 58, 70, 84, 98],
    gradientColor: "#0066FF",
    strokeColor: "#0066FF",
  },

  // 4. PERFORMANCE MARKETING
  {
    id: "performance-marketing",
    header: "Performance Marketing",
    subtitle: "Full-funnel growth",
    status: "Scaling",
    iconBg: "bg-[#EFF6FF]",
    iconBorder: "border-blue-100",
    iconColor: "text-[#0066FF]",
    icon: <Target size={20} className="stroke-[2.2]" />,
    cardType: "kpi-grid",
    kpiMetrics: [
      {
        label: "LEADS",
        value: "2,480+",
        change: "▲ +53%",
        icon: <Zap size={14} className="text-[#0066FF]" />,
      },
      {
        label: "CONV. RATE",
        value: "6.8%",
        change: "▲ Top Tier",
        icon: <TrendingUp size={14} className="text-[#0066FF]" />,
      },
      {
        label: "CPL",
        value: "-31%",
        change: "▼ Lower Cost",
        icon: <BarChart2 size={14} className="text-[#0066FF]" />,
      },
      {
        label: "ROAS",
        value: "4.1x",
        change: "▲ Scale Stage",
        icon: <Sparkles size={14} className="text-[#0066FF]" />,
      },
    ],
    barMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    barHeights: [34, 46, 58, 70, 84, 100],
    barGradient: "from-[#0066FF] to-[#00D9FF]",
  },

  // 5. SOCIAL MEDIA MARKETING
  {
    id: "social-media",
    header: "Social Media Marketing",
    subtitle: "Audience & engagement",
    status: "Growing",
    iconBg: "bg-[#FAF5FF]",
    iconBorder: "border-purple-100",
    iconColor: "text-[#9333EA]",
    icon: <Share2 size={20} className="stroke-[2.2]" />,
    cardType: "hero-metric",
    mainMetric: "+82%",
    mainLabel: "ENGAGEMENT GROWTH",
    trendText: "↑ +82%",
    trendSubtext: "Across Meta, IG & LinkedIn",
    secondaryMetrics: [
      { label: "Reach", value: "+64%" },
      { label: "Followers", value: "+48%" },
      { label: "Profile Visits", value: "+37%" },
    ],
    chartPeak: "+82% Peak",
    chartMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    chartPoints: [26, 40, 52, 68, 82, 98],
    gradientColor: "#9333EA",
    strokeColor: "#9333EA",
  },

  // 6. WEBSITE DEVELOPMENT
  {
    id: "website-dev",
    header: "Website Development",
    subtitle: "Conversion-focused websites",
    status: "Optimized",
    iconBg: "bg-[#EFF6FF]",
    iconBorder: "border-blue-100",
    iconColor: "text-[#0066FF]",
    icon: <Laptop size={20} className="stroke-[2.2]" />,
    cardType: "web-dev",
    kpiMetrics: [
      {
        label: "PAGE SPEED",
        value: "92/100",
        change: "▲ CWV Fast",
        icon: <Gauge size={14} className="text-[#0066FF]" />,
      },
      {
        label: "CONVERSION",
        value: "+38%",
        change: "▲ Post-Launch",
        icon: <TrendingUp size={14} className="text-[#0066FF]" />,
      },
      {
        label: "BOUNCE RATE",
        value: "-29%",
        change: "▼ Low Exit",
        icon: <BarChart2 size={14} className="text-[#0066FF]" />,
      },
      {
        label: "ENQUIRIES",
        value: "+56%",
        change: "▲ Inbound",
        icon: <Sparkles size={14} className="text-[#0066FF]" />,
      },
    ],
    speedBefore: 38,
    speedAfter: 92,
    convBefore: "1.8%",
    convAfter: "3.4%",
    enquiriesGrowth: "+56%",
  },

  // 7. CONTENT & SHOOT
  {
    id: "content-shoot",
    header: "Content & Shoot",
    subtitle: "Content performance",
    status: "Growing",
    iconBg: "bg-[#EBF5FF]",
    iconBorder: "border-blue-100",
    iconColor: "text-[#0066FF]",
    icon: <Camera size={20} className="stroke-[2.2]" />,
    cardType: "hero-metric",
    mainMetric: "+73%",
    mainLabel: "CONTENT ENGAGEMENT",
    trendText: "↑ +73%",
    trendSubtext: "Video & creative campaigns",
    secondaryMetrics: [
      { label: "Reach", value: "+61%" },
      { label: "Saves", value: "+46%" },
      { label: "Shares", value: "+39%" },
    ],
    chartPeak: "+73% Viral Lift",
    chartMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    chartPoints: [30, 44, 56, 68, 84, 98],
    gradientColor: "#0066FF",
    strokeColor: "#0066FF",
  },
];

// Helper to provide alternate SEO KPI card on Slide 4
const SEO_KPI_CARD: KPIGridCard = {
  id: "seo-kpi",
  header: "SEO Performance",
  subtitle: "Search rankings & visibility",
  status: "Growing",
  iconBg: "bg-[#EBF5FF]",
  iconBorder: "border-blue-100",
  iconColor: "text-[#0066FF]",
  icon: <Search size={20} className="stroke-[2.3]" />,
  cardType: "kpi-grid",
  kpiMetrics: [
    {
      label: "ORG. TRAFFIC",
      value: "+68%",
      change: "▲ +68%",
      icon: <TrendingUp size={14} className="text-[#0066FF]" />,
    },
    {
      label: "RANKINGS",
      value: "+54%",
      change: "▲ Top 10",
      icon: <BarChart2 size={14} className="text-[#0066FF]" />,
    },
    {
      label: "ORG. LEADS",
      value: "+41%",
      change: "▲ Inbound",
      icon: <Zap size={14} className="text-[#0066FF]" />,
    },
    {
      label: "TOP-10 KW",
      value: "+32%",
      change: "▲ Google P1",
      icon: <Target size={14} className="text-[#0066FF]" />,
    },
  ],
  barMonths: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  barHeights: [36, 48, 60, 72, 84, 98],
  barGradient: "from-[#0066FF] to-[#00D9FF]",
};

// 4 Slide Pairs for Desktop Carousel as specified:
// Slide 1: SEO + Meta Ads
// Slide 2: Google Ads + Performance Marketing
// Slide 3: Social Media Marketing + Website Development
// Slide 4: Content & Shoot + SEO
const DESKTOP_SLIDES: [ServiceCardData, ServiceCardData][] = [
  [SERVICES[0], SERVICES[1]], // SEO + Meta Ads
  [SERVICES[2], SERVICES[3]], // Google Ads + Performance Marketing
  [SERVICES[4], SERVICES[5]], // Social Media Marketing + Website Development
  [SERVICES[6], SEO_KPI_CARD], // Content & Shoot + SEO (KPI balanced)
];

// Staggered & 3D Depth Card Transition Variants
const containerVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 1,
  }),
  center: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  }),
};

const cardItemVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: 0.92,
    y: 18,
    x: dir > 0 ? 18 : -18,
  }),
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    scale: 0.95,
    y: -8,
    x: dir > 0 ? -12 : 12,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  }),
};

// --- CARD SUB-COMPONENT ---
function ResultCard({
  card,
  custom,
}: {
  card: ServiceCardData;
  custom?: number;
}) {
  const isStatusGrowing = card.status === "Growing" || card.status === "Scaling";

  return (
    <motion.article
      variants={cardItemVariants}
      custom={custom}
      whileHover={{
        y: -5,
        boxShadow:
          "0 22px 50px rgba(20, 40, 120, 0.12), 0 0 25px rgba(0, 102, 255, 0.06)",
        borderColor: "rgba(59, 130, 246, 0.35)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative flex flex-col justify-between rounded-[24px] bg-white border border-slate-100 p-5 sm:p-6 shadow-[0_10px_35px_rgba(20,40,120,0.05)] transition-all duration-300 ease-out overflow-hidden cursor-default min-h-[445px] sm:min-h-[435px]"
    >
      {/* 1. TOP HEADER */}
      <div>
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${card.iconBg} border ${card.iconBorder} ${card.iconColor} shadow-sm`}
            >
              {card.icon}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0A1538] leading-tight">
                {card.header}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                {card.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live / Optimized / Scaling Status Pill */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                isStatusGrowing
                  ? "bg-[#EAFBF1] border border-[#DCFCE7] text-[#16A34A]"
                  : "bg-[#EBF5FF] border border-[#DBEAFE] text-[#0066FF]"
              }`}
            >
              {isStatusGrowing ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shadow-[0_0_4px_#16A34A]" />
              ) : (
                <TrendingUp size={12} className="text-[#0066FF] stroke-[2.4]" />
              )}
              <span>{card.status}</span>
            </div>

            {/* Three dots icon */}
            <button
              type="button"
              aria-label="Options"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
            >
              <MoreHorizontal size={17} />
            </button>
          </div>
        </div>

        {/* 2. MIDDLE METRICS SECTION */}
        {card.cardType === "hero-metric" ? (
          <div className="mt-3.5 sm:mt-4 min-h-[110px] flex flex-col justify-center">
            <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block">
              {card.mainLabel}
            </span>
            <div className="mt-1 flex items-baseline gap-2.5 flex-wrap">
              <span className="font-poppins text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0A1538] tracking-tight">
                {card.mainMetric}
              </span>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#16A34A]">
                <span className="font-bold">{card.trendText}</span>
                <span className="text-slate-500 font-normal">
                  {card.trendSubtext}
                </span>
              </div>
            </div>

            {/* Secondary Supporting Metrics Badges */}
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {card.secondaryMetrics.map((sec, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-slate-100 text-[11px]"
                >
                  <span className="font-bold text-[#0A1538]">{sec.value}</span>
                  <span className="text-slate-500 font-medium">{sec.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-3.5 sm:mt-4 min-h-[110px] flex flex-col justify-center">
            {/* 4 KPI Grid Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {card.kpiMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-2 sm:p-2.5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    {m.icon}
                    <span className="text-[10px] font-bold text-[#16A34A]">
                      {m.change}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#0A1538] font-poppins tracking-tight">
                    {m.value}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5 truncate">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. BOTTOM ANALYTICS CHART SECTION */}
      <div className="relative mt-3 sm:mt-4 pt-3 h-28 sm:h-32 flex flex-col justify-end">
        {card.cardType === "hero-metric" ? (
          /* SVG Area Line Chart */
          <div className="relative w-full h-full flex flex-col justify-end">
            {/* Floating Tooltip Pill at Peak */}
            <div className="absolute right-[10%] sm:right-[12%] -top-1 z-20 flex flex-col items-center pointer-events-none">
              <div className="px-2 py-0.5 rounded-full bg-[#0A1538] text-white text-[10px] font-bold shadow-md">
                {card.chartPeak}
              </div>
            </div>

            <div className="relative w-full h-20 sm:h-24 overflow-hidden">
              {/* Subtle Vertical Grid Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none px-3 opacity-40">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-[1px] h-full bg-slate-200" />
                ))}
              </div>

              <svg
                viewBox="0 0 500 110"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id={`areaGrad-${card.id}`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor={card.gradientColor}
                      stopOpacity="0.28"
                    />
                    <stop
                      offset="75%"
                      stopColor={card.gradientColor}
                      stopOpacity="0.05"
                    />
                    <stop
                      offset="100%"
                      stopColor={card.gradientColor}
                      stopOpacity="0.0"
                    />
                  </linearGradient>
                </defs>

                {/* Filled Area Beneath Curve */}
                <path
                  d="M 0 95 Q 70 85, 120 75 T 220 62 T 320 48 T 420 28 T 500 20 L 500 110 L 0 110 Z"
                  fill={`url(#areaGrad-${card.id})`}
                />

                {/* Animated Stroke Curve */}
                <motion.path
                  d="M 0 95 Q 70 85, 120 75 T 220 62 T 320 48 T 420 28 T 500 20"
                  fill="none"
                  stroke={card.strokeColor}
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />

                {/* Peak Point Dot */}
                <circle
                  cx="440"
                  cy="26"
                  r="4.5"
                  fill={card.strokeColor}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Months Axis */}
            <div className="flex justify-between items-center px-2 pt-1.5 border-t border-slate-100/70 text-[10px] sm:text-[11px] text-slate-400 font-medium">
              {card.chartMonths.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        ) : card.cardType === "kpi-grid" ? (
          /* Monthly Bar Chart */
          <div className="w-full h-full flex flex-col justify-end">
            <div className="flex items-end justify-between gap-2 sm:gap-3.5 h-20 sm:h-24 px-1">
              {card.barMonths.map((month, index) => {
                const heightPercent = `${card.barHeights[index]}%`;
                return (
                  <div
                    key={month}
                    className="flex-1 flex flex-col items-center h-full justify-end group/bar"
                  >
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: heightPercent, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.08 + index * 0.06,
                        ease: "easeOut",
                      }}
                      className={`w-full rounded-t-xl bg-gradient-to-t ${card.barGradient} hover:brightness-110 transition-all shadow-sm`}
                    />
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1.5">
                      {month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Website Development: Before vs After Benchmark Visualization */
          <div className="w-full h-full flex flex-col justify-end gap-2.5 pb-1">
            {/* Speed Benchmark Comparison */}
            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-100 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-600">
                  Page Speed Score
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 line-through text-[10px]">
                    Before: {card.speedBefore}/100
                  </span>
                  <span className="font-bold text-[#16A34A] bg-[#DCFCE7] px-1.5 py-0.5 rounded text-[10px]">
                    Promonex: {card.speedAfter}/100
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                <div
                  style={{ width: `${card.speedAfter}%` }}
                  className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-full"
                />
              </div>
            </div>

            {/* Conversion Benchmark Comparison */}
            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-100 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-600">
                  Lead Conversion Rate
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 line-through text-[10px]">
                    Before: {card.convBefore}
                  </span>
                  <span className="font-bold text-[#0066FF] bg-[#EBF5FF] px-1.5 py-0.5 rounded text-[10px]">
                    Promonex: {card.convAfter} (+38%)
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                <div
                  style={{ width: "78%" }}
                  className="h-full bg-gradient-to-r from-[#0066FF] to-[#10B981] rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

// --- MAIN SECTION COMPONENT ---
export default function OutstandingResultsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive breakpoint check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = isMobile ? SERVICES.length : DESKTOP_SLIDES.length;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveSlide((prev) => (prev + newDirection + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  // Autoplay effect (3.2 seconds for a responsive, normal-fast pace)
  useEffect(() => {
    if (isPaused) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      paginate(1);
    }, 3200);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, activeSlide, totalSlides]);


  // Safe active slide index
  const safeSlideIndex = activeSlide % totalSlides;
  const currentCards: ServiceCardData[] = isMobile
    ? [SERVICES[safeSlideIndex]]
    : DESKTOP_SLIDES[safeSlideIndex];

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative w-full pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F8FF]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Soft Decorative Ambient Flow Curve (Top Right) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 w-[360px] h-[280px] opacity-35 select-none"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M 100 0 C 180 80, 240 180, 400 120"
          stroke="#4F46E5"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        <path
          d="M 140 0 C 220 100, 260 220, 400 160"
          stroke="#0066FF"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex justify-center mb-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-purple-200/60 shadow-[0_2px_10px_rgba(147,51,234,0.05)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9333EA] shadow-[0_0_6px_#9333EA]" />
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#0A1538]">
              OUTSTANDING RESULTS
            </span>
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <h2
            id="results-heading"
            className="font-poppins font-bold text-[#0A1538] tracking-tight text-[36px] sm:text-[clamp(50px,4.15vw,64px)] leading-[1.08]"
          >
            Outstanding{" "}
            <span className="bg-[linear-gradient(100deg,#d62ce3_0%,#8b42f6_50%,#187df4_100%)] bg-clip-text text-transparent">
              Results
            </span>
          </h2>

          {/* Underline accent pill matching site branding */}
          <div className="w-[84px] h-[4.5px] bg-[linear-gradient(90deg,#d62ce3,#187df4)] rounded-full mx-auto mt-2.5 shadow-sm" />

          <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            As the best digital marketing agency in Patna, Promonex Media delivers
            measurable growth through SEO, social media marketing, Google Ads,
            and performance-driven digital strategies across Bihar.
          </p>
        </motion.div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={isMobile ? `mob-${safeSlideIndex}` : `desk-${safeSlideIndex}`}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 items-stretch"
            >
              {currentCards.map((card) => (
                <ResultCard key={card.id} card={card} custom={direction} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CAROUSEL CONTROLS & PAGINATION INDICATORS */}
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              {/* Subtle Minimal Previous Button */}
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous results slide"
                className="w-8 h-8 rounded-full bg-white border border-slate-200/80 text-slate-500 hover:text-[#0066FF] hover:border-[#0066FF]/40 shadow-sm transition-all flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Pagination Indicators */}
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Carousel pagination"
              >
                {Array.from({ length: totalSlides }).map((_, idx) => {
                  const isActive = idx === safeSlideIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={
                        isMobile
                          ? `Service ${idx + 1}: ${SERVICES[idx]?.header}`
                          : `Slide ${idx + 1}: ${DESKTOP_SLIDES[idx]?.[0]?.header} & ${DESKTOP_SLIDES[idx]?.[1]?.header}`
                      }
                      onClick={() => goToSlide(idx)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "w-7 h-2 bg-[linear-gradient(90deg,#0066FF,#00D9FF)] shadow-sm"
                          : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Subtle Minimal Next Button */}
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next results slide"
                className="w-8 h-8 rounded-full bg-white border border-slate-200/80 text-slate-500 hover:text-[#0066FF] hover:border-[#0066FF]/40 shadow-sm transition-all flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Subtle Authenticity Note */}
            <p className="text-center text-[11px] text-slate-400 font-normal mt-1 tracking-wide select-none">
              Sample performance dashboard — actual results vary by campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
