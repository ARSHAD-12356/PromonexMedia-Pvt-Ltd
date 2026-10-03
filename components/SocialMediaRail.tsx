"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

/**
 * SOCIAL LINKS CONFIGURATION
 * Easily update the URLs, labels, or targets below.
 */
export interface SocialLinkConfig {
  id: string;
  name: string;
  href: string;
  isExternal?: boolean;
  action?: "link" | "chat";
  brandColor: string;
  hoverGlow: string;
  // Local or remote image URL (optional)
  iconImgUrl?: string;
  // Custom SVG render
  iconType: "facebook" | "instagram" | "linkedin" | "whatsapp" | "ai";
}

export const SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    id: "facebook",
    name: "Facebook",
    // Replace with your Facebook page URL
    href: "https://www.facebook.com/promonexmedia",
    isExternal: true,
    action: "link",
    brandColor: "#1877F2",
    hoverGlow: "rgba(24, 119, 242, 0.65)",
    iconImgUrl: "/assets/fb-ref.jpg",
    iconType: "facebook",
  },
  {
    id: "instagram",
    name: "Instagram",
    // Replace with your Instagram profile URL
    href: "https://www.instagram.com/promonexmedia",
    isExternal: true,
    action: "link",
    brandColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    hoverGlow: "rgba(220, 39, 67, 0.65)",
    iconImgUrl: "/assets/instagram-icon.png",
    iconType: "instagram",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    // Replace with your LinkedIn company page URL
    href: "https://www.linkedin.com/company/promonexmedia",
    isExternal: true,
    action: "link",
    brandColor: "#0A66C2",
    hoverGlow: "rgba(10, 102, 194, 0.65)",
    iconImgUrl: "/assets/linkedin-ref.png",
    iconType: "linkedin",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    // Replace with your WhatsApp number/chat link
    href: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    isExternal: true,
    action: "link",
    brandColor: "#25D366",
    hoverGlow: "rgba(37, 211, 102, 0.65)",
    iconImgUrl: "/assets/whatsapp-icon.png",
    iconType: "whatsapp",
  },
];

// Helper to render crisp, pixel-perfect white icons matching official brand guidelines
function renderSocialIcon(item: SocialLinkConfig) {
  // If a clean image asset is available, we render it with high-fidelity fallback to vector
  if (item.iconType === "facebook") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  if (item.iconType === "instagram") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-current fill-none stroke-[1.8]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    );
  }

  if (item.iconType === "linkedin") {
    return (
      <svg
        className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }

  if (item.iconType === "whatsapp") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    );
  }

  // AI / Chatbot Icon
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D9FF] group-hover:text-white transition-colors duration-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Bot Head with Antenna */}
      <path d="M12 2v2" />
      <rect x="4" y="6" width="16" height="13" rx="4" />
      <circle cx="9" cy="12" r="1.5" fill="#00D9FF" />
      <circle cx="15" cy="12" r="1.5" fill="#00D9FF" />
      <path d="M9 16h6" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  );
}

