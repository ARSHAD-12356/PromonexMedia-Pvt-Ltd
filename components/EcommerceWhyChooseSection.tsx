"use client";

import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import {
  BarChart3,
  Headphones,
  Heart,
  Package,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

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

const KEYFRAMES = `
@keyframes ewc-float-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-7px,0); } }
@keyframes ewc-float-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,6px,0); } }
@keyframes ewc-pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
.ewc-anim { will-change: transform; }
@media (prefers-reduced-motion: reduce) { .ewc-anim { animation: none !important; } }
`;

const loop = (name: string, s: number, delay = 0): CSSProperties => ({
  animation: `${name} ${s}s ease-in-out ${delay}s infinite`,
});

// ── Content (placeholder marketing copy, edit freely) ─────────────────────
const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Store,
    title: "Custom Store Design",
    text: "Unique and branded designs that match your business goals and attract more customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    text: "Fully responsive and mobile-optimized stores for a seamless shopping experience.",
  },
  {
    icon: Settings,
    title: "Powerful Functionality",
    text: "Advanced features like product filters, AI recommendations, multi-payment and more.",
  },
  {
    icon: BarChart3,
    title: "Growth & Support",
    text: "Ongoing support, performance optimization and strategies to help you scale.",
  },
];

const STATS: { icon: LucideIcon; value: string; label: string; note: string }[] = [
  { icon: Users, value: "500+", label: "eCommerce Stores", note: "Successfully Delivered" },
  { icon: BarChart3, value: "3X", label: "Average Sales Growth", note: "Our Clients Achieve" },
  { icon: ShieldCheck, value: "98%", label: "Client Satisfaction", note: "Trusted by Businesses" },
  { icon: Headphones, value: "24/7", label: "Support & Assistance", note: "Always Here for You" },
];

// Sample avatars (initials only, not real customers)
const AVATARS = [
  { initials: "AK", bg: "#2F7CF6" },
  { initials: "PS", bg: "#0A2A6B" },
  { initials: "RM", bg: "#00A9D6" },
];

// ── Reusable floating pieces ──────────────────────────────────────────────

function FloatCard({ pos, float, children }: { pos: CSSProperties; float?: CSSProperties; children: ReactNode }) {
  return (
    <motion.div variants={popIn} className="absolute z-10" style={pos}>
      <div className="ewc-anim" style={float}>
        {children}
      </div>
    </motion.div>
  );
}

export function Sneaker() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      {/* Upper */}
      <path d="M12 92 L12 66 Q12 52 26 50 L48 47 Q60 30 76 24 L92 19 Q101 17 105 26 L119 52 Q152 58 177 69 Q195 77 194 92 Z" fill="#FFFFFF" stroke="#C9D6EC" strokeWidth="2" strokeLinejoin="round" />
      {/* Tongue & collar */}
      <path d="M76 24 L92 19 Q101 17 105 26 L119 52 L97 55 Q86 41 76 24 Z" fill="#CFE0FA" />
      <path d="M48 47 Q62 57 80 52" stroke="#0A2A6B" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Heel counter */}
      <path d="M12 88 L12 66 Q12 52 26 50 L32 50 Q30 70 34 88 Z" fill="#2F7CF6" />
      {/* Side stripe */}
      <path d="M44 84 Q74 66 120 66 Q156 66 182 80 L176 85 Q150 74 118 74 Q80 74 50 88 Z" fill="#2F7CF6" />
      <path d="M128 69 Q150 70 168 78" stroke="#00C8F0" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Laces */}
      <path d="M84 37 L101 33 M88 44 L106 40 M93 51 L111 47" stroke="#0A2A6B" strokeWidth="3" strokeLinecap="round" />
      {/* Sole */}
      <path d="M8 90 L196 90 Q198 106 182 107 L24 107 Q8 107 8 96 Z" fill="#F1F5FB" stroke="#C9D6EC" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 98 L195 98" stroke="#00C8F0" strokeWidth="2.5" />
    </svg>
  );
}

