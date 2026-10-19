"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  Armchair,
  ArrowRight,
  BarChart3,
  Box,
  Headphones,
  Package,
  Search,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Tag,
  TrendingUp,
  User,
  Watch,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const leftList = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const rightList = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const laptopIn = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

const KEYFRAMES = `
@keyframes ech-float-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-8px,0); } }
@keyframes ech-float-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,7px,0); } }
@keyframes ech-scene { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-5px,0); } }
.ech-anim { will-change: transform; }
@media (prefers-reduced-motion: reduce) { .ech-anim { animation: none !important; } }
`;

const loop = (name: string, s: number, delay = 0): CSSProperties => ({
  animation: `${name} ${s}s ease-in-out ${delay}s infinite`,
});

const FEATURES: { icon: LucideIcon; label: [string, string] }[] = [
  { icon: ShoppingCart, label: ["Custom", "Store Design"] },
  { icon: Smartphone, label: ["Mobile", "Optimized"] },
  { icon: Settings, label: ["Secure &", "Scalable"] },
  { icon: BarChart3, label: ["Conversion", "Focused"] },
];

const CATEGORIES: { icon: LucideIcon; label: string }[] = [
  { icon: Shirt, label: "Fashion" },
  { icon: Headphones, label: "Electronics" },
  { icon: Armchair, label: "Home Decor" },
  { icon: Sparkles, label: "Beauty" },
  { icon: ShoppingBag, label: "Accessories" },
];

/** Positioned piece of the scene with its own float loop. */
function Piece({ pos, float, children }: { pos: CSSProperties; float?: CSSProperties; children: ReactNode }) {
  return (
    <motion.div variants={popIn} className="absolute" style={pos}>
      <div className="ech-anim h-full w-full" style={float}>
        {children}
      </div>
    </motion.div>
  );
}

function Bag({ className, tone }: { className: string; tone: string }) {
  return (
    <span className={`absolute ${className}`}>
      <span className="absolute left-1/2 top-0 h-[34%] w-[46%] -translate-x-1/2 rounded-t-full border-[0.5cqw] border-b-0 border-[#9DB4DA]" />
      <span className={`absolute inset-x-0 bottom-0 top-[22%] rounded-[1cqw] shadow-[0_12px_30px_rgba(0,0,0,0.35)] ${tone}`} />
    </span>
  );
}

