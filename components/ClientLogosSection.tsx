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

export default function ClientLogosSection() {
  // Duplicate array to create a continuous, mathematically seamless 100% infinite marquee
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative w-full overflow-hidden bg-white pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-14 border-t border-b border-slate-100 select-none font-['Poppins',sans-serif]"
    >
      {/* Section Header: Our Clients */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mb-8 sm:mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Label with Signature Gradient Accent Lines */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#F8547D] to-[#4AE1FC] shadow-[0_0_10px_rgba(74,225,252,0.35)]" />
            <p className="bg-[linear-gradient(90deg,#F8547D_0%,#BD31E2_55%,#4AE1FC_100%)] bg-clip-text text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-transparent">
              TRUSTED PARTNERS
            </p>
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#4AE1FC] to-[#F8547D] shadow-[0_0_10px_rgba(248,84,125,0.3)]" />
          </div>

          {/* Main Heading "Our Clients" */}
          <h2
            id="clients-heading"
            className="mt-3 sm:mt-4 font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold uppercase leading-[1.08] text-[#09183D] tracking-tight"
          >
            Our{" "}
            <span className="bg-[linear-gradient(100deg,#FA5679_0%,#D62BD5_55%,#187DF4_100%)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </motion.div>
      </div>
      {/* Left Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10"
      />

      {/* Right Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10"
      />

      {/* Infinite Horizontal Marquee Track - Direct Logos without Cards */}
      <div className="relative w-full flex items-center overflow-hidden">
        <div className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-client-marquee hover:[animation-play-state:paused]">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="relative shrink-0 flex items-center justify-center transition-all duration-300 transform-gpu hover:scale-105 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Client Logo`}
                width={180}
                height={60}
                className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain transition-all duration-300 opacity-90 hover:opacity-100 rounded-md ${
                  logo.customClass || ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-client-marquee {
          display: flex;
          width: max-content;
          animation: clientMarquee 36s linear infinite;
        }
        .animate-client-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
