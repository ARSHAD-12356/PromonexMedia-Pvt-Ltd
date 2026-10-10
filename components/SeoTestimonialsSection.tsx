"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  review: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "rohit-kumar",
    name: "Rohit Kumar",
    role: "Founder, PatnaMart",
    initials: "RK",
    avatarBg: "from-[#00D9FF] to-[#1D4ED8]",
    review:
      "Promonex Media has been instrumental in improving our website's visibility and bringing in quality leads. Their SEO strategies are result-driven and the team is always supportive. Highly recommended!",
    rating: 5,
  },
  {
    id: "priya-singh",
    name: "Priya Singh",
    role: "Marketing Head, EduNext",
    initials: "PS",
    avatarBg: "from-[#38BDF8] to-[#0478FD]",
    review:
      "We've been working with Promonex Media for a few months now. Their team is creative, professional, and always up-to-date with the latest SEO trends. We've seen a noticeable growth in our organic traffic and brand visibility. Great experience!",
    rating: 5,
  },
  {
    id: "amit-verma",
    name: "Amit Verma",
    role: "Owner, Verma Enterprises",
    initials: "AV",
    avatarBg: "from-[#00C9FF] to-[#0D3282]",
    review:
      "The team at Promonex Media understands our business goals and delivers strategies that actually work. Their local SEO expertise in Patna has helped us reach more customers and grow our business significantly.",
    rating: 5,
  },
  {
    id: "alok-ranjan",
    name: "Dr. Alok Ranjan",
    role: "Director, CareWell Health Patna",
    initials: "AR",
    avatarBg: "from-[#00D9FF] to-[#1E40AF]",
    review:
      "Promonex Media revamped our local search ranking and patient inquiries skyrocketed. Their transparency and weekly ranking reports give us immense confidence in their SEO team.",
    rating: 5,
  },
  {
    id: "sneha-roy",
    name: "Sneha Roy",
    role: "Co-Founder, StyleBoutique Bihar",
    initials: "SR",
    avatarBg: "from-[#38BDF8] to-[#2563EB]",
    review:
      "Their e-commerce SEO optimization helped us rank on page 1 for high-intent queries across Eastern India. Organic revenue has grown by over 140% in just five months.",
    rating: 5,
  },
  {
    id: "vikram-malhotra",
    name: "Vikram Malhotra",
    role: "Managing Director, Apex Infra",
    initials: "VM",
    avatarBg: "from-[#00E5FF] to-[#1D4ED8]",
    review:
      "Outstanding technical SEO and keyword strategy. Promonex Media eliminated all our indexing issues and established strong domain authority in record time.",
    rating: 5,
  },
];