export default function EcommerceHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <style>{KEYFRAMES}</style>
      <section className="relative isolate overflow-hidden bg-[#061A3A] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-8 sm:py-16 md:pl-24 lg:grid-cols-[46fr_54fr] lg:gap-4 lg:py-16 xl:pl-20 min-[1480px]:pl-12">
          {/* ── Left: content ───────────────────────────────────────── */}
          <motion.div variants={leftList} initial="hidden" animate="show" className="relative z-10 max-w-[620px]">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#00C8F0]/70 bg-[#00C8F0]/5 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-white sm:text-[14px]"
            >
              <ShoppingCart size={18} strokeWidth={2.3} className="text-[#00C8F0]" aria-hidden="true" />
              ECOMMERCE DEVELOPMENT
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-extrabold leading-[1.08] tracking-tight"
            >
              <span className="block">Online Stores</span>
              <span className="block">That Sell and</span>
              <span className="block whitespace-nowrap">
                <span className="text-[#00C8F0]">Scale</span> Your Business
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[580px] text-[15px] leading-[1.6] text-[#D3DCEC] sm:text-[17px]"
            >
              We build high-performance eCommerce websites that are beautiful, user-friendly and conversion-focused. From
              design to development, we create online stores that help you attract more customers, boost sales and grow
              your brand.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-7 grid max-w-[560px] grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li key={label[0]} className="group flex flex-col items-center text-center">
                  <span className="flex size-[58px] items-center justify-center rounded-xl border-2 border-[#00C8F0] bg-[#00C8F0]/5 text-[#00C8F0] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#00C8F0]/15 group-hover:shadow-[0_0_22px_rgba(0,200,240,0.45)]">
                    <Icon size={28} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="mt-2.5 text-[14px] leading-[1.3] text-[#E1E8F5] sm:text-[15px]">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[60px] items-center gap-4 rounded-full bg-[#00C8F0] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-[#061A3A] shadow-[0_10px_30px_rgba(0,200,240,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22D6FA] hover:shadow-[0_14px_36px_rgba(0,200,240,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A] sm:text-[16px]"
              >
                Get a free eCommerce consultation
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-[#061A3A] text-[#00C8F0]">
                  <ArrowRight
                    size={21}
                    strokeWidth={2.4}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex min-h-[60px] items-center rounded-full border-2 border-[#00C8F0] bg-[#0A2350]/40 px-9 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2A6B]/70 hover:shadow-[0_0_24px_rgba(0,200,240,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[16px]"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: eCommerce scene (HTML/CSS) ─────────────────────── */}
          <motion.div
            variants={rightList}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[720px] [container-type:inline-size] lg:mr-0"
          >
            <div className="ech-anim relative aspect-[1.2/1] w-full" style={loop("ech-scene", 8)}>
              {/* Stage platform under the laptop */}
              <span className="absolute bottom-[10%] left-[10%] right-[2%] h-[6%] rounded-[50%] bg-[#0A2A6B]/60 shadow-[0_0_40px_rgba(0,200,240,0.25)]" />

              {/* Shopping bags (left) */}
              <motion.div variants={popIn} className="absolute inset-0">
                <Bag className="bottom-[16%] left-[2%] h-[30%] w-[15%]" tone="bg-[#E9EFF9]" />
                <Bag className="bottom-[12%] left-[9%] h-[24%] w-[13%]" tone="bg-[#1E56C8]" />
              </motion.div>

              {/* Laptop with storefront */}
              <motion.div variants={laptopIn} className="absolute left-[11%] top-[19%] w-[67%]">
                <div className="rounded-t-[2cqw] border-[1cqw] border-b-[1.4cqw] border-[#111A2C] bg-[#111A2C] shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[0.8cqw] bg-[#F4F7FC] text-[#0B1A33]">
                    {/* Store nav */}
                    <div className="flex items-center justify-between px-[2.4cqw] py-[1.4cqw]">
                      <span className="text-[2.1cqw] font-extrabold">ShopNow</span>
                      <span className="flex gap-[1.8cqw] text-[1.25cqw] font-medium text-[#41506B]">
                        <span>Home</span>
                        <span>Shop</span>
                        <span>Categories</span>
                        <span>Offers</span>
                      </span>
                      <span className="flex items-center gap-[1.2cqw]">
                        <Search className="size-[1.9cqw]" strokeWidth={2.2} />
                        <User className="size-[1.9cqw]" strokeWidth={2.2} />
                        <span className="relative">
                          <ShoppingCart className="size-[1.9cqw]" strokeWidth={2.2} />
                          <span className="absolute -right-[0.6cqw] -top-[0.6cqw] size-[1.1cqw] rounded-full bg-[#2F7CF6]" />
                        </span>
                      </span>
                    </div>
                    {/* Banner */}
                    <div className="flex items-center justify-between px-[2.4cqw] pb-[1.6cqw] pt-[0.8cqw]">
                      <div>
                        <p className="text-[3.3cqw] font-extrabold italic leading-[1.1]">
                          Discover
                          <br />
                          Trendy Products
                        </p>
                        <p className="mt-[0.8cqw] text-[1.4cqw] font-medium italic text-[#41506B]">
                          Best Quality. Great Prices.
                        </p>
                        <span className="mt-[1.4cqw] inline-flex items-center gap-[0.6cqw] rounded-[0.6cqw] bg-[#2F7CF6] px-[1.6cqw] py-[0.8cqw] text-[1.3cqw] font-semibold text-white">
                          Shop Now <ArrowRight className="size-[1.3cqw]" strokeWidth={2.6} />
                        </span>
                      </div>
                      <span className="relative mr-[2cqw] flex size-[17cqw] items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,#FFFFFF,#CFE0FA)]">
                        <Watch className="size-[10cqw] text-[#2F7CF6]" strokeWidth={1.5} />
                      </span>
                    </div>
                    {/* Category tiles */}
                    <div className="grid grid-cols-5 gap-[1cqw] px-[2.4cqw] pb-[2cqw]">
                      {CATEGORIES.map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="flex flex-col items-center gap-[0.8cqw] rounded-[1cqw] bg-white py-[1.4cqw] shadow-[0_4px_12px_rgba(11,26,51,0.08)]"
                        >
                          <Icon className="size-[4.2cqw] text-[#1F5FD6]" strokeWidth={1.7} />
                          <span className="text-[1.25cqw] font-medium">{label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="mx-[-4%] h-[1.6cqw] rounded-b-[1.6cqw] bg-gradient-to-b from-[#C8D2E3] to-[#8C9BB5]">
                  <span className="mx-auto block h-[0.7cqw] w-[16%] rounded-b-[0.8cqw] bg-[#6F7E99]" />
                </div>
              </motion.div>

              {/* Cart + package (right) */}
              <motion.div variants={popIn} className="absolute bottom-[14%] right-[1%] w-[22%]">
                <ShoppingCart className="ml-auto size-[17cqw] text-[#9DB4DA]" strokeWidth={1.3} />
              </motion.div>
              <Piece pos={{ right: "9%", bottom: "13%", width: "16%", height: "17%" }} float={loop("ech-float-b", 6.5, -1)}>
                <span className="flex h-full w-full items-center justify-center rounded-[1cqw] bg-[#C9D6EC] text-[#0B2350] shadow-[0_14px_30px_rgba(0,0,0,0.4)]">
                  <Package className="size-[8cqw]" strokeWidth={1.5} />
                </span>
              </Piece>

              {/* Floating panel: Your Ecommerce Store */}
              <Piece pos={{ left: "0%", top: "6%", width: "38%" }} float={loop("ech-float-a", 6)}>
                <span className="flex -rotate-[6deg] items-center gap-[1.8cqw] rounded-[2cqw] border border-[#00C8F0]/40 bg-[#0B2A5E]/80 px-[2.4cqw] py-[2cqw] shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <ShoppingCart className="size-[6cqw] shrink-0 text-[#00C8F0]" strokeWidth={1.9} />
                  <span className="border-l border-white/20 pl-[1.8cqw] text-[2.3cqw] font-semibold leading-[1.15]">
                    Your
                    <br />
                    Ecommerce Store
                  </span>
                  <span className="ml-auto flex size-[5.4cqw] shrink-0 items-center justify-center rounded-full bg-[#2F7CF6]">
                    <ArrowRight className="size-[2.8cqw]" strokeWidth={2.6} />
                  </span>
                </span>
              </Piece>

              {/* Floating panel: More Sales */}
              <Piece pos={{ right: "8%", top: "0%", width: "30%" }} float={loop("ech-float-b", 7, -2)}>
                <span className="flex -rotate-[3deg] items-center gap-[1.6cqw] rounded-[2cqw] bg-white px-[2.4cqw] py-[2cqw] text-[#0B1A33] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                  <BarChart3 className="size-[6.4cqw] shrink-0 text-[#2F7CF6]" strokeWidth={2.2} />
                  <span className="text-[2.5cqw] font-bold leading-[1.15]">
                    More
                    <br />
                    Sales
                  </span>
                  <TrendingUp className="ml-auto size-[5cqw] shrink-0 text-[#00B8E6]" strokeWidth={2.4} />
                </span>
              </Piece>

              {/* Floating panel: Better Customer Experience */}
              <Piece pos={{ right: "0%", top: "35%", width: "25%" }} float={loop("ech-float-a", 7.5, -3)}>
                <span className="flex -rotate-[6deg] items-center gap-[1.4cqw] rounded-[2cqw] border border-[#00C8F0]/40 bg-[#0B2A5E]/85 px-[2cqw] py-[1.8cqw] shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <Box className="size-[5.6cqw] shrink-0 text-[#2F9BFF]" strokeWidth={1.9} />
                  <span className="text-[2cqw] font-semibold leading-[1.2]">
                    Better Customer
                    <br />
                    Experience
                  </span>
                </span>
              </Piece>

              {/* Bottom benefits panel */}
              <Piece pos={{ left: "20%", bottom: "4%", width: "58%" }} float={loop("ech-float-b", 6.8, -4)}>
                <span className="grid grid-cols-3 rounded-[2cqw] border border-[#00C8F0]/35 bg-[#0B2A5E]/90 px-[1.4cqw] py-[1.8cqw] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                  {[
                    { icon: Tag, a: "Attract", b: "More Customers" },
                    { icon: ShoppingCart, a: "Boost", b: "Your Sales" },
                    { icon: TrendingUp, a: "Grow", b: "Your Brand" },
                  ].map(({ icon: Icon, a, b }, i) => (
                    <span
                      key={a}
                      className={`flex items-center gap-[1cqw] px-[1.2cqw] ${i ? "border-l border-white/15" : ""}`}
                    >
                      <Icon className="size-[3.8cqw] shrink-0 text-[#2F9BFF]" strokeWidth={2} />
                      <span className="leading-[1.2]">
                        <span className="block text-[1.9cqw] font-semibold">{a}</span>
                        <span className="block text-[1.55cqw] text-[#D3DCEC]">{b}</span>
                      </span>
                    </span>
                  ))}
                </span>
              </Piece>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
