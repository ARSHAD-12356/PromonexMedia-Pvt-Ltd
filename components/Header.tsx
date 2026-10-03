"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Industry", href: "/industries" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#5B3CC4] transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              ))}
            </nav>

            {/* RIGHT: Enquire Now Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/#contact"
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-[#020B35] bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] transition-all duration-300 active:scale-95"
              >
                Enquire Now
              </Link>
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
              className="fixed top-0 right-0 bottom-0 h-[100dvh] w-[84vw] sm:w-[380px] max-w-[420px] bg-[#020B35] border-l border-cyan-400/30 shadow-[-16px_0_45px_rgba(0,191,255,0.22),-4px_0_20px_rgba(130,87,232,0.25)] flex flex-col justify-between p-6 sm:p-7 select-none overflow-hidden"
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

              {/* NAVIGATION LINKS: Centered with generous, equal vertical spacing */}
              <nav className="flex-1 flex flex-col justify-evenly items-center py-6 w-full">
                {NAV_ITEMS.map((item) => (
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
                ))}
              </nav>

              {/* BOTTOM: Enquire Now Button */}
              <div className="pt-4 border-t border-white/[0.09] shrink-0 w-full">
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center h-[54px] rounded-2xl text-[17px] font-bold text-[#020B35] bg-[#00D9FF] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] active:scale-[0.98] transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
