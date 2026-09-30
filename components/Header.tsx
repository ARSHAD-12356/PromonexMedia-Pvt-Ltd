"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industry", href: "#industry" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            href="#home"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Promonex Media Pvt. Ltd."
          >
            <div className="relative h-12 sm:h-14 w-auto flex items-center">
              <Image
                src="/assets/promonex-logo.png"
                alt="Promonex Media Pvt. Ltd."
                width={160}
                height={60}
                priority
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,191,255,0.25)]"
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

          {/* RIGHT: Let's Chat Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-[#020B35] bg-[#00D9FF] hover:bg-[#00BFFF] shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 active:scale-95"
            >
              Let&apos;s Chat
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/[0.08] bg-[#020B35]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-[#020B35] bg-[#00D9FF] hover:bg-[#00BFFF] shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all"
                >
                  Let&apos;s Chat
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
