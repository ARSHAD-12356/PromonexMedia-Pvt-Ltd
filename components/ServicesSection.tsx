"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowDownRight, ArrowRight } from "lucide-react";

type RevealDirection = "bottom" | "top";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  revealFrom: RevealDirection;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "Data-driven Google & Meta Ads campaigns designed to generate quality leads, sales and measurable business growth.",
    image: "/service assets/Performance Marketing Dashboard Workspace.png",
    revealFrom: "bottom",
  },
  {
    number: "02",
    title: "SEO Services",
    description:
      "Strategic SEO focused on improving search visibility, organic traffic and high-intent enquiries.",
    image: "/service assets/SEO Performance Analytics Dashboard.png",
    revealFrom: "top",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Creative content, social media management and platform-specific strategies that help brands build visibility and engage their audience.",
    image: "/service assets/Social Media Marketing Dashboard.png",
    revealFrom: "bottom",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Modern, responsive and conversion-focused websites built to represent your brand and turn visitors into customers.",
    image: "/service assets/Modern Website Development Workspace.png",
    revealFrom: "top",
  },
  {
    number: "05",
    title: "Creative Design",
    description:
      "Scroll-stopping social media creatives, ad designs, brand visuals and marketing assets designed to make your business stand out.",
    image: "/service assets/Creative Design Workspace.png",
    revealFrom: "bottom",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const initialY = service.revealFrom === "top" ? -100 : 100;

  useEffect(() => {
    if (previewRef.current) {
      gsap.set(previewRef.current, { yPercent: initialY });
    }
  }, [initialY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        { yPercent: initialY },
        { yPercent: 0, duration: 0.9, ease: "power3.out", overwrite: "auto" },
      );
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        yPercent: initialY,
        duration: 0.65,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#020B35",
        borderColor: "transparent",
        boxShadow: isHovered
          ? "0 14px 35px rgba(60, 70, 160, 0.12), 0 0 18px rgba(187, 32, 233, 0.08)"
          : "0 12px 35px rgba(60, 70, 160, 0.08)",
        transition:
          "background 350ms ease, box-shadow 350ms ease, transform 350ms ease",
      }}
      className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-[24px] border border-transparent p-6 transition-[box-shadow] duration-[350ms] ease-out sm:p-7 lg:min-h-[400px] xl:col-span-2 xl:h-[420px] xl:min-h-0 xl:p-9 2xl:p-10 ${
        index === 3 ? "xl:col-start-2" : index === 4 ? "xl:col-start-4" : ""
      }`}
    >
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[23px]"
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, 100vw"
          className="object-cover"
        />
      </div>
      <span
        className="font-poppins text-[40px] font-bold leading-none text-white sm:text-[44px]"
      >
        {service.number}
      </span>
      <span className="mt-6 h-[2px] w-11 bg-gradient-to-r from-[#F8547D] via-[#BB20E9] to-[#4AE1FC]" />
      <h3 className="mt-5 font-poppins text-[23px] font-bold leading-[1.08] text-white sm:text-[25px]">
        {service.title}
      </h3>
      <p className="mt-5 text-[15px] leading-[1.55] text-white/85 sm:text-base">
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
            color: "#FFFFFF",
            borderColor: isHovered ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.35)",
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "transparent",
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
      className="relative isolate flex min-h-[720px] w-full items-center overflow-hidden bg-white py-20 sm:py-24 xl:min-h-[950px] xl:py-28"
    >
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
            className="mt-5 font-poppins text-[44px] font-bold uppercase leading-[0.98] text-[#09183D] sm:text-[54px] xl:text-[68px]"
          >
            What Do{" "}
            <span className="bg-[linear-gradient(100deg,#FA5679_0%,#D62BD5_55%,#187DF4_100%)] bg-clip-text text-transparent">
              We Do?
            </span>
          </h2>

          <p className="mt-5 max-w-[740px] text-[15px] leading-[1.5] text-[#52617E] sm:text-[17px]">
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