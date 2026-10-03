"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Gem,
  HeartPulse,
  Sparkles,
  IndianRupee,
  Home,
  GraduationCap,
  Settings,
  Briefcase,
  Scale,
  Hotel,
  Utensils,
  Package,
  Car,
  Sofa,
  Plane,
  Dumbbell,
  Sun,
  Factory,
  Truck,
  Cpu,
  Rocket,
  MapPin,
  Play,
  Calendar,
  Users,
  Building2,
  Pill,
  Heart,
  Star,
  Coffee,
  ShieldCheck,
  Smile,
  HeartHandshake,
  Building,
  Search,
  ArrowRight,
  X,
} from "lucide-react";

type FilterType =
  | "All Industries"
  | "Consumer"
  | "B2B"
  | "Local"
  | "Trust-Led"
  | "Ecommerce";

interface AccentStyle {
  bg: string;
  border: string;
  shadow: string;
  iconColor: string;
}

interface IndustryItem {
  id: number;
  title: string;
  description: string;
  bottomLabel: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  categories: FilterType[];
  accent: AccentStyle;
}

const FILTERS: FilterType[] = [
  "All Industries",
  "Consumer",
  "B2B",
  "Local",
  "Trust-Led",
  "Ecommerce",
];

// Curated vibrant color accents matching the visual styling in the reference screenshot
const ACCENTS = {
  electricBlue: {
    bg: "rgba(0, 150, 255, 0.10)",
    border: "rgba(0, 180, 255, 0.60)",
    shadow: "0 0 18px rgba(0, 190, 255, 0.22)",
    iconColor: "#00D9FF",
  },
  cyanTeal: {
    bg: "rgba(0, 245, 212, 0.10)",
    border: "rgba(0, 245, 212, 0.60)",
    shadow: "0 0 18px rgba(0, 245, 212, 0.22)",
    iconColor: "#00F5D4",
  },
  magentaPurple: {
    bg: "rgba(217, 70, 239, 0.10)",
    border: "rgba(217, 70, 239, 0.60)",
    shadow: "0 0 18px rgba(217, 70, 239, 0.22)",
    iconColor: "#E879F9",
  },
  amberGold: {
    bg: "rgba(251, 191, 36, 0.10)",
    border: "rgba(251, 191, 36, 0.60)",
    shadow: "0 0 18px rgba(251, 191, 36, 0.22)",
    iconColor: "#FDE047",
  },
  violet: {
    bg: "rgba(168, 85, 247, 0.10)",
    border: "rgba(168, 85, 247, 0.60)",
    shadow: "0 0 18px rgba(168, 85, 247, 0.22)",
    iconColor: "#C084FC",
  },
  roseCoral: {
    bg: "rgba(244, 63, 94, 0.10)",
    border: "rgba(244, 63, 94, 0.60)",
    shadow: "0 0 18px rgba(244, 63, 94, 0.22)",
    iconColor: "#FB7185",
  },
  skyBlue: {
    bg: "rgba(56, 189, 248, 0.10)",
    border: "rgba(56, 189, 248, 0.60)",
    shadow: "0 0 18px rgba(56, 189, 248, 0.22)",
    iconColor: "#38BDF8",
  },
  emeraldMint: {
    bg: "rgba(52, 211, 153, 0.10)",
    border: "rgba(52, 211, 153, 0.60)",
    shadow: "0 0 18px rgba(52, 211, 153, 0.22)",
    iconColor: "#34D399",
  },
};

