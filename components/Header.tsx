"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  BarChart3,
  TrendingUp,
  Layers,
  Users,
  Filter,
  Target,
  Code2,
  FileText,
  PenTool,
  ShoppingCart,
  Globe,
  ShoppingBag,
  Camera,
  Palette,
  PlaySquare,
  Lightbulb,
  FileEdit,
  Star,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "MARKETING & GROWTH",
    services: [
      {
        title: "SEO",
        description: "Improve organic visibility and search rankings.",
        icon: Search,
        href: "/#services",
      },
      {
        title: "Performance Marketing",
        description: "Scale acquisition through measurable campaigns.",
        icon: BarChart3,
        href: "/#services",
        badge: "CORE",
      },
      {
        title: "Google Ads",
        description: "Capture high-intent traffic with paid search.",
        icon: TrendingUp,
        href: "/#services",
      },
      {
        title: "Meta Ads",
        description: "Reach and convert customers across Meta platforms.",
        icon: Layers,
        href: "/#services",
      },
      {
        title: "Social Media Marketing",
        description: "Build reach, engagement and brand recall.",
        icon: Users,
        href: "/#services",
      },
      {
        title: "Lead Generation",
        description: "Generate qualified leads for your business.",
        icon: Filter,
        href: "/#services",
      },
      {
        title: "Conversion Optimization",
        description: "Turn more visitors into customers.",
        icon: Target,
        href: "/#services",
      },
    ],
  },
  {
    title: "WEB & TECHNOLOGY",
    services: [
      {
        title: "Website Development",
        description: "High-performing websites built for growth.",
        icon: Code2,
        href: "/#services",
      },
      {
        title: "Landing Page Development",
        description: "Conversion-focused pages designed to generate leads.",
        icon: FileText,
        href: "/#services",
      },
      {
        title: "UI/UX Design",
        description: "User experiences built around your customers.",
        icon: PenTool,
        href: "/#services",
      },
      {
        title: "E-commerce Development",
        description: "Scalable online stores designed to sell.",
        icon: ShoppingCart,
        href: "/#services",
      },
      {
        title: "WordPress Development",
        description: "Flexible websites and custom WordPress solutions.",
        icon: Globe,
        href: "/#services",
      },
      {
        title: "Shopify Development",
        description: "High-converting Shopify storefronts.",
        icon: ShoppingBag,
        href: "/#services",
      },
      {
        title: "Analytics & Tracking",
        description: "Track performance and uncover growth opportunities.",
        icon: BarChart3,
        href: "/#services",
      },
    ],
  },
  {
    title: "CREATIVE & CONTENT",
    services: [
      {
        title: "Content & Shoot",
        description: "Professional content designed for digital platforms.",
        icon: Camera,
        href: "/#services",
      },
      {
        title: "Creative Design",
        description: "Visuals that make your brand stand out.",
        icon: Palette,
        href: "/#services",
      },
      {
        title: "Video & Reels",
        description: "Short-form content designed for engagement.",
        icon: PlaySquare,
        href: "/#services",
      },
      {
        title: "Brand Strategy",
        description: "Build a stronger and more recognizable brand.",
        icon: Lightbulb,
        href: "/#services",
      },
      {
        title: "Content Marketing",
        description: "Content that educates, attracts and converts.",
        icon: FileEdit,
        href: "/#services",
      },
      {
        title: "Influencer Marketing",
        description: "Creator partnerships that build trust and reach.",
        icon: Star,
        href: "/#services",
      },
    ],
  },
];

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Industry", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileServicesExpanded(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }, 280);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#020B35]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
            : "bg-[#020B35]/60 backdrop-blur-md border-b border-white/[0.05] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Promonex Media Logo */}
            <Link
              href="/#home"
              className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Promonex Media Pvt. Ltd."
            >
              <div className="relative h-14 sm:h-16 w-auto flex items-center">
                <Image
                  src="/assets/promonex-logo.png"
                  alt="Promonex Media Pvt. Ltd."
                  width={160}
                  height={60}
                  priority
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,217,255,0.25)]"
                />
              </div>
            </Link>

            {/* CENTER / RIGHT NAVIGATION (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {NAV_ITEMS.map((item) =>
                item.label === "Services" ? (
                  <div
                    key={item.label}
                    className="relative py-1"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`text-[15px] font-medium transition-colors duration-200 relative group flex items-center gap-1.5 ${
                        isServicesOpen ? "text-[#00D9FF]" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180 text-[#00D9FF]" : "text-slate-400 group-hover:text-white"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#5B3CC4] transition-all duration-300 rounded-full ${
                          isServicesOpen ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#5B3CC4] transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                )
              )}
            </nav>

            {/* RIGHT: Chat on WhatsApp Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-[#020B35] bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Image
                  src="/assets/whatsapp-button-icon.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[13px] font-bold tracking-tight">Chat on WhatsApp</span>
                  <span className="text-[11px] font-medium opacity-90 tracking-wide">+91 70619 41818</span>
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={openMenu}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D9FF] cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP SERVICES MEGA DROPDOWN (Directly below navbar)   */}
        {/* ========================================================= */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute top-full left-0 right-0 w-full pt-1.5 px-4 sm:px-6 lg:px-8 pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto">
                <div className="relative bg-[#020B35]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-[#00D9FF]/35 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(0,217,255,0.18)] p-6 xl:p-8 overflow-hidden">
                  {/* Subtle Background Radial Glows */}
                  <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10" />
                  <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-[#8B5CF6]/12 rounded-full blur-3xl -z-10" />

                  {/* 3 COLUMNS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {SERVICE_CATEGORIES.map((category) => (
                      <div key={category.title} className="flex flex-col">
                        {/* COLUMN HEADING WITH CYAN ACCENT LINE */}
                        <div className="flex items-center gap-3 pb-3 mb-1">
                          <span className="text-[12px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase whitespace-nowrap">
                            {category.title}
                          </span>
                          <span className="flex-1 h-[1.5px] bg-gradient-to-r from-[#00D9FF]/55 to-transparent rounded-full" />
                        </div>

                        {/* SERVICE ITEMS LIST */}
                        <div className="flex flex-col space-y-1">
                          {category.services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.title}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="group relative flex items-center justify-between p-2 rounded-xl border border-transparent hover:border-[#00D9FF]/35 hover:bg-[#00D9FF]/[0.06] transition-all duration-200 cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  {/* ICON CONTAINER */}
                                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.15)] group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF] group-hover:shadow-[0_0_18px_rgba(0,217,255,0.45)] group-hover:text-white transition-all duration-200 shrink-0">
                                    <Icon size={18} className="stroke-[2.1]" />
                                  </div>

                                  {/* TITLE & DESCRIPTION */}
                                  <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="text-[13.5px] font-semibold text-white group-hover:text-[#00D9FF] transition-colors tracking-tight truncate">
                                        {service.title}
                                      </span>
                                      {service.badge && (
                                        <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-md bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] text-white shadow-[0_0_8px_rgba(0,217,255,0.4)]">
                                          {service.badge}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-[11.5px] text-slate-400 group-hover:text-slate-300 transition-colors leading-snug line-clamp-1">
                                      {service.description}
                                    </span>
                                  </div>
                                </div>

                                {/* CHEVRON ARROW */}
                                <ChevronRight
                                  size={15}
                                  className="text-slate-500 group-hover:text-[#00D9FF] group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-2"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM HORIZONTAL CTA STRIP */}
                  <div className="mt-6 pt-4 border-t border-white/[0.09] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.2)] shrink-0">
                        <MessageSquare size={19} className="stroke-[2.1]" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                          Need a custom growth strategy?
                        </h4>
                        <p className="text-xs text-slate-400 font-normal leading-snug">
                          Tell us about your business and get a tailored plan from our experts.
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/#contact"
                      onClick={() => setIsServicesOpen(false)}
                      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#8B5CF6] text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
                    >
                      <span>Let&apos;s Talk</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* INDEPENDENT FULL-SCREEN MOBILE OVERLAY (Portal on document.body) */}
      {mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] lg:hidden"
            style={{
              position: "fixed",
              inset: 0,
              visibility: isMenuOpen ? "visible" : "hidden",
              pointerEvents: isMenuOpen ? "auto" : "none",
              transition: `visibility 0s linear ${isMenuOpen ? "0s" : "280ms"}`,
            }}
          >
            {/* Backdrop: Dark navy translucent tint with smooth fade */}
            <div
              onClick={closeMenu}
              className="fixed inset-0 bg-[#020B35]/75 cursor-pointer"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transition: "opacity 280ms cubic-bezier(0.16, 1, 0.3, 1)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                willChange: "opacity",
              }}
              aria-hidden="true"
            />

            {/* Glassmorphism Sidebar Panel: Smooth GPU slide */}
            <aside
              className="fixed top-0 right-0 bottom-0 h-[100dvh] w-[86vw] sm:w-[380px] max-w-[420px] bg-[#020B35] border-l border-cyan-400/30 shadow-[-16px_0_45px_rgba(0,191,255,0.22),-4px_0_20px_rgba(130,87,232,0.25)] flex flex-col justify-between p-6 sm:p-7 select-none overflow-hidden"
              style={{
                transform: isMenuOpen ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
                transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              {/* Subtle interior ambient glow */}
              <div className="absolute top-10 -left-16 w-44 h-44 bg-[#00D9FF]/12 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-16 -right-16 w-48 h-48 bg-[#8257E8]/15 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* TOP HEADER: Promonex Logo & Cyan-bordered Close X */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.09] shrink-0">
                <Link
                  href="/#home"
                  onClick={closeMenu}
                  className="flex items-center"
                >
                  <Image
                    src="/assets/promonex-logo.png"
                    alt="Promonex Media Pvt. Ltd."
                    width={140}
                    height={50}
                    priority
                    className="h-10 sm:h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,191,255,0.3)]"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center border-2 border-[#00D9FF] bg-[#020B35] text-white shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:bg-[#00D9FF]/20 active:scale-95 transition-all duration-200 cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X size={22} className="stroke-[2.4] text-white" />
                </button>
              </div>

              {/* NAVIGATION LINKS: Centered with generous vertical spacing & Services Accordion */}
              <nav className="flex-1 flex flex-col justify-evenly items-center py-4 w-full overflow-y-auto no-scrollbar">
                {NAV_ITEMS.map((item) => {
                  if (item.label === "Services") {
                    return (
                      <div key={item.label} className="w-full text-center">
                        <button
                          type="button"
                          onClick={() => setMobileServicesExpanded((prev) => !prev)}
                          className="group relative inline-flex items-center gap-2 text-[21px] sm:text-[23px] font-bold text-slate-100 hover:text-white transition-colors duration-200 py-1.5 px-6 rounded-xl hover:bg-white/[0.04] active:scale-95 cursor-pointer"
                        >
                          <span className="relative z-10 transition-all duration-200 group-hover:text-[#00D9FF]">
                            {item.label}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 text-[#00D9FF] ${
                              mobileServicesExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Accordion Content */}
                        <AnimatePresence>
                          {mobileServicesExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden mt-2 max-h-[300px] overflow-y-auto px-3 py-2 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-left space-y-3"
                            >
                              {SERVICE_CATEGORIES.map((cat) => (
                                <div key={cat.title} className="space-y-1">
                                  <span className="text-[10px] font-bold tracking-widest text-[#00D9FF] uppercase block px-1">
                                    {cat.title}
                                  </span>
                                  <div className="grid grid-cols-1 gap-0.5">
                                    {cat.services.map((svc) => (
                                      <Link
                                        key={svc.title}
                                        href={svc.href}
                                        onClick={closeMenu}
                                        className="text-xs text-slate-300 hover:text-[#00D9FF] py-1 px-2 rounded-lg hover:bg-white/[0.05] flex items-center justify-between transition-colors"
                                      >
                                        <span>{svc.title}</span>
                                        <ChevronRight size={12} className="text-slate-500" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <div key={item.label} className="w-full text-center">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="group relative inline-block text-[21px] sm:text-[23px] font-bold text-slate-100 hover:text-white transition-colors duration-200 py-1.5 px-6 rounded-xl hover:bg-white/[0.04] active:scale-95"
                      >
                        <span className="relative z-10 transition-all duration-200 group-hover:text-[#00D9FF] group-hover:drop-shadow-[0_0_16px_rgba(0,217,255,0.8)]">
                          {item.label}
                        </span>
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#8257E8] transition-all duration-200 group-hover:w-3/4 rounded-full shadow-[0_0_8px_#00D9FF]" />
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* BOTTOM: Chat on WhatsApp Button (Mobile Drawer) */}
              <div className="pt-4 border-t border-white/[0.09] shrink-0 w-full">
                <a
                  href="https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-3 h-[58px] rounded-2xl text-[#020B35] bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] active:scale-[0.98] transition-all duration-300"
                >
                  <Image
                    src="/assets/whatsapp-button-icon.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain shrink-0"
                  />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[15px] font-bold">Chat on WhatsApp</span>
                    <span className="text-[12px] font-medium opacity-90">+91 70619 41818</span>
                  </div>
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
