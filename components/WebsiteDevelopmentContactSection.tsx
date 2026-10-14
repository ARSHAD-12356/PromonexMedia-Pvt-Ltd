"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import LocationContactForm from "@/components/LocationContactForm";

// "Let's talk" contact block for the Website Development page.
// Left: consultant pitch + urgent call line. Right: the same WhatsApp enquiry form used on the homepage.
export default function WebsiteDevelopmentContactSection() {
  return (
    <section
      aria-labelledby="wd-contact-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[560px]"
        >
          <Headphones size={46} strokeWidth={2.4} className="text-[#00C8EF]" aria-hidden="true" />

          <h2
            id="wd-contact-heading"
            className="mt-6 text-[36px] font-bold leading-[1.2] tracking-tight sm:text-[46px] lg:text-[54px]"
          >
            Let&apos;s talk with{" "}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[0.12em] -z-0 h-[0.32em] rounded-sm bg-[#FFE1C7]"
              />
              <span className="relative">experienced</span>
            </span>{" "}
            <span className="text-[#00A8D6]">Web</span> Consultant
          </h2>

          <p className="mt-6 text-[16px] leading-[1.8] text-[#3A4A66] sm:text-[18px]">
            Ready to take your online presence to the next level? Our team of experts is here to help! Fill out the
            form, and let&apos;s start the journey towards achieving your digital goals.
          </p>

          <p className="mt-10 text-[20px] font-semibold text-[#F5A300]">Urgent?</p>
          <p className="mt-2 text-[18px] text-[#3A4A66] sm:text-[20px]">
            Call us{" "}
            <a
              href="tel:+917061941818"
              className="ml-1 font-semibold text-[#061A40] transition-colors hover:text-[#00A8D6]"
            >
              +91 70619 41818
            </a>
          </p>
        </motion.div>

        {/* Right: "Fill the form" note + homepage enquiry form (WhatsApp) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative pt-16 sm:pt-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute left-2 top-0 flex items-start gap-1 sm:-left-10">
            <span className="mt-1 rotate-[-8deg] text-[22px] font-semibold italic leading-tight text-[#061A40] sm:text-[24px]">
              Fill the
              <br />
              form
            </span>
            <svg viewBox="0 0 80 90" className="mt-8 h-16 w-14 text-[#061A40] sm:h-20 sm:w-16" fill="none">
              <path
                d="M8 4 C 4 40, 22 72, 66 78"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <path
                d="M56 68 L 68 78 L 55 87"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <LocationContactForm defaultService="Website development" />
        </motion.div>
      </div>
    </section>
  );
}
