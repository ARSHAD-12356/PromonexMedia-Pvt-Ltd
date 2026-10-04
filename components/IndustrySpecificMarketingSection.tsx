"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

export default function IndustrySpecificMarketingSection() {
  const handleOpenConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-promonex-chat"));
    }
  };

  return (
    <section
      id="industry-specific-marketing"
      aria-labelledby="industry-specific-heading"
      className="relative w-full overflow-hidden bg-[#020B35] text-white py-14 sm:py-18 lg:py-22 font-['Poppins',sans-serif] selection:bg-[#00D9FF] selection:text-[#020B35]"
    >
      {/* ── Ambient Background Glows & Futuristic Mesh ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 75% 35%, rgba(0, 191, 255, 0.16) 0%, transparent 55%),
            radial-gradient(circle at 18% 70%, rgba(91, 60, 196, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(0, 217, 255, 0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* Decorative Subtle Concentric Curves - Top Left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 opacity-25 select-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="#00D9FF"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="200" cy="200" r="130" stroke="#168BFF" strokeWidth="1.5" />
      </svg>

      {/* Decorative Subtle Concentric Curves - Bottom Right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 opacity-30 select-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" stroke="#00D9FF" strokeWidth="1.5" />
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="#8B3DFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* ==================================================
              LEFT COLUMN: CONTENT & COPY (~48% width)
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Top Eyebrow with Cyan Horizontal Accent Line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase select-none">
                INDUSTRY-SPECIFIC DIGITAL MARKETING
              </span>
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#00D9FF] rounded-full inline-block" />
            </div>

            {/* Main Section Heading */}
            <h2
              id="industry-specific-heading"
              className="font-['Poppins',sans-serif] text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-white tracking-tight leading-[1.14] sm:leading-[1.16]"
            >
              Looking for a Digital Marketing Agency That Understands{" "}
              <span className="bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#B55FE6] bg-clip-text text-transparent">
                Your Industry?
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="mt-5 sm:mt-6 space-y-4 text-slate-300 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
              <p>
                Promonex works with businesses across ecommerce, healthcare,
                luxury, finance, real estate, B2B, professional services,
                technology, hospitality, education and many other sectors.
              </p>

              <p>
                Depending on the industry, our strategy can combine SEO, Google
                Ads, Meta Ads, social media marketing, ecommerce marketing,
                website development, conversion optimisation, analytics,
                WhatsApp marketing, content and Digital PR.
              </p>

              <p className="text-slate-300/95 font-medium">
                We do not believe every industry needs the same channel mix.
                The strategy should reflect how your customers search, compare,
                trust and buy.
              </p>
            </div>

            {/* CTA Button with Smooth Gradient Shift & Shimmer on Hover */}
            <div className="mt-7 sm:mt-8">
              <button
                type="button"
                onClick={handleOpenConsultation}
                aria-label="Discuss My Industry consultation"
                className="group relative inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-[#020B35] transition-all duration-500 hover:-translate-y-1 active:scale-95 cursor-pointer overflow-hidden shadow-[0_0_24px_rgba(0,217,255,0.4),0_4px_14px_rgba(0,163,255,0.25)] hover:shadow-[0_0_36px_rgba(0,217,255,0.7),0_8px_24px_rgba(22,139,255,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #00D9FF 0%, #00B4D8 30%, #168BFF 65%, #8B3DFF 100%)",
                  backgroundSize: "240% 100%",
                  backgroundPosition: "0% 0%",
                  transition:
                    "background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "100% 0%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "0% 0%";
                }}
              >
                {/* Smooth Sheen Flare Layer */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <span className="relative z-10 font-extrabold tracking-wide">
                  Discuss My Industry
                </span>
                <ArrowRight
                  size={18}
                  className="relative z-10 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT COLUMN: LARGE PREMIUM VISUAL CARD (~52% width)
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Outer Glowing Futuristic Frame */}
            <div className="relative w-full rounded-[28px] sm:rounded-[34px] p-2.5 sm:p-3.5 lg:p-4 bg-gradient-to-br from-[#0B1E63]/85 via-[#041040]/90 to-[#020B2E]/95 border border-[#00D9FF]/40 shadow-[0_0_50px_rgba(0,180,255,0.22)] backdrop-blur-xl group">
              {/* Inner Image Container with Rounded Corners */}
              <div className="relative w-full h-[380px] sm:h-[440px] md:h-[470px] lg:h-[500px] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-slate-900">
                {/* Professional Strategist with Clear Face (No Cards Obstructing Face) */}
                <Image
                  src="/assets/strategist-v2.jpg"
                  alt="Promonex Digital Marketing Strategist at Work"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  priority
                  className="object-cover object-[52%_35%] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/45 via-transparent to-[#020B35]/15 pointer-events-none" />

                {/* ==================================================
                    OVERLAY 1: Google Search & Top Ranking Panel (Top Left)
                    Continuous Animated Shimmer Sweep & Blinking Cursor
                    ================================================== */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 select-none pointer-events-none"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white/90 w-[205px] sm:w-[235px]">
                    {/* Google Logo */}
                    <div className="flex items-center gap-1">
                      <span className="text-[#4285F4] font-extrabold text-xs sm:text-sm">
                        G
                      </span>
                      <span className="text-[#EA4335] font-extrabold text-xs sm:text-sm">
                        o
                      </span>
                      <span className="text-[#FBBC05] font-extrabold text-xs sm:text-sm">
                        o
                      </span>
                      <span className="text-[#4285F4] font-extrabold text-xs sm:text-sm">
                        g
                      </span>
                      <span className="text-[#34A853] font-extrabold text-xs sm:text-sm">
                        l
                      </span>
                      <span className="text-[#EA4335] font-extrabold text-xs sm:text-sm">
                        e
                      </span>
                    </div>

                    {/* Search Bar with Blinking Cursor */}
                    <div className="bg-slate-100/90 rounded-full px-2.5 py-1 flex items-center justify-between text-[10px] sm:text-[10.5px] text-slate-700 mt-1.5 mb-2.5 border border-slate-200/80 shadow-inner">
                      <span className="truncate pr-1 flex items-center">
                        Digital Marketing Agency
                        <motion.span
                          className="inline-block w-[1.5px] h-3 bg-[#4285F4] ml-0.5"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </span>
                      <Search
                        size={11}
                        className="text-[#4285F4] flex-shrink-0"
                      />
                    </div>

                    {/* Top Ranking Position #1 with Animated Shimmer Sweep */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-4 h-4 rounded-full bg-[#168BFF] text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(22,139,255,0.6)]"
                        >
                          1
                        </motion.span>
                        <div className="flex-1 space-y-1">
                          {/* Continuous Animated Shimmer Bar */}
                          <div className="relative h-2 rounded-full w-4/5 overflow-hidden bg-slate-200">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-[#168BFF] via-[#00D9FF] to-[#168BFF]"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                          <div className="h-1 rounded-full w-full bg-slate-200" />
                        </div>
                      </div>

                      {/* Ranking #2 */}
                      <div className="flex items-center gap-2 opacity-60">
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 text-[9px] font-semibold flex items-center justify-center flex-shrink-0">
                          2
                        </span>
                        <div className="h-1.5 rounded-full w-3/4 bg-slate-200" />
                      </div>

                      {/* Ranking #3 */}
                      <div className="flex items-center gap-2 opacity-40">
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 text-[9px] font-semibold flex items-center justify-center flex-shrink-0">
                          3
                        </span>
                        <div className="h-1.5 rounded-full w-2/3 bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ==================================================
                    OVERLAY 2: SEO Ranking Card (Positioned to the far upper right, completely away from face)
                    CONTINUOUS ANIMATED 5-BAR HEIGHTS
                    ================================================== */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="absolute top-3 right-3 sm:top-5 sm:right-4 z-20 select-none pointer-events-none"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white/90 w-[120px] sm:w-[136px]">
                    <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-tight">
                      SEO Ranking
                    </span>

                    {/* Stat with Pulsing Radar Ping */}
                    <div className="flex items-center gap-1.5 mt-0.5 mb-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#16A34A] tracking-tight">
                        ↑ +85%
                      </span>
                    </div>

                    {/* 5-Bar Continuous Undulating Animation */}
                    <div className="flex items-end justify-between h-9 px-1">
                      {[
                        { key: 1, anim: ["25%", "60%", "35%", "55%", "25%"] },
                        { key: 2, anim: ["40%", "75%", "50%", "80%", "40%"] },
                        { key: 3, anim: ["55%", "35%", "85%", "65%", "55%"] },
                        { key: 4, anim: ["75%", "95%", "60%", "90%", "75%"] },
                        { key: 5, anim: ["90%", "70%", "100%", "85%", "90%"] },
                      ].map((bar, i) => (
                        <div
                          key={bar.key}
                          className="w-1.5 sm:w-2 h-9 flex items-end"
                        >
                          <motion.span
                            className="w-full rounded-t-sm bg-gradient-to-t from-[#00D9FF] to-[#168BFF]"
                            animate={{ height: bar.anim }}
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.18,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ==================================================
                    OVERLAY 3: Website Traffic Floating Card (Bottom Left)
                    CONTINUOUS ANIMATED PULSE WAVE & RADAR
                    ================================================== */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 select-none pointer-events-none"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] border border-white/90 w-[145px] sm:w-[170px]">
                    <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-tight">
                      Website Traffic
                    </span>

                    {/* Stat with Pulsing Radar Ping */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#16A34A] tracking-tight">
                        ↑ +62%
                      </span>
                    </div>

                    {/* Upward Line Graph with Continuous Pulse Dot */}
                    <div className="w-full h-9 mt-1">
                      <svg
                        viewBox="0 0 160 50"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="liveTrafficAreaGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#00D9FF"
                              stopOpacity="0.45"
                            />
                            <stop
                              offset="100%"
                              stopColor="#00D9FF"
                              stopOpacity="0.0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 42 Q 25 38, 45 32 T 85 28 T 120 16 T 156 8 L 156 50 L 0 50 Z"
                          fill="url(#liveTrafficAreaGrad)"
                        />
                        <path
                          d="M 0 42 Q 25 38, 45 32 T 85 28 T 120 16 T 156 8"
                          fill="none"
                          stroke="#00A3FF"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                        {/* Continuous Expanding Radar Ring */}
                        <motion.circle
                          cx="156"
                          cy="8"
                          r="6"
                          fill="none"
                          stroke="#00D9FF"
                          strokeWidth="1.2"
                          animate={{ r: [3, 9, 3], opacity: [0.8, 0, 0.8] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                        {/* Core Glowing Dot */}
                        <motion.circle
                          cx="156"
                          cy="8"
                          r="3.5"
                          fill="#00D9FF"
                          stroke="#FFFFFF"
                          strokeWidth="1.8"
                          animate={{
                            r: [3, 4.2, 3],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* ==================================================
                    OVERLAY 4: Google Ads Style Icon Widget (Mid-Right Edge)
                    CONTINUOUS FLOATING & 3D TILT
                    ================================================== */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-16 right-3 sm:bottom-20 sm:right-4 z-20 select-none pointer-events-none"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-white/90 flex items-center justify-center">
                    {/* Google Ads Polygon Icon */}
                    <svg
                      viewBox="0 0 48 48"
                      className="w-7 h-7 sm:w-8 sm:h-8"
                      fill="none"
                    >
                      <path
                        d="M12.5 35.5L24 15.5L35.5 35.5H12.5Z"
                        fill="#FBBC05"
                      />
                      <rect
                        x="7"
                        y="14"
                        width="8"
                        height="24"
                        rx="4"
                        transform="rotate(-30 7 14)"
                        fill="#4285F4"
                      />
                      <circle cx="36" cy="36" r="5" fill="#34A853" />
                    </svg>
                  </div>
                </motion.div>

                {/* Subtle Decorative Burst Lines (Top Right Frame Corner) */}
                <div className="pointer-events-none absolute top-2 right-2 text-[#00D9FF] opacity-75">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <line
                      x1="6"
                      y1="26"
                      x2="2"
                      y2="28"
                      stroke="#00D9FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="18"
                      y1="14"
                      x2="24"
                      y2="6"
                      stroke="#00D9FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="26"
                      y1="22"
                      x2="30"
                      y2="20"
                      stroke="#00D9FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