// Container animation: slides smoothly in from outside the left edge
const railContainerVariants: Variants = {
  hidden: {
    x: "-120%",
    opacity: 0,
  },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Child item animation: staggered slide from outside viewport
const railItemVariants: Variants = {
  hidden: {
    x: "-120%",
    opacity: 0,
  },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function SocialMediaRail() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateRailPosition = () => {
      const aside = asideRef.current;
      if (!aside) return;

      // Only active on desktop / tablet where the rail is rendered
      if (window.innerWidth < 768) return;

      const footer = document.getElementById("site-footer") || document.querySelector("footer");
      const railHeight = aside.offsetHeight || 260;
      const buffer = 24; // 24px clean gap above the footer
      const defaultCenter = window.innerHeight / 2;
      const defaultBottom = defaultCenter + railHeight / 2;

      if (!footer) {
        aside.style.top = "50%";
        aside.style.transform = "translateY(-50%)";
        aside.style.opacity = "1";
        aside.style.pointerEvents = "auto";
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const triggerPoint = defaultBottom + buffer;

      if (footerRect.top < triggerPoint) {
        // Footer is entering the rail zone: Stop rail strictly above footer
        const targetTop = footerRect.top - buffer - railHeight;
        aside.style.top = `${targetTop}px`;
        aside.style.transform = "none";

        // If user scrolls even further down and rail approaches top header
        if (targetTop < 80) {
          const fadeRatio = Math.max(0, (targetTop - 20) / 60);
          aside.style.opacity = `${fadeRatio}`;
          aside.style.pointerEvents = fadeRatio < 0.2 ? "none" : "auto";
        } else {
          aside.style.opacity = "1";
          aside.style.pointerEvents = "auto";
        }
      } else {
        // Default: vertically centered fixed
        aside.style.top = "50%";
        aside.style.transform = "translateY(-50%)";
        aside.style.opacity = "1";
        aside.style.pointerEvents = "auto";
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateRailPosition);
    };

    updateRailPosition();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const resizeObserver = new ResizeObserver(() => {
      updateRailPosition();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      resizeObserver.disconnect();
    };
  }, []);

  const handleAction = (item: SocialLinkConfig, e: React.MouseEvent) => {
    if (item.action === "chat") {
      e.preventDefault();
      // Dispatch custom event to seamlessly trigger the PromonexChatModal
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("open-promonex-chat"));
      }
    }
  };

  return (
    <aside
      ref={asideRef}
      aria-label="Social Media Quick Links"
      className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 z-[45] pointer-events-none select-none"
    >
      {/* 
        Small white background rail section:
        Smoothly enters from outside left edge to screen left-center.
        Compact pill/dock design with pure white background, rounded on the right side.
      */}
      <motion.nav
        variants={railContainerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-auto flex flex-col items-center gap-2.5 sm:gap-3 py-3 px-2 sm:py-4 sm:px-2.5 bg-white rounded-r-2xl sm:rounded-r-[22px] shadow-[4px_0_28px_rgba(0,0,0,0.18),0_2px_10px_rgba(0,0,0,0.06)] border-r border-y border-slate-200/90"
        style={{
          // Hardware accelerated smooth render
          willChange: "transform, opacity",
        }}
      >
        {SOCIAL_LINKS.map((item) => {
          const isGradient = item.brandColor.startsWith("linear-gradient");

          return (
            <motion.div
              key={item.id}
              variants={railItemVariants}
              className="relative flex items-center"
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <motion.a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => handleAction(item, e)}
                whileHover={{
                  x: 5,
                  scale: 1.12,
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.94 }}
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:ring-offset-2 transition-shadow duration-300"
                style={{
                  background: isGradient ? item.brandColor : undefined,
                  backgroundColor: !isGradient ? item.brandColor : undefined,
                  boxShadow: `0 3px 10px rgba(0, 0, 0, 0.15)`,
                }}
                aria-label={`Visit Promonex Media on ${item.name}`}
                title={item.name}
              >
                {/* Subtle Ambient Brand Glow on Hover */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                  style={{
                    boxShadow: `0 0 20px ${item.hoverGlow}`,
                  }}
                />

                {/* Circular Brand Icon */}
                <div className="relative flex items-center justify-center w-full h-full rounded-full transition-transform duration-200">
                  {renderSocialIcon(item)}
                </div>
              </motion.a>

              {/* Elegant floating tooltip on hover */}
              {activeTooltip === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -8, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -8, scale: 0.92 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-full ml-3 px-3 py-1.5 bg-[#020B35] text-white text-xs font-semibold rounded-lg shadow-xl border border-[#00D9FF]/40 whitespace-nowrap pointer-events-none z-50 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
                  <span>{item.name}</span>
                  {/* Arrow pointing left */}
                  <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#020B35] border-l border-b border-[#00D9FF]/40 transform rotate-45" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.nav>
    </aside>
  );
}
