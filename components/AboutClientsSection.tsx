"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  name: string;
  src: string;
  customClass?: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Anujarusiya", src: "/logos/Anujarusiya.png" },
  { name: "Bigrahpurm Developers", src: "/logos/Bigrahpurm Developers.jpeg" },
  { name: "Boombox", src: "/logos/Boombox.png" },
  { name: "BTS DISC", src: "/logos/BTS DISC.jpg" },
  { name: "Gangtar", src: "/logos/Gangtar.png" },
  { name: "Graham Immigration", src: "/logos/Graham Immigration.png" },
  { name: "Heroz", src: "/logos/Heroz.png", customClass: "scale-[1.35] origin-center" },
  { name: "Jansuraj", src: "/logos/Jansuraj.jpeg" },
  { name: "Kinetic EV", src: "/logos/Kinetic EV.png" },
  { name: "KSMCH", src: "/logos/KSMCH.png" },
  { name: "KUIKLO", src: "/logos/KUIKLO LOGO BLACK.jpg" },
  { name: "Living Style", src: "/logos/Living Style.png" },
  { name: "SAMCH", src: "/logos/SAMCH.png", customClass: "scale-[1.18] origin-center" },
  { name: "Srinivas", src: "/logos/Srinivas.png" },
  { name: "The Picante Cafe", src: "/logos/The Picante cafe.jpeg" },
  { name: "Tvayi", src: "/logos/Tvayi.PNG", customClass: "translate-y-1.5 sm:translate-y-2" },
];

export default function AboutClientsSection() {
  // Seamless loop by duplicating the list
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="client-experience"
      aria-label="Selected Client Experience"
      className="relative w-full bg-[#020B35] text-white font-['Poppins',sans-serif] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 border-t border-white/[0.08] overflow-hidden select-none"
    >
      {/* Subtle Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,217,255,0.07),transparent_70%)]"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mb-12 sm:mb-14">
        {/* Top Eyebrow with Cyan Accent Lines on Both Sides */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5"
        >
          <span className="w-8 sm:w-11 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
            SELECTED CLIENT EXPERIENCE
          </span>
          <span className="w-8 sm:w-11 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
        </motion.div>

        {/* Main Heading with "different industries." together and relaxed line spacing */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.35] sm:leading-[1.38] max-w-3xl mx-auto"
        >
          Trusted by businesses across <br className="hidden sm:inline" />
          <span className="text-[#00D9FF] drop-shadow-[0_0_20px_rgba(0,217,255,0.4)]">
            different
          </span>{" "}
          industries.
        </motion.h2>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-normal"
        >
          We&apos;re proud to work with forward-thinking businesses across diverse
          industries, helping them build stronger brands, generate quality leads
          and achieve measurable growth through result-driven digital marketing.
        </motion.p>
      </div>

      {/* Marquee Container with Soft Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#020B35] via-[#020B35]/90 to-transparent z-10"
        />

        {/* Right Fade Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#020B35] via-[#020B35]/90 to-transparent z-10"
        />

        {/* Continuously Moving Logo Track */}
        <div className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-about-client-marquee hover:[animation-play-state:paused]">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group shrink-0 flex flex-col items-center justify-center min-w-[130px] sm:min-w-[160px] md:min-w-[180px] cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Logo Image */}
              <div className="h-11 sm:h-12 md:h-14 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`${logo.name} Client Logo`}
                  width={180}
                  height={60}
                  className={`max-h-full w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[180px] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 rounded-md ${
                    logo.customClass || ""
                  }`}
                />
              </div>

              {/* Logo Name Label */}
              <span className="text-xs sm:text-[12.5px] text-slate-400 font-medium tracking-wide mt-2 sm:mt-2.5 transition-colors duration-200 group-hover:text-white text-center">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes aboutClientMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-about-client-marquee {
          display: flex;
          width: max-content;
          animation: aboutClientMarquee 38s linear infinite;
        }
        .animate-about-client-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
