"use client";

import { motion, type Variants } from "framer-motion";
import { Headphones, MessageCircle, Phone } from "lucide-react";
import LocationContactForm from "@/components/LocationContactForm";

const EASE = [0.22, 1, 0.36, 1] as const;
const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

interface ServiceContactSectionProps {
  /** Highlighted service name in the heading, e.g. "Email Marketing" */
  topic: string;
  /** Who they talk to, e.g. "Consultant" */
  role?: string;
  /** Used in the paragraph: "Our team of {teamLabel} are here to help!" */
  teamLabel: string;
  /** Optional custom paragraph description */
  description?: string;
  /** Pre-selected option in the enquiry form (must match one of its <option> values) */
  defaultService?: string;
}

// "Let's talk with experienced {topic} {role}" + the homepage WhatsApp enquiry form (shared by service pages)
export default function ServiceContactSection({
  topic,
  role = "Consultant",
  teamLabel,
  description,
  defaultService = "",
}: ServiceContactSectionProps) {
  const headingId = `contact-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <section
      aria-labelledby={headingId}
      className="overflow-hidden bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: content, each element animates in turn */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[560px]"
        >
          <motion.span
            variants={fadeUp}
            className="flex size-16 items-center justify-center rounded-2xl bg-[#061A40] text-[#00C8EF] shadow-[0_12px_30px_rgba(6,26,64,0.25)]"
          >
            <Headphones size={32} strokeWidth={2.2} aria-hidden="true" />
          </motion.span>

          <motion.h2
            variants={fadeUp}
            id={headingId}
            className="mt-7 text-[36px] font-bold leading-[1.18] tracking-tight sm:text-[46px] lg:text-[54px]"
          >
            Let&apos;s talk with experienced <span className="text-[#00B8E6]">{topic}</span> {role}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-[16px] leading-[1.8] text-[#4A5A75] sm:text-[18px]">
            {description || (
              <>
                Ready to take your online presence to the next level? Our team of {teamLabel} are here to help!
                Fill out the form, and let&apos;s start the journey towards achieving your digital goals.
              </>
            )}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-10 text-[20px] font-semibold text-[#0478FD]">
            Urgent?
          </motion.p>
          <motion.div variants={fadeUp} className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="tel:+917061941818"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-[17px] font-semibold text-[#061A40] shadow-[0_10px_26px_rgba(6,26,64,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#061A40] hover:text-white sm:text-[19px]"
            >
              <Phone size={18} className="text-[#0478FD] transition-colors group-hover:text-[#00C8EF]" aria-hidden="true" />
              Call us +91 70619 41818
            </a>
            <a
              href="https://wa.me/917061941818"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex size-[52px] items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_10px_26px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={22} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: "Fill the form" note + the same enquiry form as the homepage */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative pt-16 sm:pt-20"
        >
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="pointer-events-none absolute left-2 top-0 flex items-start gap-1 sm:-left-10"
          >
            <span className="mt-1 rotate-[-8deg] text-[22px] font-semibold italic leading-tight text-[#061A40] sm:text-[24px]">
              Fill the
              <br />
              form
            </span>
            <svg viewBox="0 0 80 90" className="mt-8 h-16 w-14 text-[#061A40] sm:h-20 sm:w-16" fill="none">
              <motion.path
                d="M8 4 C 4 40, 22 72, 66 78"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.8 }}
              />
              <path d="M56 68 L 68 78 L 55 87" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <LocationContactForm defaultService={defaultService} />
        </motion.div>
      </div>
    </section>
  );
}
