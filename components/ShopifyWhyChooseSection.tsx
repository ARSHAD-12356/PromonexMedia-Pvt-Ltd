"use client";

import { MotionConfig, motion } from "framer-motion";
import {
  BarChart3,
  Check,
  Footprints,
  Headphones,
  Heart,
  Leaf,
  Menu,
  Paintbrush,
  Search,
  Settings,
  Shirt,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Store,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Sneaker } from "./EcommerceWhyChooseSection";
import styles from "./ShopifyHeroSection.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const list = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};
const slideIn = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Float loop with its own duration/phase (keyframes live in the CSS module). */
const float = (dir: "up" | "down", s: number, delay = 0) => ({
  className: dir === "up" ? styles.floatUp : styles.floatDown,
  style: { animationDuration: `${s}s`, animationDelay: `${delay}s` } as CSSProperties,
});

// ── Content (stats are placeholder values, replace with verified numbers) ─
const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Store,
    title: "Custom Store Design",
    text: "Unique and branded Shopify designs that match your business goals.",
  },
  {
    icon: Paintbrush,
    title: "Theme Customization",
    text: "Fully customized themes for a modern and seamless shopping experience.",
  },
  {
    icon: Settings,
    title: "Advanced Functionality",
    text: "Custom features, app integrations and automated workflows.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    text: "Continuous support, updates and performance optimization to help you grow.",
  },
];

const STATS: { icon: LucideIcon; value: string; label: string; note: string }[] = [
  { icon: Users, value: "500+", label: "Shopify Stores", note: "Successfully Delivered" },
  { icon: BarChart3, value: "3X", label: "Average Sales Growth", note: "Our Clients Achieve" },
  { icon: ShieldCheck, value: "98%", label: "Client Satisfaction", note: "Trusted by Businesses" },
  { icon: Headphones, value: "24/7", label: "Support & Assistance", note: "Always Here for You" },
];

const CATEGORIES: { icon: LucideIcon; label: string; tint: string }[] = [
  { icon: Shirt, label: "Men", tint: "#E8EEF8" },
  { icon: Shirt, label: "Women", tint: "#E6F5FB" },
  { icon: ShoppingBag, label: "Accessories", tint: "#ECEFF6" },
  { icon: Footprints, label: "Footwear", tint: "#EEF3FA" },
];

// ── Illustration pieces ───────────────────────────────────────────────────