// Double the list for seamless continuous infinite looping
const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function SeoTestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev === 0 ? 2 : prev - 1));
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setActivePageIndex((prev) => (prev === 2 ? 0 : prev + 1));
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section
      id="seo-testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full bg-white text-[#020B35] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADING AREA (Centered)                           */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow with cyan line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4"
          >
            <span className="w-8 sm:w-10 h-[2.5px] bg-[#00D9FF] rounded-full shrink-0" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase select-none">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#020B35] tracking-tight leading-[1.18]"
          >
            Trusted by Businesses.{" "}
            <span className="text-[#00D9FF]">Driven by Results.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-slate-500 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Discover how Promonex Media helps businesses grow through smarter digital marketing and measurable results in Patna and beyond.
          </motion.p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CONTINUOUS RIGHT-MOVING CAROUSEL TRACK                    */}
      {/* Cards automatically travel from left to right             */}
      {/* ========================================================= */}
      <div
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Outer scrolling container with right-moving CSS animation */}
        <div
          ref={trackRef}
          className="flex w-max gap-6 sm:gap-7 items-stretch px-4 select-none"
          style={{
            animation: "promonexScrollRight 42s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {LOOPED_TESTIMONIALS.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className="relative flex flex-col justify-between w-[330px] sm:w-[380px] lg:w-[410px] min-h-[380px] sm:min-h-[410px] rounded-[22px] bg-gradient-to-b from-[#06174A] to-[#030D30] p-6 sm:p-8 text-white shadow-[0_16px_40px_rgba(2,11,53,0.18)] border border-white/[0.08] shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Subtle upper ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#00D9FF]/[0.07] blur-3xl"
              />

              {/* Card Header: Cyan Quote Icon & Decorative Large Quote */}
              <div className="relative flex items-center justify-between mb-5">
                {/* Cyan Circular Quote Badge */}
                <div
                  aria-hidden="true"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00D9FF] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,217,255,0.35)] shrink-0"
                >
                  <svg
                    className="w-5 h-5 fill-white stroke-none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Large Low-Opacity Decorative Quote */}
                <svg
                  aria-hidden="true"
                  className="w-16 h-16 sm:w-20 sm:h-20 fill-white/[0.08] stroke-none select-none pointer-events-none -mt-2 -mr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Middle Testimonial Review Text */}
              <p className="text-slate-200 text-sm sm:text-[14.5px] leading-[1.68] font-normal flex-1 mb-6">
                {item.review}
              </p>

              {/* Bottom Client Details Section */}
              <div className="relative pt-4">
                {/* Thin subtle divider separating text from client details */}
                <div className="w-full h-[1px] bg-white/[0.12] mb-4 sm:mb-5" />

                <div className="flex items-center justify-between gap-3">
                  {/* Client Avatar + Name & Designation */}
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Neutral initials-based circular avatar */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr ${item.avatarBg} p-[1.5px] shrink-0 shadow-sm`}>
                      <div className="w-full h-full rounded-full bg-[#06144A] flex items-center justify-center text-xs sm:text-sm font-bold text-white tracking-wider">
                        {item.initials}
                      </div>
                    </div>

                    <div className="flex flex-col min-w-0">
                      {/* CRITICAL: Plain text only, absolutely NO underline */}
                      <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white tracking-tight leading-snug no-underline truncate select-none [text-decoration:none!important]">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400 font-normal leading-tight mt-0.5 truncate">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* 5 Cyan Stars Aligned on Right */}
                  <div
                    className="flex items-center gap-0.5 text-[#00D9FF] shrink-0"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#00D9FF] stroke-none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM NAVIGATION CONTROLS (Matching Reference Image)     */}
      {/* Left arrow + Center cyan pagination dots + Right arrow    */}
      {/* ========================================================= */}
      <div className="mx-auto max-w-7xl px-4 mt-10 sm:mt-12 flex items-center justify-center gap-6">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonials"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F0F6FE] hover:bg-[#E0EEFE] active:scale-95 text-[#1D4ED8] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
        >
          <ChevronLeft size={22} className="stroke-[2.4]" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2" aria-hidden="true">
          <span
            className={`transition-all duration-300 rounded-full h-2.5 ${
              activePageIndex === 0
                ? "w-8 bg-[#00D9FF]"
                : "w-2.5 bg-[#00D9FF]/35"
            }`}
          />
          <span
            className={`transition-all duration-300 rounded-full h-2.5 ${
              activePageIndex === 1
                ? "w-8 bg-[#00D9FF]"
                : "w-2.5 bg-[#00D9FF]/35"
            }`}
          />
          <span
            className={`transition-all duration-300 rounded-full h-2.5 ${
              activePageIndex === 2
                ? "w-8 bg-[#00D9FF]"
                : "w-2.5 bg-[#00D9FF]/35"
            }`}
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F0F6FE] hover:bg-[#E0EEFE] active:scale-95 text-[#1D4ED8] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
        >
          <ChevronRight size={22} className="stroke-[2.4]" />
        </button>
      </div>

      {/* Embedded CSS for smooth hardware-accelerated right-moving loop */}
      <style jsx>{`
        @keyframes promonexScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
