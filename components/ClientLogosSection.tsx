"use client";

import React from "react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
  customClass?: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Anujarusiya", src: "/logos/clean/Anujarusiya.png" },
  { name: "Bigrahpurm Developers", src: "/logos/clean/Bigrahpurm Developers.png" },
  { name: "Boombox", src: "/logos/clean/Boombox.png" },
  { name: "BTS DISC", src: "/logos/clean/BTS DISC.png" },
  { name: "Gangtar", src: "/logos/clean/Gangtar.png" },
  { name: "Graham Immigration", src: "/logos/clean/Graham Immigration.png" },
  { name: "Heroz", src: "/logos/clean/Heroz.png", customClass: "scale-[1.35] origin-center" },
  { name: "Jansuraj", src: "/logos/clean/Jansuraj.png" },
  { name: "Kinetic EV", src: "/logos/clean/Kinetic EV.png" },
  { name: "KSMCH", src: "/logos/clean/KSMCH.png" },
  { name: "KUIKLO", src: "/logos/clean/KUIKLO LOGO BLACK.png" },
  { name: "Living Style", src: "/logos/clean/Living Style.png" },
  { name: "SAMCH", src: "/logos/clean/SAMCH.png" },
  { name: "Srinivas G Medical College & Hospital", src: "/logos/clean/Srinivas G Medical College & Hospital.png" },
  { name: "The Picante Cafe", src: "/logos/clean/The Picante cafe.png" },
  { name: "Tvayi", src: "/logos/clean/Tvayi.png", customClass: "translate-y-1.5 sm:translate-y-2" },
];

export default function ClientLogosSection() {
  // Duplicate array to create a continuous, mathematically seamless 100% infinite marquee
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      aria-label="Client Logos and Trusted Brands"
      className="relative w-full overflow-hidden bg-[#020B35] py-7 sm:py-9 md:py-11 border-t border-b border-white/[0.06] select-none"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,217,255,0.06),transparent_70%)]"
      />

      {/* Left Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#020B35] via-[#020B35]/90 to-transparent z-10"
      />

      {/* Right Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#020B35] via-[#020B35]/90 to-transparent z-10"
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
                className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain transition-all duration-300 opacity-80 hover:opacity-100 ${
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