const INDUSTRIES: IndustryItem[] = [
  // ROW 1
  {
    id: 1,
    title: "Ecommerce & D2C",
    description:
      "SEO, performance marketing, CRO, retention and ecommerce growth.",
    bottomLabel: "SALES-LED GROWTH",
    icon: ShoppingCart,
    categories: ["Ecommerce", "Consumer"],
    accent: ACCENTS.electricBlue,
  },
  {
    id: 2,
    title: "Luxury & Fashion",
    description:
      "Premium creative, search visibility, social storytelling and high-intent acquisition.",
    bottomLabel: "BRAND + PERFORMANCE",
    icon: Gem,
    categories: ["Ecommerce", "Consumer"],
    accent: ACCENTS.cyanTeal,
  },
  {
    id: 3,
    title: "Healthcare & Clinics",
    description:
      "Local SEO, patient education, lead generation and reputation-led marketing.",
    bottomLabel: "TRUST-LED",
    icon: HeartPulse,
    categories: ["Trust-Led", "Local"],
    accent: ACCENTS.magentaPurple,
  },
  {
    id: 4,
    title: "Beauty & Wellness",
    description:
      "Social media, local discovery, visual content and appointment generation.",
    bottomLabel: "VISUAL + LOCAL",
    icon: Sparkles,
    categories: ["Consumer", "Local", "Ecommerce"],
    accent: ACCENTS.amberGold,
  },

  // ROW 2
  {
    id: 5,
    title: "Jewellery & Accessories",
    description:
      "Product discovery, ecommerce SEO, creative advertising and premium positioning.",
    bottomLabel: "ECOMMERCE",
    icon: Gem,
    categories: ["Ecommerce", "Consumer"],
    accent: ACCENTS.violet,
  },
  {
    id: 6,
    title: "Financial Services & Fintech",
    description:
      "Search-led lead generation, trust-focused landing pages and performance marketing.",
    bottomLabel: "HIGH-INTENT LEADS",
    icon: IndianRupee,
    categories: ["Trust-Led", "B2B"],
    accent: ACCENTS.roseCoral,
  },
  {
    id: 7,
    title: "Real Estate & Property",
    description:
      "Lead generation, local search, project landing pages and remarketing.",
    bottomLabel: "LEAD GENERATION",
    icon: Home,
    categories: ["Local", "Trust-Led"],
    accent: ACCENTS.skyBlue,
  },
  {
    id: 8,
    title: "Education & EdTech",
    description:
      "Course discovery, SEO, enrolment campaigns and lead nurturing.",
    bottomLabel: "ENROLMENT GROWTH",
    icon: GraduationCap,
    categories: ["Consumer", "B2B"],
    accent: ACCENTS.emeraldMint,
  },

  // ROW 3
  {
    id: 9,
    title: "SaaS & Software",
    description:
      "Demand generation, SEO, content funnels and conversion-focused landing pages.",
    bottomLabel: "DEMAND GENERATION",
    icon: Settings,
    categories: ["B2B"],
    accent: ACCENTS.electricBlue,
  },
  {
    id: 10,
    title: "B2B & Professional Services",
    description:
      "Authority building, LinkedIn, SEO and qualified lead generation.",
    bottomLabel: "QUALIFIED LEADS",
    icon: Briefcase,
    categories: ["B2B"],
    accent: ACCENTS.cyanTeal,
  },
  {
    id: 11,
    title: "Legal & Law Firms",
    description:
      "Search visibility, local SEO, expert content and enquiry generation.",
    bottomLabel: "AUTHORITY + SEARCH",
    icon: Scale,
    categories: ["Trust-Led", "B2B", "Local"],
    accent: ACCENTS.skyBlue,
  },
  {
    id: 12,
    title: "Hotels & Hospitality",
    description:
      "Search, social discovery, direct bookings and remarketing.",
    bottomLabel: "BOOKING GROWTH",
    icon: Hotel,
    categories: ["Consumer", "Local"],
    accent: ACCENTS.amberGold,
  },

  // ROW 4
  {
    id: 13,
    title: "Restaurants & Food Businesses",
    description:
      "Local SEO, social content, offers, discovery and repeat engagement.",
    bottomLabel: "LOCAL DISCOVERY",
    icon: Utensils,
    categories: ["Consumer", "Local"],
    accent: ACCENTS.roseCoral,
  },
  {
    id: 14,
    title: "FMCG & Consumer Goods",
    description:
      "Brand awareness, ecommerce, creator campaigns and customer acquisition.",
    bottomLabel: "SCALE + AWARENESS",
    icon: Package,
    categories: ["Consumer", "Ecommerce"],
    accent: ACCENTS.violet,
  },
  {
    id: 15,
    title: "Automotive",
    description:
      "Search campaigns, dealership leads, local SEO and customer remarketing.",
    bottomLabel: "SEARCH + LEADS",
    icon: Car,
    categories: ["Consumer", "Local"],
    accent: ACCENTS.skyBlue,
  },
  {
    id: 16,
    title: "Home, Interior & Furniture",
    description:
      "Visual storytelling, SEO, ecommerce and project enquiries.",
    bottomLabel: "VISUAL COMMERCE",
    icon: Sofa,
    categories: ["Consumer", "Ecommerce", "Local"],
    accent: ACCENTS.emeraldMint,
  },

  // ROW 5
  {
    id: 17,
    title: "Travel & Tourism",
    description:
      "Search demand, destination content, paid acquisition and booking funnels.",
    bottomLabel: "SEARCH + DISCOVERY",
    icon: Plane,
    categories: ["Consumer"],
    accent: ACCENTS.cyanTeal,
  },
  {
    id: 18,
    title: "Fitness & Sports",
    description:
      "Local acquisition, memberships, social engagement and retention.",
    bottomLabel: "COMMUNITY GROWTH",
    icon: Dumbbell,
    categories: ["Consumer", "Local"],
    accent: ACCENTS.electricBlue,
  },
  {
    id: 19,
    title: "Spirituality & Conscious Living",
    description:
      "Ecommerce, educational content, community building and product discovery.",
    bottomLabel: "CONTENT + COMMERCE",
    icon: Sun,
    categories: ["Consumer", "Ecommerce"],
    accent: ACCENTS.amberGold,
  },
  {
    id: 20,
    title: "Manufacturing & Industrial",
    description:
      "B2B SEO, technical content, enquiry generation and product visibility.",
    bottomLabel: "B2B SEARCH",
    icon: Factory,
    categories: ["B2B"],
    accent: ACCENTS.skyBlue,
  },

  // ROW 6
  {
    id: 21,
    title: "Logistics & Supply Chain",
    description:
      "B2B lead generation, SEO and high-intent service marketing.",
    bottomLabel: "B2B LEADS",
    icon: Truck,
    categories: ["B2B"],
    accent: ACCENTS.electricBlue,
  },
  {
    id: 22,
    title: "Technology & Electronics",
    description:
      "Ecommerce SEO, product campaigns, comparisons and performance marketing.",
    bottomLabel: "PRODUCT-LED",
    icon: Cpu,
    categories: ["Ecommerce", "Consumer"],
    accent: ACCENTS.cyanTeal,
  },
  {
    id: 23,
    title: "Startups & New Ventures",
    description:
      "Go-to-market strategy, lead generation, SEO and rapid testing.",
    bottomLabel: "GO-TO-MARKET",
    icon: Rocket,
    categories: ["B2B"],
    accent: ACCENTS.magentaPurple,
  },
  {
    id: 24,
    title: "Local Businesses",
    description:
      "Google Maps, local SEO, reviews and nearby customer acquisition.",
    bottomLabel: "LOCAL GROWTH",
    icon: MapPin,
    categories: ["Local"],
    accent: ACCENTS.roseCoral,
  },

  // ROW 7
  {
    id: 25,
    title: "Media & Entertainment",
    description:
      "Content distribution, social growth, campaigns and audience building.",
    bottomLabel: "AUDIENCE GROWTH",
    icon: Play,
    categories: ["Consumer"],
    accent: ACCENTS.violet,
  },
  {
    id: 26,
    title: "Events & Venues",
    description:
      "Event discovery, bookings, lead generation and social promotion.",
    bottomLabel: "EVENT LEADS",
    icon: Calendar,
    categories: ["Consumer", "Local"],
    accent: ACCENTS.amberGold,
  },
  {
    id: 27,
    title: "Recruitment & HR",
    description:
      "Employer visibility, B2B lead generation and recruitment marketing.",
    bottomLabel: "TALENT + B2B",
    icon: Users,
    categories: ["B2B"],
    accent: ACCENTS.skyBlue,
  },
  {
    id: 28,
    title: "Construction & Architecture",
    description:
      "Portfolio visibility, local search and high-value project enquiries.",
    bottomLabel: "HIGH-VALUE LEADS",
    icon: Building2,
    categories: ["B2B", "Local"],
    accent: ACCENTS.emeraldMint,
  },

  // ROW 8
  {
    id: 29,
    title: "Pharma & Healthcare Products",
    description:
      "Search strategy, educational communication and compliant product visibility.",
    bottomLabel: "TRUST + EDUCATION",
    icon: Pill,
    categories: ["Trust-Led", "Consumer"],
    accent: ACCENTS.magentaPurple,
  },
  {
    id: 30,
    title: "Pet Care & Pet Products",
    description:
      "Ecommerce, local discovery, content and customer retention.",
    bottomLabel: "COMMUNITY + COMMERCE",
    icon: Heart,
    categories: ["Consumer", "Ecommerce", "Local"],
    accent: ACCENTS.roseCoral,
  },
  {
    id: 31,
    title: "Kids, Baby & Parenting",
    description:
      "Trust-focused content, ecommerce and social discovery.",
    bottomLabel: "TRUST + COMMERCE",
    icon: Star,
    categories: ["Consumer", "Trust-Led", "Ecommerce"],
    accent: ACCENTS.amberGold,
  },
  {
    id: 32,
    title: "Food & Beverage Brands",
    description:
      "Product discovery, creator content, ecommerce and repeat purchase campaigns.",
    bottomLabel: "D2C GROWTH",
    icon: Coffee,
    categories: ["Consumer", "Ecommerce"],
    accent: ACCENTS.cyanTeal,
  },

  // ROW 9
  {
    id: 33,
    title: "Insurance",
    description:
      "High-intent search, educational content and lead generation.",
    bottomLabel: "TRUST-LED LEADS",
    icon: ShieldCheck,
    categories: ["Trust-Led", "B2B"],
    accent: ACCENTS.electricBlue,
  },
  {
    id: 34,
    title: "Dental Clinics",
    description:
      "Local SEO, patient education, reviews and appointment generation.",
    bottomLabel: "LOCAL HEALTHCARE",
    icon: Smile,
    categories: ["Trust-Led", "Local"],
    accent: ACCENTS.cyanTeal,
  },
  {
    id: 35,
    title: "NGOs & Social Impact",
    description:
      "Awareness, storytelling, donor communication and campaign visibility.",
    bottomLabel: "IMPACT STORYTELLING",
    icon: HeartHandshake,
    categories: ["Trust-Led"],
    accent: ACCENTS.magentaPurple,
  },
  {
    id: 36,
    title: "Coworking & Workspaces",
    description:
      "Local search, lead generation, tours and occupancy-focused campaigns.",
    bottomLabel: "LOCAL B2B",
    icon: Building,
    categories: ["Local", "B2B"],
    accent: ACCENTS.skyBlue,
  },
];

