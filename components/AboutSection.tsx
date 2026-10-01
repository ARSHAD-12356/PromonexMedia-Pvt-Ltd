"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MainGrowthImage from "../Assets/images/01_main_growth_image.png";
import CampaignImage from "../Assets/images/ChatGPT Image Sep 30, 2026, 09_56_58 PM.png";
import StrategyImage from "../Assets/images/ChatGPT Image Sep 30, 2026, 10_15_42 PM.png";

interface CarouselSlide {
  src: StaticImageData;
  alt: string;
}

const SLIDES: CarouselSlide[] = [
  { src: MainGrowthImage, alt: "Promonex digital growth campaign dashboard" },
  { src: CampaignImage, alt: "Promonex marketing campaign workspace" },
  { src: StrategyImage, alt: "Promonex digital marketing strategy session" },
];

const FRAME_GRADIENT =
  "linear-gradient(135deg, #F8547D 0%, #BB20E9 44%, #0478FD 76%, #4AE1FC 100%)";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [aboutButtonHovered, setAboutButtonHovered] = useState(false);

  useEffect(() => {
    if (paused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  const selectSlide = (index: number) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden bg-[#020B3A]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 77% 55%, rgba(0, 101, 199, 0.17), transparent 43%), radial-gradient(ellipse at 20% 82%, rgba(64, 31, 133, 0.13), transparent 42%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 md:grid-cols-[0.95fr_1.05fr] md:gap-8 lg:min-h-[768px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-x-12 lg:gap-y-1 xl:pl-[70px] xl:pr-[40px]">
        <div className="relative z-10 max-w-[520px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#F8547D] to-[#BB20E9] shadow-[0_0_12px_rgba(248,84,125,0.65)]" />
            <span className="text-[11px] font-semibold uppercase text-[#00BFFF] sm:text-xs">
              About Promonex Media
            </span>
          </div>

          <h2
            className="font-serif text-[28px] font-bold leading-[1.08] text-white sm:text-[38px] md:text-[27px] lg:text-[32px] xl:text-[40px] 2xl:text-[43px]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            <span className="block">Digital Marketing Agency</span>
            <span className="block">
              in Patna That <span className="text-[#00BFFF]">Helps</span>
            </span>
            <span className="block text-[#00BFFF]">Businesses Grow</span>
          </h2>

          <div className="mt-5 space-y-3 text-[14px] leading-[1.52] text-slate-200/90 sm:text-[15px]">
            <p>
              Promonex Media is a full-service digital marketing agency in Patna, helping businesses build a stronger online presence, generate quality leads and grow through result-focused digital strategies.
            </p>
            <p>
              From Performance Marketing and SEO to Social Media Marketing, Website Development and Creative Design, we bring strategy, execution and creative thinking together under one roof.
            </p>
            <p>
              Our approach is simple: understand your business, identify what is holding your digital growth back, and build marketing systems that are focused on visibility, leads and conversions.
            </p>
            <p>
              Whether you are a growing local business, an established brand or a new venture, Promonex Media works with you to build a digital presence that supports long-term business growth.
            </p>
          </div>

          <h3
            className="mt-5 font-serif text-[25px] font-bold leading-[1.08] text-white sm:text-[29px] lg:text-[32px]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            <span className="block">Let’s Build Your Digital</span>
            <span className="block text-[#00BFFF]">Growth Together</span>
          </h3>

        </div>

        <div
          className="relative z-10 w-full min-w-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Promonex Media image carousel"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[760px]">
            {SLIDES.map((slide, index) => {
              const position = (index - activeIndex + SLIDES.length) % SLIDES.length;
              const isActive = position === 0;

              return (
                <motion.div
                  key={slide.src.src}
                  initial={false}
                  animate={{
                    x: position === 0 ? "0%" : position === 1 ? "30%" : "47%",
                    y: position === 0 ? "0%" : position === 1 ? "3%" : "6%",
                    scale: position === 0 ? 1 : position === 1 ? 0.92 : 0.86,
                    opacity: position === 0 ? 1 : position === 1 ? 0.68 : 0.4,
                    filter:
                      position === 0
                        ? "brightness(1)"
                        : position === 1
                          ? "brightness(0.58)"
                          : "brightness(0.4)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 25,
                    mass: 0.85,
                  }}
                  style={{
                    zIndex: 30 - position,
                    pointerEvents: isActive ? "auto" : "none",
                    boxShadow: isActive
                      ? "0 0 34px rgba(233, 58, 148, 0.2), 0 18px 48px rgba(0, 0, 0, 0.42)"
                      : "0 12px 32px rgba(0, 0, 0, 0.28)",
                    background: FRAME_GRADIENT,
                  }}
                  className="absolute inset-y-0 left-0 w-[76%] rounded-[26px] p-[1.5px]"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#071335]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 767px) 76vw, (max-width: 1199px) 42vw, 40vw"
                      style={index === 0 ? { transform: "translateY(-4px) scale(1.06)" } : undefined}
                      className="object-cover"
                    />
                    <motion.div
                      aria-hidden="true"
                      animate={{ opacity: isActive ? 0 : position === 1 ? 0.12 : 0.2 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 bg-[#020B35]"
                    />
                  </div>
                </motion.div>
              );
            })}

            <button
              type="button"
              onClick={() => selectSlide(activeIndex - 1)}
              aria-label="Previous image"
              className="absolute left-[1.5%] top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#06112F]/55 text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8547D]"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              onClick={() => selectSlide(activeIndex + 1)}
              aria-label="Next image"
              className="absolute right-[24%] top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#06112F]/55 text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8547D]"
            >
              <ArrowRight size={19} />
            </button>
          </div>

          <div className="mt-4 flex w-[76%] justify-center gap-2.5">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src.src}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                  activeIndex === index
                    ? "w-4 bg-[#F8547D] shadow-[0_0_12px_rgba(248,84,125,0.45)]"
                    : "w-3.5 bg-[#5144B8] hover:bg-[#786BE4]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center md:col-span-2 xl:-translate-x-[15px]">
          <Link
            href="#contact"
            onMouseEnter={() => setAboutButtonHovered(true)}
            onMouseLeave={() => setAboutButtonHovered(false)}
            onFocus={() => setAboutButtonHovered(true)}
            onBlur={() => setAboutButtonHovered(false)}
            className="group inline-flex h-[54px] items-center justify-between gap-5 rounded-[14px] border border-violet-100/80 bg-white pl-5 pr-2 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:border-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(4,120,253,0.20)]"
          >
            <span className="text-[#00BFFF] group-hover:text-white">
              More About Promonex Media
            </span>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
              style={{
                color: aboutButtonHovered ? "#FFFFFF" : "#9C3ED2",
                borderColor: aboutButtonHovered ? "#FFFFFF" : "rgba(187, 32, 233, 0.25)",
                backgroundColor: aboutButtonHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
              }}
            >
              <ArrowRight size={18} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}