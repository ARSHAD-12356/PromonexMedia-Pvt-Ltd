"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface SocialItem {
  id: string;
  name: string;
  href: string;
  bgClass: string;
  hoverGlow: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/promonexmedia",
    bgClass: "bg-[#1877F2]",
    hoverGlow: "rgba(24, 119, 242, 0.55)",
    icon: ({ className }) => (
      <svg
        className={className || "w-5 h-5 sm:w-6 sm:h-6"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "x",
    name: "X",
    href: "https://x.com/promonexmedia",
    bgClass: "bg-[#000000]",
    hoverGlow: "rgba(0, 0, 0, 0.5)",
    icon: ({ className }) => (
      <svg
        className={className || "w-5 h-5 sm:w-6 sm:h-6"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/promonexmedia",
    bgClass: "bg-[#0A66C2]",
    hoverGlow: "rgba(10, 102, 194, 0.55)",
    icon: ({ className }) => (
      <svg
        className={className || "w-5 h-5 sm:w-6 sm:h-6"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/promonexmedia",
    bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverGlow: "rgba(225, 48, 108, 0.55)",
    icon: ({ className }) => (
      <svg
        className={className || "w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-none stroke-[2]"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" stroke="#FFFFFF" />
      </svg>
    ),
  },
];

// Stagger animation container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Item animation
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function ContactSocialSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section
      id="contact-social-section"
      aria-labelledby="contact-social-heading"
      className="relative w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20 font-['Poppins',sans-serif] overflow-hidden"
    >
      {/* Subtle Ambient Background Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 217, 255, 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Animated Heading on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          <h2
            id="contact-social-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#020B35] tracking-tight"
          >
            <span className="relative inline-block">
              Follow
              {/* Promonex Cyan Underline accent matching reference underline style */}
              <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-[#00D9FF] to-[#0478FD] rounded-full shadow-[0_0_8px_rgba(0,217,255,0.4)]" />
            </span>{" "}
            us on social media
          </h2>
        </motion.div>

        {/* Animated Social Icons Row on Scroll - Real Brand Full Circles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-7 sm:mt-9 flex items-center justify-center gap-4 sm:gap-6 lg:gap-7 flex-wrap"
        >
          {SOCIAL_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Promonex Media on ${item.name}`}
                whileHover={{
                  y: -6,
                  scale: 1.14,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileTap={{ scale: 0.94 }}
                className={`group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.28)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D9FF] ${item.bgClass}`}
              >
                  {/* Glowing Ambient Aura on Hover */}
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                    style={{
                      boxShadow: `0 0 22px ${item.hoverGlow}`,
                    }}
                  />

                  {/* Real Crisp White Social Icon */}
                  <div className="relative text-white flex items-center justify-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
                    {item.icon({ className: "w-5 h-5 sm:w-6 sm:h-6" })}
                  </div>
                </motion.a>

                {/* Floating Tooltip on Hover */}
                {activeTooltip === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.9 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#020B35] text-white text-[11px] font-semibold rounded-md shadow-lg border border-[#00D9FF]/40 whitespace-nowrap pointer-events-none z-20"
                  >
                    <span>{item.name}</span>
                    {/* Downward triangle pointer */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#020B35] border-r border-b border-[#00D9FF]/40 transform rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
}