export default function IndustryFinderSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Industries");

  // Real-time filtering by category, search text in title, description, and bottom label
  const filteredIndustries = useMemo(() => {
    return INDUSTRIES.filter((item) => {
      // Filter tab check
      const matchesFilter =
        activeFilter === "All Industries" ||
        item.categories.includes(activeFilter);

      if (!matchesFilter) return false;

      // Search query check
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inLabel = item.bottomLabel.toLowerCase().includes(q);

      return inTitle || inDesc || inLabel;
    });
  }, [searchQuery, activeFilter]);

  const handleCardClick = (title: string) => {
    // Open AI chat or dispatch event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-promonex-chat"));
    }
  };

  return (
    <section
      id="industries-details"
      className="relative w-full pt-4 sm:pt-6 md:pt-8 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#020B2E] text-white overflow-hidden font-['Poppins',sans-serif] selection:bg-[#00D9FF] selection:text-[#020B2E] scroll-mt-12"
    >
      {/* Ambient background glows for deep navy atmosphere (no dotted patterns) */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(21, 151, 255, 0.45) 0%, rgba(2, 11, 46, 0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[150px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 217, 255, 0.35) 0%, rgba(2, 11, 46, 0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 61, 255, 0.30) 0%, rgba(2, 11, 46, 0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ==================================================
            1. TOP HEADER AREA (Minimum top margin)
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          {/* Eyebrow with flanking subtle cyan lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#00D9FF]/70" />
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-[#00D9FF]">
              INDUSTRY FINDER
            </span>
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#00D9FF]/70" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-3">
            Find Your{" "}
            <span
              className="italic font-extrabold"
              style={{
                background:
                  "linear-gradient(135deg, #00D9FF 0%, #168BFF 45%, #B55FE6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(0, 217, 255, 0.45))",
              }}
            >
              Industry.
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Search or filter the industries we can build digital growth strategies for.
          </p>
        </motion.div>

        {/* ==================================================
            2. SEARCH BAR — PREMIUM GLOWING CONTAINER
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="w-full max-w-[820px] mx-auto mb-7 sm:mb-8"
        >
          <div className="relative group">
            {/* Soft cyan-blue outer glow on hover/focus */}
            <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-[rgba(35,160,255,0.4)] via-[rgba(0,217,255,0.6)] to-[rgba(139,61,255,0.35)] blur-[8px] opacity-40 group-hover:opacity-75 group-focus-within:opacity-100 transition duration-300 pointer-events-none" />

            <div
              className="relative flex items-center h-[64px] sm:h-[68px] px-6 sm:px-7 rounded-[40px] transition-all duration-300 border border-[rgba(35,160,255,0.65)] focus-within:border-[rgba(0,217,255,0.95)]"
              style={{
                background: "rgba(10, 35, 90, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 0 25px rgba(0, 153, 255, 0.18), inset 0 0 25px rgba(0, 153, 255, 0.06)",
              }}
            >
              {/* Search icon */}
              <Search
                size={24}
                className="text-[#00D9FF] shrink-0 mr-4 transition-transform duration-300 group-focus-within:scale-110"
              />

              {/* Input field */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search industries — ecommerce, clinic, finance, SaaS..."
                className="w-full bg-transparent text-white placeholder-[rgba(220,235,255,0.65)] text-sm sm:text-base font-normal focus:outline-none tracking-normal"
              />

              {/* Clear button if text entered */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-2"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            3. CATEGORY FILTER BUTTONS (Fixed Clean Glow)
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mb-9 sm:mb-11"
        >
          <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto py-2 px-1 no-scrollbar scroll-smooth">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-6 py-2.5 sm:px-7 sm:py-2.5 rounded-[30px] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 outline-none focus:outline-none focus:ring-0 active:outline-none select-none shadow-none ${
                    isActive
                      ? "text-white scale-[1.02] border border-white/20"
                      : "bg-[rgba(255,255,255,0.03)] text-[#E2EDF8] border border-[rgba(60,150,255,0.55)] hover:border-[rgba(0,217,255,0.9)] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #00C6FF 0%, #168BFF 45%, #8B3DFF 100%)",
                          boxShadow: "none",
                        }
                      : {
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          boxShadow: "none",
                        }
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Results count indicator */}
          <div className="text-center text-xs text-slate-400/80 mt-2.5">
            Showing{" "}
            <span className="text-[#00D9FF] font-semibold">
              {filteredIndustries.length}
            </span>{" "}
            of {INDUSTRIES.length} industries
          </div>
        </motion.div>

        {/* ==================================================
            4. INDUSTRY CARD GRID (True Premium Glassmorphism)
            ================================================== */}
        {filteredIndustries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredIndustries.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(index * 0.025, 0.25),
                      ease: "easeOut",
                    }}
                    onClick={() => handleCardClick(item.title)}
                    className="group relative flex flex-col h-full rounded-[22px] p-6 lg:p-7 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1.5"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(20, 55, 120, 0.30), rgba(5, 22, 65, 0.48))",
                      backdropFilter: "blur(22px)",
                      WebkitBackdropFilter: "blur(22px)",
                      border: "1px solid rgba(40, 150, 255, 0.65)",
                      boxShadow:
                        "0 0 0 1px rgba(0, 153, 255, 0.08), 0 12px 35px rgba(0, 0, 0, 0.25), 0 0 25px rgba(0, 130, 255, 0.08)",
                    }}
                  >
                    {/* Top-left glass diagonal highlight */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[22px]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, transparent 35%)",
                      }}
                    />

                    {/* Glowing border enhancement on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[rgba(0,217,255,0.85)] shadow-[0_0_30px_rgba(0,180,255,0.22)]" />

                    {/* Icon Container (56 × 56px, rounded 15px, curated glowing accent) */}
                    <div
                      className="relative z-10 w-[56px] h-[56px] rounded-[15px] flex items-center justify-center transition-all duration-300 mb-5 shrink-0 group-hover:scale-105"
                      style={{
                        background: item.accent.bg,
                        border: `1px solid ${item.accent.border}`,
                        boxShadow: item.accent.shadow,
                        color: item.accent.iconColor,
                      }}
                    >
                      <IconComponent size={26} strokeWidth={1.8} />
                    </div>

                    {/* Industry Title */}
                    <h3 className="relative z-10 text-[20px] sm:text-[21px] font-bold text-white tracking-tight mb-2.5 transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-[14px] sm:text-[15px] text-[rgba(220,235,255,0.72)] leading-[1.6] font-normal mb-6">
                      {item.description}
                    </p>

                    {/* Bottom Area: Strategy Label + Circular Arrow Button */}
                    <div className="relative z-10 mt-auto pt-5 flex items-center justify-between border-t border-[rgba(255,255,255,0.07)]">
                      <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.7px] uppercase text-[#00D9FF] group-hover:text-white transition-colors duration-200">
                        {item.bottomLabel}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-[rgba(0,180,255,0.55)] flex items-center justify-center text-[#00D9FF] bg-transparent group-hover:border-[rgba(0,217,255,0.9)] group-hover:bg-[rgba(0,217,255,0.12)] group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)] transition-all duration-300 shrink-0 ml-2">
                        <ArrowRight
                          size={17}
                          strokeWidth={2.2}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* ==================================================
              EMPTY STATE
              ================================================== */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center flex flex-col items-center justify-center rounded-[24px] p-8 max-w-lg mx-auto"
            style={{
              background:
                "linear-gradient(145deg, rgba(20, 55, 120, 0.30), rgba(5, 22, 65, 0.48))",
              backdropFilter: "blur(22px)",
              border: "1px solid rgba(40, 150, 255, 0.65)",
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="w-16 h-16 rounded-[16px] bg-[rgba(0,150,255,0.10)] border border-[rgba(0,180,255,0.60)] flex items-center justify-center text-[#00D9FF] mb-4 shadow-[0_0_20px_rgba(0,217,255,0.2)]">
              <Search size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              No industries found
            </h3>
            <p className="text-slate-300/80 text-sm max-w-md mb-6 leading-relaxed">
              Try another search or explore all industries.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All Industries");
              }}
              className="px-7 py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #00C6FF 0%, #168BFF 45%, #8B3DFF 100%)",
                boxShadow:
                  "0 0 22px rgba(0, 174, 255, 0.4), 0 0 35px rgba(139, 61, 255, 0.25)",
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
