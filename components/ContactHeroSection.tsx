"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    image: "/assets/contact/contact-hero-1.jpg",
    alt: "Strategic business consultation and digital planning at Promonex Media",
    badge: "Executive Consultation",
    caption: "1-on-1 Growth Strategy"
  },
  {
    image: "/assets/contact/contact-hero-2.jpg",
    alt: "Creative digital marketing team presenting campaign analytics",
    badge: "Campaign Analytics",
    caption: "Data-Driven Performance"
  },
  {
    image: "/assets/contact/contact-hero-3.jpg",
    alt: "Executive partnership and contract agreement",
    badge: "Client Partnerships",
    caption: "Building Long-Term Trust"
  },
  {
    image: "/assets/contact/contact-hero-4.jpg",
    alt: "Innovative brand strategy and creative brainstorming session",
    badge: "Creative Innovation",
    caption: "High-Impact Brand Strategy"
  },
];

export default function ContactHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-change carousel with comfortable pace (4.6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4600);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      id="contact-hero"
      aria-label="Contact Promonex Media Hero"
      className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-88px)] bg-[#020B35] text-white flex items-center justify-center overflow-hidden font-['Poppins',sans-serif] py-12 lg:py-16"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ATMOSPHERE: Clean Dark Navy, Subtle Glows   */}
      {/* ========================================================= */}

      {/* Center-Left Soft Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] sm:h-[650px] bg-gradient-to-tr from-[#00D9FF]/14 via-[#0478FD]/09 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Right Soft Ambient Glow behind the Image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 w-[650px] sm:w-[850px] h-[500px] sm:h-[650px] bg-gradient-to-bl from-[#0478FD]/15 via-[#7C3AED]/10 to-transparent rounded-full blur-[150px] -z-0"
      />

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT: Two-Column Responsive Layout             */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Contact Content & TWO CTA Buttons          */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-6 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase select-none drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
                CONTACT PROMONEX
              </span>
            </motion.div>

            {/* Large Bold Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-5xl lg:text-[44px] xl:text-[54px] font-extrabold text-white tracking-[-0.03em] leading-[1.12]"
            >
              Let&apos;s Build Something{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#00D9FF] drop-shadow-[0_0_28px_rgba(0,217,255,0.45)]">
                Great Together.
              </span>
            </motion.h1>

            {/* Subheading / Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-relaxed max-w-xl font-normal"
            >
              Have a project, idea, or growth challenge in mind? Let’s connect and
              turn your goals into a digital experience that actually delivers
              results.
            </motion.p>

            {/* TWO CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* BUTTON 1: Get a Free Consultation */}
              <a
                href="#contact-form-section"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white text-[#020B35] font-bold text-sm sm:text-[15px] shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(0,217,255,0.4)] hover:bg-[#00D9FF] hover:text-[#020B35] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <span className="w-7 h-7 rounded-full bg-[#020B35]/10 group-hover:bg-[#020B35] flex items-center justify-center transition-colors duration-300 shrink-0">
                  <ArrowRight
                    size={16}
                    className="text-[#020B35] group-hover:text-[#00D9FF] transition-all duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>

              {/* BUTTON 2: Drop a Message */}
              <a
                href="#contact-form-section"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/[0.05] hover:bg-[#0478FD]/25 border border-[#00D9FF]/45 hover:border-[#00D9FF] text-white font-bold text-sm sm:text-[15px] shadow-[0_4px_20px_rgba(0,217,255,0.12)] hover:shadow-[0_8px_28px_rgba(0,217,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Drop a Message</span>
                <Send
                  size={16}
                  className="text-[#00D9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>

            {/* Supporting Response-Time Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex items-center gap-2 text-xs sm:text-[13px] text-slate-400 font-medium pl-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_8px_#00D9FF]" />
              <span>We usually respond within 24 hours</span>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Larger Dynamic Carousel Image Card       */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center lg:justify-end items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[660px] xl:max-w-[720px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Vibrant Ambient Glow behind the shaped image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-[#00D9FF]/25 via-[#0478FD]/20 to-[#7C3AED]/15 rounded-[44px] sm:rounded-[60px] blur-2xl opacity-75 -z-10"
              />

              {/* Asymmetric Organic Shaped Image Container - Enlarged Size with Floating Subtle Sway */}
              <motion.div
                animate={{ y: [-3, 4, -3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[510px] xl:h-[540px] rounded-[32px] sm:rounded-[44px] rounded-tr-[70px] sm:rounded-tr-[110px] rounded-bl-[50px] sm:rounded-bl-[85px] overflow-hidden border-2 border-[#00D9FF]/40 shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(0,217,255,0.25)] bg-[#030F3D] group"
              >
                {/* Smooth Right-to-Left Sliding Carousel Images */}
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{
                      x: direction > 0 ? "100%" : "-100%",
                      opacity: 0.95,
                    }}
                    animate={{
                      x: "0%",
                      opacity: 1,
                      transition: {
                        x: { type: "tween", duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.4 },
                      },
                    }}
                    exit={{
                      x: direction > 0 ? "-100%" : "100%",
                      opacity: 0.95,
                      transition: {
                        x: { type: "tween", duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.4 },
                      },
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={heroSlides[currentIndex].image}
                      alt={heroSlides[currentIndex].alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                      className="object-cover object-center"
                    />

                    {/* Gradient Overlays for contrast & sleek look */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B35]/85 via-[#020B35]/25 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020B35]/40 via-transparent to-transparent"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Floating Glass Badge with animated entry */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 pointer-events-none overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020B35]/80 backdrop-blur-md border border-[#00D9FF]/40 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
                      <Sparkles size={13} className="text-[#00D9FF]" />
                      <span>{heroSlides[currentIndex].badge}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Left Slide Caption with animated entry */}
                <div className="absolute bottom-6 left-6 sm:bottom-7 sm:left-8 z-20 pointer-events-none max-w-[70%] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                      <p className="text-xs font-semibold tracking-wider uppercase text-[#00D9FF] drop-shadow-md">
                        PROMONEX IMPACT
                      </p>
                      <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-lg tracking-tight mt-0.5">
                        {heroSlides[currentIndex].caption}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Interactive Carousel Nav Controls (Left & Right Arrows) */}
                <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous image"
                    className="pointer-events-auto w-10 h-10 rounded-full bg-[#020B35]/85 hover:bg-[#00D9FF] border border-white/20 hover:border-[#00D9FF] text-white hover:text-[#020B35] flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="pointer-events-auto w-10 h-10 rounded-full bg-[#020B35]/85 hover:bg-[#00D9FF] border border-white/20 hover:border-[#00D9FF] text-white hover:text-[#020B35] flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Bottom Right Carousel Indicator Progress Bars */}
                <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-8 z-20 flex items-center gap-2 bg-[#020B35]/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-lg">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer bg-white/25 hover:bg-white/40"
                      style={{ width: currentIndex === idx ? "28px" : "10px" }}
                    >
                      {currentIndex === idx ? (
                        <motion.div
                          key={`progress-${currentIndex}-${isPaused}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? "100%" : "100%" }}
                          transition={{
                            duration: isPaused ? 0 : 4.6,
                            ease: "linear",
                          }}
                          className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0478FD] shadow-[0_0_8px_#00D9FF]"
                        />
                      ) : null}
                    </button>
                  ))}
                </div>

                {/* Inner Border Specular Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[44px] rounded-tr-[70px] sm:rounded-tr-[110px] rounded-bl-[50px] sm:rounded-bl-[85px] border border-white/15"
                />
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}