function ProductCard() {
  return (
    <div className="w-full rounded-[2.4cqw] bg-white p-[2cqw] shadow-[0_18px_40px_rgba(6,26,58,0.14)]">
      <div className="relative flex aspect-[1.15/1] items-center justify-center rounded-[1.6cqw] bg-[#EEF3FA] px-[1.5cqw]">
        <Heart className="absolute right-[1.4cqw] top-[1.4cqw] size-[max(12px,3cqw)] text-[#9DB0CC]" strokeWidth={2.2} aria-hidden="true" />
        <Sneaker />
      </div>
      <p className="mt-[1.6cqw] text-[max(11px,2.2cqw)] font-semibold text-[#061A3A]">Running Shoes</p>
      <div className="mt-[0.6cqw] flex gap-[0.3cqw]" aria-label="Rated 4 out of 5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={`size-[max(9px,1.9cqw)] ${i < 4 ? "fill-[#2F7CF6] text-[#2F7CF6]" : "fill-[#D6DEEA] text-[#D6DEEA]"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="mt-[1cqw] flex items-center justify-between">
        <span className="text-[max(13px,2.9cqw)] font-bold text-[#061A3A]">₹ 2,499</span>
        <span className="flex size-[max(26px,5.4cqw)] items-center justify-center rounded-[1.2cqw] bg-[#2F7CF6] text-white">
          <ShoppingCart className="size-[max(13px,2.8cqw)]" strokeWidth={2.2} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function SalesCard() {
  return (
    <div className="flex items-center justify-between gap-[1.6cqw] rounded-[2.4cqw] bg-white px-[2.2cqw] py-[2.2cqw] shadow-[0_18px_40px_rgba(6,26,58,0.14)]">
      <div>
        <p className="text-[max(10px,1.8cqw)] text-[#5A6A85]">Total Sales</p>
        <p className="mt-[0.4cqw] whitespace-nowrap text-[max(11px,2.9cqw)] font-bold text-[#061A3A]">₹ 2,45,000</p>
        <p className="mt-[0.4cqw] text-[max(11px,2.1cqw)] font-semibold text-[#00A9D6]">↑ 32%</p>
      </div>
      <span className="flex items-end gap-[0.8cqw]" aria-hidden="true">
        <span className="h-[3.4cqw] w-[2cqw] rounded-[0.5cqw] bg-[#00C8F0]" />
        <span className="h-[5.6cqw] w-[2cqw] rounded-[0.5cqw] bg-[#2F9BFF]" />
        <span className="h-[8cqw] w-[2cqw] rounded-[0.5cqw] bg-[#2F7CF6]" />
      </span>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="flex items-center gap-[2cqw] rounded-[2.2cqw] bg-[#061A3A] px-[2.6cqw] py-[2.2cqw] text-white shadow-[0_18px_40px_rgba(6,26,58,0.3)]">
      <ShoppingCart className="size-[max(20px,5.4cqw)] shrink-0 text-[#00C8F0]" strokeWidth={2} aria-hidden="true" />
      <div>
        <p className="text-[max(12px,2.5cqw)] font-semibold leading-tight">New Order</p>
        <p className="mt-[0.3cqw] flex items-center gap-[1.6cqw] text-[max(10px,2cqw)] text-[#C7D3E8]">
          #12458
          <span
            className="ewc-anim size-[max(6px,1.2cqw)] rounded-full bg-[#22C55E]"
            style={loop("ewc-pulse", 1.8)}
            aria-label="Active"
          />
        </p>
      </div>
    </div>
  );
}

function CustomersCard() {
  return (
    <div className="rounded-[2.4cqw] bg-white px-[2.6cqw] py-[2.2cqw] shadow-[0_18px_40px_rgba(6,26,58,0.14)]">
      <p className="text-[max(11px,2.2cqw)] font-medium text-[#061A3A]">Happy Customers</p>
      <div className="mt-[1.4cqw] flex items-center">
        {AVATARS.map(({ initials, bg }, i) => (
          <span
            key={initials}
            className={`flex size-[max(26px,5.6cqw)] items-center justify-center rounded-full border-2 border-white text-[max(9px,1.8cqw)] font-semibold text-white ${i ? "-ml-[1.2cqw]" : ""}`}
            style={{ backgroundColor: bg }}
            aria-hidden="true"
          >
            {initials}
          </span>
        ))}
        <span className="ml-[1.6cqw] flex h-[max(26px,5.6cqw)] items-center rounded-full bg-[#2F9BFF] px-[1.8cqw] text-[max(10px,2cqw)] font-semibold text-white">
          5K+
        </span>
      </div>
    </div>
  );
}

function ShippingStack() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {[
        "right-[30%] bottom-0 h-[42%] w-[48%]",
        "right-0 bottom-0 h-[50%] w-[52%]",
        "right-[6%] bottom-[50%] h-[40%] w-[44%]",
      ].map((cls) => (
        <span
          key={cls}
          className={`absolute flex items-center justify-center rounded-[0.8cqw] bg-[#D7E2F2] shadow-[0_10px_24px_rgba(6,26,58,0.15)] ${cls}`}
        >
          <span className="absolute inset-x-0 top-[38%] h-[0.5cqw] bg-[#B9C9E2]" />
          <Package className="relative size-[45%] text-[#8EA6CC]" strokeWidth={1.5} />
        </span>
      ))}
      <ShoppingCart
        className="absolute -left-[6%] bottom-[-6%] size-[62%] text-[#2F7CF6]"
        strokeWidth={1.4}
      />
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────

export default function EcommerceWhyChooseSection() {
  return (
    <MotionConfig reducedMotion="user">
      <style>{KEYFRAMES}</style>
      <section
        aria-labelledby="ecom-why-heading"
        className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A3A] sm:px-6 sm:py-20 md:pl-20 lg:py-24 min-[1420px]:pl-6"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-10">
            {/* Left: copy + features */}
            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex rounded-full bg-[#E3F2FE] px-5 py-2 text-[13px] font-semibold tracking-[0.2em] text-[#1E88E5]"
              >
                WHY CHOOSE US
              </motion.span>
              <motion.h2
                variants={fadeUp}
                id="ecom-why-heading"
                className="mt-6 text-[30px] font-extrabold leading-[1.12] tracking-tight sm:text-[40px] lg:text-[36px] xl:text-[44px]"
              >
                <span className="lg:whitespace-nowrap">End-to-End eCommerce</span> Solutions for{" "}
                <span className="whitespace-nowrap text-[#00C8F0]">Your Growth</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[620px] text-[15.5px] leading-[1.7] text-[#4A5873] sm:text-[17px]"
              >
                From strategy and design to development and ongoing support, we provide complete eCommerce solutions that
                help you launch, scale and grow your online business with confidence.
              </motion.p>

              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {FEATURES.map(({ icon: Icon, title, text }) => (
                  <motion.li key={title} variants={fadeUp} className="group flex gap-5">
                    <span className="flex size-[70px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF4FE] text-[#1E88E5] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#DCEEFF] group-hover:shadow-[0_10px_24px_rgba(30,136,229,0.18)]">
                      <Icon size={32} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[17px] font-bold sm:text-[18px]">{title}</span>
                      <span className="mt-1.5 block text-[14.5px] leading-[1.6] text-[#5A6A85]">{text}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: girl + floating commerce cards */}
            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative mx-auto aspect-[1.08/1] w-full max-w-[620px] [container-type:inline-size]"
            >
              {/* Soft circle behind the model */}
              <motion.span
                variants={popIn}
                aria-hidden="true"
                className="absolute left-[22%] top-[4%] aspect-square w-[72%] rounded-full bg-[#EAF4FE]"
              />

              <motion.div variants={popIn} className="absolute bottom-0 left-[20%] h-[94%] w-[70%]">
                <Image
                  src="/assets/service-girl.png"
                  alt="Smiling Promonex Media eCommerce specialist working on a laptop"
                  fill
                  sizes="(max-width: 1024px) 70vw, 440px"
                  className="object-contain object-bottom"
                />
              </motion.div>

              <motion.div variants={popIn} className="absolute bottom-[10%] right-[0%] h-[30%] w-[26%]">
                <ShippingStack />
              </motion.div>

              <FloatCard pos={{ left: "0%", top: "6%", width: "29%" }} float={loop("ewc-float-a", 6.5)}>
                <ProductCard />
              </FloatCard>
              <FloatCard pos={{ right: "0%", top: "2%", width: "33%" }} float={loop("ewc-float-b", 7, -1.5)}>
                <SalesCard />
              </FloatCard>
              <FloatCard pos={{ right: "0%", top: "36%" }} float={loop("ewc-float-a", 5.8, -2.5)}>
                <OrderCard />
              </FloatCard>
              <FloatCard pos={{ right: "14%", bottom: "0%" }} float={loop("ewc-float-b", 6.2, -3.5)}>
                <CustomersCard />
              </FloatCard>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 grid grid-cols-1 gap-y-8 rounded-[28px] bg-[#F0F7FE] px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-y-0 lg:py-9"
          >
            {STATS.map(({ icon: Icon, value, label, note }, i) => (
              <motion.li
                key={label}
                variants={fadeUp}
                className={`flex items-center gap-5 lg:px-6 ${i ? "lg:border-l lg:border-[#CFDDF0]" : ""}`}
              >
                <span className="flex size-[68px] shrink-0 items-center justify-center rounded-2xl bg-[#E1EFFD] text-[#1E88E5]">
                  <Icon size={32} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[26px] font-extrabold leading-none">{value}</span>
                  <span className="mt-1.5 block text-[15.5px] font-semibold">{label}</span>
                  <span className="mt-1 block text-[13.5px] text-[#6B7A94]">{note}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
