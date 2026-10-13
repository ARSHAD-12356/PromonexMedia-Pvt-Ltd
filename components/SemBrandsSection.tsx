"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientBrand {
  name: string;
  src: string;
  scale?: string;
}

const BRANDS: ClientBrand[] = [
  { name: "Kinetic EV", src: "/logos/clean/Kinetic EV.png", scale: "max-h-10 sm:max-h-12" },
  { name: "Graham Immigration", src: "/logos/clean/Graham Immigration.png", scale: "max-h-11 sm:max-h-13" },
  { name: "Boombox", src: "/logos/clean/Boombox.png", scale: "max-h-12 sm:max-h-14" },
  { name: "Living Style", src: "/logos/clean/Living Style.png", scale: "max-h-12 sm:max-h-14" },
  { name: "Gangtar", src: "/logos/clean/Gangtar.png", scale: "max-h-12 sm:max-h-14" },
  { name: "KSMCH", src: "/logos/KSMCH.png", scale: "max-h-12 sm:max-h-14" },
  { name: "Srinivas", src: "/logos/Srinivas.png", scale: "max-h-12 sm:max-h-14" },
  { name: "SAMCH", src: "/logos/SAMCH.png", scale: "max-h-12 sm:max-h-14" },
];

export default function SemBrandsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A1232] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif] select-none border-t border-slate-100">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0A1232] tracking-tight leading-tight">
            Brands That We’ve Served Over the last Few Years
          </h2>
          <p className="mt-3.5 text-sm sm:text-[15.5px] text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Diverse clientele. Tailored solutions. Reliable results. Your success, our priority. Join us now.
          </p>
        </motion.div>

        {/* 4x2 Clean Square Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-4xl lg:max-w-5xl mx-auto mt-12 sm:mt-16"
        >
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.25 } }}
              className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 aspect-square rounded-2xl bg-white border border-slate-200/80 hover:border-[#00D9FF]/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,217,255,0.18)] flex items-center justify-center p-4 sm:p-5 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={`${brand.name} client logo`}
                width={160}
                height={80}
                className={`${brand.scale || "max-h-12"} w-auto max-w-[85%] object-contain transition-all duration-300 drop-shadow-sm`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
