"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  whatsapp?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Juhi Mathuri",
    role: "Social Media",
    description: "Creating engaging content and building brand stories across platforms.",
    image: "/assets/Juhi.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Saman",
    role: "Social Media",
    description: "Planning creative campaigns and growing brand presence online.",
    image: "/assets/team/saman.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Anurag",
    role: "Video Shoot",
    description: "Capturing moments that tell powerful brand stories.",
    image: "/assets/team/anurag.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Mathan",
    role: "Video Editor",
    description: "Turning raw footage into engaging visual stories.",
    image: "/assets/team/mathan.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Sohail",
    role: "Video Editor",
    description: "Crafting polished edits that make every story stand out.",
    image: "/assets/team/sohail.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Sakshi",
    role: "Graphics Designer",
    description: "Designing visuals that make brands memorable.",
    image: "/assets/Sakshi_Graphis.jpeg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Md Arshad Raza",
    role: "Software Developer",
    description: "Building digital experiences and technology that drive growth.",
    image: "/assets/Confident Developer in a Tech Office.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
  {
    name: "Sakshi",
    role: "SEO",
    description: "Improving visibility and helping brands get discovered.",
    image: "/assets/Sakshi_Seo.jpeg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917061941818",
  },
];

export default function OurTeamSection() {
  const total = TEAM_MEMBERS.length;
  const TRIPLED_MEMBERS = useMemo(
    () => [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS],
    []
  );

  // Start in the middle set of cloned items for seamless infinite scroll
  const [currentIndex, setCurrentIndex] = useState(total);
  const [isResetting, setIsResetting] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive visible cards count
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Continuous autonomous autoplay every 1.8s - never stalls
  useEffect(() => {
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1800);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, []);

  // Seamless jump without animation when reaching edge of middle set
  useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => {
        setIsResetting(false);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isResetting]);

  // Touch Swipe Handling for Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="our-team"
      className="relative w-full bg-white text-[#020B35] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 font-['Poppins',sans-serif] overflow-hidden select-none"
    >
      {/* ── Subtle Background Radial Glow (Minimal) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#00D9FF]/8 via-[#0478FD]/5 to-transparent rounded-full blur-[100px] -z-0"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Compact Eyebrow, Heading & Subtitle      */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-7">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-1.5"
          >
            <span className="w-7 sm:w-8 h-[2px] bg-[#00A8E8] rounded-full inline-block" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#00A8E8] uppercase select-none">
              OUR TEAM
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-extrabold text-[#020B35] tracking-tight leading-tight"
          >
            Meet the People Behind{" "}
            <span className="text-[#00D9FF] drop-shadow-[0_2px_12px_rgba(0,217,255,0.3)]">
              Promonex
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-slate-600 text-xs sm:text-[13px] md:text-sm max-w-xl mx-auto mt-1.5 font-normal leading-normal"
          >
            A passionate team of creative minds, strategists and problem-solvers working together
            to help your brand grow bigger, faster and stronger.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL WRAPPER WITH CONTROLS                           */}
        {/* ========================================================= */}
        <div className="relative w-full">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous team member"
            className="hidden lg:flex absolute -left-5 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#00D9FF]/40 shadow-[0_4px_14px_rgba(2,11,53,0.1)] items-center justify-center text-[#020B35] hover:text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_16px_rgba(0,217,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft size={20} className="stroke-[2.5]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next team member"
            className="hidden lg:flex absolute -right-5 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#00D9FF]/40 shadow-[0_4px_14px_rgba(2,11,53,0.1)] items-center justify-center text-[#020B35] hover:text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_16px_rgba(0,217,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight size={20} className="stroke-[2.5]" />
          </button>

          {/* Carousel Viewport Container */}
          <div
            className="overflow-hidden w-full py-2 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`,
              }}
              transition={
                isResetting
                  ? { duration: 0 }
                  : {
                      duration: 0.45,
                      ease: [0.25, 1, 0.5, 1],
                    }
              }
              onAnimationComplete={() => {
                if (currentIndex >= total * 2) {
                  setIsResetting(true);
                  setCurrentIndex((prev) => prev - total);
                } else if (currentIndex < total) {
                  setIsResetting(true);
                  setCurrentIndex((prev) => prev + total);
                }
              }}
              className="flex"
            >
              {TRIPLED_MEMBERS.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="px-2 sm:px-2.5 md:px-3 shrink-0"
                  style={{
                    width: `${100 / visibleCount}%`,
                  }}
                >
                  {/* Card Container - Rock solid (no upward jump on hover) */}
                  <div className="group relative w-full h-[410px] sm:h-[430px] md:h-[450px] lg:h-[465px] rounded-[22px] overflow-hidden border border-[#00D9FF]/30 hover:border-[#00D9FF]/80 shadow-[0_4px_16px_rgba(0,217,255,0.06)] hover:shadow-[0_8px_24px_rgba(0,217,255,0.18)] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-end p-5 select-none">
                    
                    {/* Full Portrait Image Background - Hover slightly enhances brightness */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.04]"
                      priority={index < 6}
                    />

                    {/* Subtle, Smooth Dark Navy Gradient Overlay (Image-first, no heavy black block, visible behind text) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/70 from-0% via-[#020B35]/40 via-20% via-[#020B35]/15 via-35% to-transparent to-50% pointer-events-none transition-opacity duration-300" />

                    {/* Top-Right Vertical Social Icons - Hidden initially, smoothly slide in on hover */}
                    <div className="absolute top-4 right-4 z-20 flex flex-col items-center space-y-2 pointer-events-none">
                      {/* LinkedIn */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0077B5] shadow-[0_0_10px_rgba(0,119,181,0.5)] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_14px_#00D9FF] transition-all duration-300 ease-out opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto delay-75"
                        >
                          <Linkedin size={15} className="fill-white stroke-none" />
                        </a>
                      )}

                      {/* Instagram */}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#FA5679] via-[#E93A94] to-[#BB20E9] shadow-[0_0_10px_rgba(233,58,148,0.5)] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_14px_#00D9FF] transition-all duration-300 ease-out opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto delay-150"
                        >
                          <Instagram size={15} />
                        </a>
                      )}

                      {/* WhatsApp */}
                      {member.whatsapp && (
                        <a
                          href={member.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} WhatsApp`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] shadow-[0_0_10px_rgba(37,211,102,0.5)] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_14px_#00D9FF] transition-all duration-300 ease-out opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto delay-200"
                        >
                          <MessageCircle size={15} className="fill-white stroke-none" />
                        </a>
                      )}
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 flex items-end justify-between">
                      {/* Name, Role & Description */}
                      <div className="flex flex-col pr-2">
                        <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-tight drop-shadow-[0_1px_3px_rgba(2,11,53,0.8)]">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-100 font-medium mt-0.5 drop-shadow-[0_1px_2px_rgba(2,11,53,0.7)]">
                          {member.role}
                        </p>

                        {/* Thin Cyan Accent Line */}
                        <div className="w-8 sm:w-10 h-[2px] bg-[#00D9FF] rounded-full my-1.5 shadow-[0_0_6px_#00D9FF]" />

                        <p className="text-[11px] sm:text-xs text-slate-200 leading-snug font-normal max-w-[95%] line-clamp-2 drop-shadow-[0_1px_2px_rgba(2,11,53,0.7)]">
                          {member.description}
                        </p>
                      </div>

                      {/* Circular Glowing Arrow Button at Bottom-Right */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0478FD]/20 backdrop-blur-md border border-[#00D9FF]/45 flex items-center justify-center text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#020B35] group-hover:shadow-[0_0_16px_rgba(0,217,255,0.6)] group-hover:scale-105 transition-all duration-200 shrink-0">
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* CAROUSEL PAGINATION INDICATOR PILLS                      */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
          {TEAM_MEMBERS.map((_, idx) => {
            const activeIndex = currentIndex % total;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (isResetting) return;
                  setCurrentIndex(total + idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? "w-6 h-1.5 bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.7)]"
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