function InfoCard({
  icon: Icon,
  children,
  dark = false,
}: {
  icon: LucideIcon;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-[1.8cqw] rounded-[2.2cqw] px-[2.6cqw] py-[2.2cqw] ${
        dark
          ? "bg-[#061A3A] text-white shadow-[0_16px_36px_rgba(6,26,58,0.3)]"
          : "bg-white text-[#061A3A] shadow-[0_16px_36px_rgba(6,26,58,0.13)]"
      }`}
    >
      <Icon
        className={`size-[max(18px,5cqw)] shrink-0 ${dark ? "text-[#00C8F0]" : "text-[#1E88E5]"}`}
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <span className="text-[max(11px,2.2cqw)] font-semibold leading-[1.2]">{children}</span>
      <span className="absolute -right-[1cqw] -top-[1cqw] flex size-[max(16px,3.4cqw)] items-center justify-center rounded-full bg-[#00B8E6] text-white">
        <Check className="size-[65%]" strokeWidth={3} aria-hidden="true" />
      </span>
    </div>
  );
}

function Laptop() {
  return (
    <div className="w-full">
      <div className="rounded-t-[2.2cqw] border-[1.1cqw] border-b-[1.4cqw] border-[#1A2233] bg-[#1A2233] shadow-[0_30px_60px_rgba(6,26,58,0.28)]">
        <div className="overflow-hidden rounded-[0.6cqw] bg-white text-[#061A3A]">
          {/* Store nav */}
          <div className="flex items-center justify-between px-[2.6cqw] py-[1.6cqw]">
            <span className="flex items-center gap-[0.8cqw] text-[1.9cqw] font-extrabold italic">
              <ShoppingBag className="size-[2.4cqw] text-[#1E88E5]" strokeWidth={2.4} />
              Your Store
            </span>
            <span className="flex gap-[2cqw] text-[1.25cqw] font-medium text-[#41506B]">
              <span>Home</span>
              <span>Shop</span>
              <span>Collections</span>
              <span>About</span>
            </span>
            <span className="flex items-center gap-[1.2cqw]">
              <Search className="size-[1.8cqw]" strokeWidth={2.2} />
              <User className="size-[1.8cqw]" strokeWidth={2.2} />
              <span className="relative">
                <ShoppingCart className="size-[1.8cqw]" strokeWidth={2.2} />
                <span className="absolute -right-[0.6cqw] -top-[0.6cqw] size-[1.1cqw] rounded-full bg-[#1E88E5]" />
              </span>
            </span>
          </div>
          {/* Banner */}
          <div className="mx-[2.6cqw] flex items-center justify-between rounded-[1.4cqw] bg-[#EEF4FC] px-[3cqw] py-[2.2cqw]">
            <span>
              <span className="block text-[2.9cqw] font-extrabold leading-[1.12]">
                New Arrivals
                <br />
                Modern Essentials
              </span>
              <span className="mt-[1cqw] block text-[1.25cqw] text-[#41506B]">Minimal. Modern. Made for You.</span>
              <span className="mt-[1.6cqw] inline-flex items-center rounded-[0.8cqw] bg-[#061A3A] px-[1.8cqw] py-[0.8cqw] text-[1.25cqw] font-semibold text-white">
                Shop Now →
              </span>
            </span>
            <span className="w-[38%]">
              <Sneaker />
            </span>
          </div>
          {/* Category tiles */}
          <div className="grid grid-cols-4 gap-[1.4cqw] px-[2.6cqw] py-[2cqw]">
            {CATEGORIES.map(({ icon: Icon, label, tint }) => (
              <span
                key={label}
                className="flex flex-col items-center gap-[0.8cqw] rounded-[1.2cqw] py-[1.6cqw]"
                style={{ backgroundColor: tint }}
              >
                <Icon className="size-[4.4cqw] text-[#1F5FD6]" strokeWidth={1.6} />
                <span className="text-[1.2cqw] font-medium">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[-5%] h-[2cqw] rounded-b-[2cqw] bg-gradient-to-b from-[#E4E9F1] to-[#AEB8C8]">
        <span className="mx-auto block h-[0.8cqw] w-[16%] rounded-b-[0.8cqw] bg-[#9AA6B8]" />
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="rounded-[4.4cqw] border-[1cqw] border-[#0B1A33] bg-[#0B1A33] shadow-[0_26px_50px_rgba(6,26,58,0.35)]">
      <div className="overflow-hidden rounded-[3.4cqw] bg-white px-[1.8cqw] pb-[2cqw] pt-[1.6cqw] text-[#061A3A]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[0.5cqw] text-[1.4cqw] font-bold italic">
            <ShoppingBag className="size-[1.8cqw] text-[#1E88E5]" strokeWidth={2.4} />
            Your Store
          </span>
          <Menu className="size-[1.8cqw]" strokeWidth={2.2} />
        </div>
        <div className="relative mt-[1.4cqw] flex aspect-[1/1.05] items-center justify-center rounded-[1.6cqw] bg-[#EEF3FA]">
          <Heart className="absolute right-[1.2cqw] top-[1.2cqw] size-[1.8cqw] text-[#9DB0CC]" strokeWidth={2.2} />
          <Shirt className="size-[12cqw] fill-[#1E5BA8] text-[#0A2A6B]" strokeWidth={1.2} />
        </div>
        <span className="mt-[1.2cqw] block text-[1.6cqw] font-bold">Premium Hoodie</span>
        <span className="mt-[0.3cqw] flex gap-[0.2cqw]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-[1.2cqw] fill-[#2F7CF6] text-[#2F7CF6]" />
          ))}
        </span>
        <span className="mt-[0.6cqw] block text-[1.8cqw] font-extrabold">₹1,999</span>
        <span className="mt-[1cqw] flex gap-[0.8cqw]">
          {["#E7DCD3", "#C9B3A1", "#1E5BA8", "#0B1A33"].map((c) => (
            <span key={c} className="size-[2cqw] rounded-full border border-black/10" style={{ backgroundColor: c }} />
          ))}
        </span>
        <span className="mt-[1.6cqw] block rounded-full bg-[#061A3A] py-[1.1cqw] text-center text-[1.3cqw] font-semibold text-white">
          Add to Cart
        </span>
      </div>
    </div>
  );
}

function BagAndPlant() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {/* Plant */}
      <div className="absolute bottom-[30%] right-0 h-[60%] w-[60%]">
        <Leaf className="absolute bottom-0 left-[10%] size-[60%] -rotate-[25deg] text-[#2E9D62]" strokeWidth={1.5} fill="#43B97A" />
        <Leaf className="absolute bottom-[12%] right-0 size-[60%] rotate-[25deg] text-[#2E9D62]" strokeWidth={1.5} fill="#5CC98C" />
        <Leaf className="absolute left-[20%] top-0 size-[60%] text-[#2E9D62]" strokeWidth={1.5} fill="#3FAE70" />
      </div>
      {/* Shopping bag */}
      <div className="absolute bottom-0 left-0 h-[72%] w-[64%]">
        <span className="absolute left-1/2 top-0 h-[28%] w-[46%] -translate-x-1/2 rounded-t-full border-[1cqw] border-b-0 border-[#0A2A6B]" />
        <span className="absolute inset-x-0 bottom-0 top-[18%] flex items-center justify-center rounded-[1.6cqw] bg-[linear-gradient(150deg,#2F9BFF,#1E5BA8)] shadow-[0_18px_36px_rgba(6,26,58,0.3)]">
          <ShoppingBag className="size-[45%] text-white" strokeWidth={1.8} />
        </span>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────

export default function ShopifyWhyChooseSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="shopify-why-heading"
        className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A3A] sm:px-6 sm:py-20 md:pl-20 lg:py-24 min-[1420px]:pl-6"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[48fr_52fr] lg:gap-8">
            {/* Left */}
            <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.span
                variants={fadeUp}
                className="inline-flex rounded-full bg-[#E3F2FE] px-5 py-2 text-[13px] font-semibold tracking-[0.2em] text-[#1E88E5]"
              >
                WHY CHOOSE US
              </motion.span>
              <motion.h2
                variants={fadeUp}
                id="shopify-why-heading"
                className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[40px] xl:text-[50px]"
              >
                <span className="block">Why Choose Our</span>
                <span className="block text-[#00B8E6] sm:whitespace-nowrap">Shopify Development</span>
                <span className="block">Services</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[620px] text-[15.5px] leading-[1.7] text-[#4A5873] sm:text-[17px]"
              >
                We create high-performance Shopify stores that are visually stunning, conversion-focused and tailored to
                your business goals — from custom designs to advanced features and ongoing support.
              </motion.p>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map(({ icon: Icon, title, text }) => (
                  <motion.li
                    key={title}
                    variants={fadeUp}
                    className="group flex gap-4 rounded-2xl border border-[#E2EAF4] bg-[#FBFCFE] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#BFDDF8] hover:shadow-[0_14px_30px_rgba(30,136,229,0.12)]"
                  >
                    <span className="flex size-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF4FE] text-[#1E88E5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DCEEFF]">
                      <Icon size={28} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[16.5px] font-bold">{title}</span>
                      <span className="mt-1.5 block text-[14px] leading-[1.6] text-[#5A6A85]">{text}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: illustration */}
            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              aria-hidden="true"
              className="relative mx-auto aspect-[1.12/1] w-full max-w-[680px] [container-type:inline-size]"
            >
              <motion.span
                variants={popIn}
                className="absolute left-[12%] top-[10%] aspect-square w-[80%] rounded-full bg-[#EEF6FE]"
              />

              <motion.div variants={slideIn} className="absolute left-[14%] top-[25%] w-[70%]">
                <Laptop />
              </motion.div>

              <motion.div variants={popIn} className="absolute left-[2%] top-[45%] w-[23%]">
                <Phone />
              </motion.div>

              <motion.div variants={popIn} className="absolute bottom-[14%] right-[0%] h-[34%] w-[24%]">
                <BagAndPlant />
              </motion.div>

              {/* Floating info cards */}
              <motion.div variants={popIn} className="absolute left-[3%] top-[6%] w-[36%]">
                <div {...float("up", 6.5)}>
                  <div className="-rotate-[5deg]">
                    <InfoCard icon={ShoppingBag}>Custom Shopify Store</InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute right-[0%] top-[1%] w-[33%]">
                <div {...float("down", 7, -1.5)}>
                  <div className="rotate-[4deg]">
                    <InfoCard icon={BarChart3}>Higher Conversions</InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute right-[-1%] top-[33%] w-[30%]">
                <div {...float("up", 6, -3)}>
                  <div className="-rotate-[5deg]">
                    <InfoCard icon={ShoppingCart} dark>
                      Seamless Shopping Experience
                    </InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute bottom-[2%] right-[6%] w-[28%]">
                <div {...float("down", 7.4, -2)}>
                  <div className="-rotate-[4deg]">
                    <InfoCard icon={Star}>Scalable &amp; Secure</InfoCard>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 rounded-[28px] bg-[#F0F7FE] px-5 py-8 sm:px-8 lg:grid-cols-4 lg:gap-y-0 lg:py-9"
          >
            {STATS.map(({ icon: Icon, value, label, note }, i) => (
              <motion.li
                key={label}
                variants={fadeUp}
                className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:px-6 ${
                  i ? "lg:border-l lg:border-[#CFDDF0]" : ""
                }`}
              >
                <span className="flex size-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#E1EFFD] text-[#1E88E5] sm:size-[68px]">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[24px] font-extrabold leading-none sm:text-[26px]">{value}</span>
                  <span className="mt-1.5 block text-[14.5px] font-semibold sm:text-[15.5px]">{label}</span>
                  <span className="mt-1 block text-[13px] text-[#6B7A94] sm:text-[13.5px]">{note}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
