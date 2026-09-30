"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "Data-driven Google & Meta Ads campaigns designed to generate quality leads, sales and measurable business growth.",
  },
  {
    number: "02",
    title: "SEO Services",
    description:
      "Strategic SEO focused on improving search visibility, organic traffic and high-intent enquiries.",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Creative content, social media management and platform-specific strategies that help brands build visibility and engage their audience.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Modern, responsive and conversion-focused websites built to represent your brand and turn visitors into customers.",
  },
  {
    number: "05",
    title: "Creative Design",
    description:
      "Scroll-stopping social media creatives, ad designs, brand visuals and marketing assets designed to make your business stand out.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "#F8547D" : "rgba(8, 15, 53, 0.85)",
        borderColor: isHovered ? "rgba(125, 126, 255, 0.8)" : "rgba(70, 81, 139, 0.55)",
        boxShadow: isHovered
          ? "0 10px 28px rgba(92, 61, 177, 0.18)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        transition:
          "background-color 350ms ease, border-color 350ms ease, box-shadow 350ms ease",
      }}
      className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-[18px] border border-[#46518B]/55 p-6 transition-[border-color,box-shadow] duration-300 sm:p-7 lg:min-h-[400px] xl:col-span-2 xl:h-[420px] xl:min-h-0 xl:p-9 2xl:p-10 ${
        index === 3 ? "xl:col-start-2" : index === 4 ? "xl:col-start-4" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[17px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(116, 105, 234, 0.8), 0 0 16px rgba(74, 113, 252, 0.14), 0 0 15px rgba(151, 69, 217, 0.12)",
        }}
      />
      <span
        className="font-sans text-[40px] font-bold leading-none transition-colors duration-300 sm:text-[44px]"
        style={{ color: isHovered ? "#FFFFFF" : "rgba(101, 112, 188, 0.8)" }}
      >
        {service.number}
      </span>
      <span className="mt-6 h-[2px] w-11 bg-gradient-to-r from-[#F8547D] via-[#BB20E9] to-[#4AE1FC]" />
      <h3 className="mt-5 font-serif text-[23px] font-bold leading-[1.08] text-slate-50 sm:text-[25px]">
        {service.title}
      </h3>
      <p className="mt-5 text-[15px] leading-[1.55] text-slate-200/90 sm:text-base">
        {service.description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <Link
          href="#contact"
          className="relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(187,32,233,0.2)] transition-shadow duration-300 hover:shadow-[0_7px_18px_rgba(63,60,180,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[linear-gradient(100deg,#F8547D_0%,#BB20E9_55%,#187DF4_100%)] transition-opacity duration-[350ms]"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[linear-gradient(100deg,#6536A8_0%,#4543B4_55%,#155FC5_100%)] transition-opacity duration-[350ms]"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
          <span className="relative z-10">Get Details</span>
        </Link>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
          style={{
            color: isHovered ? "#FFFFFF" : "rgba(226, 232, 240, 0.9)",
            borderColor: isHovered ? "rgba(255, 255, 255, 0.8)" : "rgba(89, 105, 176, 0.55)",
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        >
          <ArrowDownRight size={20} strokeWidth={1.7} />
        </span>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate flex min-h-[720px] w-full items-center overflow-hidden bg-[#020B35] py-20 sm:py-24 xl:min-h-[950px] xl:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 12%, rgba(26, 64, 155, 0.2), transparent 44%), radial-gradient(ellipse at 8% 90%, rgba(106, 30, 162, 0.1), transparent 30%), radial-gradient(ellipse at 94% 75%, rgba(7, 75, 166, 0.12), transparent 34%)",
        }}
      />

      <div className="relative mx-auto flex w-[96%] max-w-[1440px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#F8547D] to-[#4AE1FC] shadow-[0_0_10px_rgba(74,225,252,0.35)]" />
            <p className="bg-[linear-gradient(90deg,#F8547D_0%,#BD31E2_55%,#4AE1FC_100%)] bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent sm:text-sm">
              Our Services
            </p>
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#4AE1FC] to-[#F8547D] shadow-[0_0_10px_rgba(248,84,125,0.3)]" />
          </div>

          <h2
            id="services-heading"
            className="mt-5 font-serif text-[44px] font-bold uppercase leading-[0.98] text-slate-50 sm:text-[54px] xl:text-[68px]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            What Do{" "}
            <span className="bg-[linear-gradient(100deg,#FA5679_0%,#D62BD5_55%,#187DF4_100%)] bg-clip-text text-transparent">
              We Do?
            </span>
          </h2>

          <p className="mt-5 max-w-[740px] text-[15px] leading-[1.5] text-slate-200/90 sm:text-[17px]">
            We help businesses grow with result-focused digital marketing services designed
            <br className="hidden sm:block" /> to increase visibility, generate leads and drive real business growth.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid w-full max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-5 xl:gap-y-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        <Link
          href="#contact"
          className="group mt-9 inline-flex h-[56px] items-center justify-between gap-7 rounded-full border border-violet-100/80 bg-white pl-7 pr-2.5 text-sm font-semibold shadow-[0_8px_24px_rgba(210,43,210,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(210,43,210,0.32)]"
        >
          <span className="bg-[linear-gradient(90deg,#733CDC_0%,#D62CE3_100%)] bg-clip-text text-transparent">
            Explore Our Services
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9F75F2]/45 text-[#7652D1] transition-all duration-300 group-hover:border-[#D62CE3]/70 group-hover:text-[#D62CE3]">
            <ArrowRight size={18} strokeWidth={1.8} />
          </span>
        </Link>
      </div>
    </section>
  );
}