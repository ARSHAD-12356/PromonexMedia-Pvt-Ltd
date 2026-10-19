"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  CreditCard,
  Gauge,
  Heart,
  Package,
  Search,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Wallet,
  Watch,
  Shirt,
  Headphones,
  Glasses,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./ShopifyHeroSection.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const leftList = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const rightList = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } };
const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const phoneIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Float loop with its own duration/phase so cards never move in sync. */
const float = (dir: "up" | "down", s: number, delay = 0) => ({
  className: dir === "up" ? styles.floatUp : styles.floatDown,
  style: { animationDuration: `${s}s`, animationDelay: `${delay}s` } as CSSProperties,
});

const INCLUDED = [
  "Custom Shopify theme design",
  "Mobile-first, fast-loading store",
  "Payment, shipping & app setup",
  "SEO-ready product pages",
];

const PAYMENTS: { icon: LucideIcon; label: string }[] = [
  { icon: Wallet, label: "UPI" },
  { icon: CreditCard, label: "Cards" },
  { icon: Banknote, label: "Cash on Delivery" },
  { icon: Truck, label: "Shipping" },
];

const PRODUCTS: { icon: LucideIcon; name: string; price: string }[] = [
  { icon: Watch, name: "Smart Watch", price: "₹3,499" },
  { icon: Headphones, name: "Headphones", price: "₹2,199" },
  { icon: Shirt, name: "Cotton Tee", price: "₹699" },
  { icon: Glasses, name: "Sunglasses", price: "₹1,299" },
];

function Floating({ className, children }: { className: string; children: ReactNode }) {
  return (
    <motion.div variants={popIn} className={`absolute z-20 ${className}`}>
      {children}
    </motion.div>
  );
}

export default function ShopifyHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate overflow-hidden bg-[#061A3A] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-8 sm:py-16 md:pl-24 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:py-20 xl:pl-20 min-[1480px]:pl-12">
          {/* ── Left: content ───────────────────────────────────────── */}
          <motion.div variants={leftList} initial="hidden" animate="show" className="relative z-10 max-w-[600px]">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#00C8F0]/50 bg-[#00C8F0]/10 px-4 py-1.5 text-[13px] font-semibold tracking-[0.14em] text-[#7FE3FA]"
            >
              <ShoppingBag size={16} strokeWidth={2.3} aria-hidden="true" />
              SHOPIFY DEVELOPMENT
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[clamp(2.1rem,3.8vw,3.4rem)] font-extrabold leading-[1.12] tracking-tight"
            >
              <span className="block">Shopify Stores</span>
              <span className="block">
                Built to <span className="text-[#00C8F0]">Sell More</span>
              </span>
              <span className="block">From Day One</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[#D3DCEC] sm:text-[16.5px]"
            >
              We design and develop Shopify stores that look premium, load fast on every phone and turn visitors into
              repeat customers, so you can focus on your products while your store does the selling.
            </motion.p>

            {/* What's included */}
            <motion.div
              variants={fadeUp}
              className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-[#7FE3FA]">What&apos;s included</p>
              <ul className="mt-3 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-[#E1E8F5]">
                    <CheckCircle2 size={18} strokeWidth={2.3} className="mt-0.5 shrink-0 text-[#00C8F0]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[58px] items-center gap-4 rounded-full bg-[#00C8F0] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-[#061A3A] shadow-[0_10px_30px_rgba(0,200,240,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22D6FA] hover:shadow-[0_14px_36px_rgba(0,200,240,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A] sm:text-[16px]"
              >
                Get a free Shopify consultation
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
                className="inline-flex min-h-[58px] items-center rounded-full border-2 border-white/25 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00C8F0] hover:text-[#00C8F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[16px]"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Payments & shipping we set up */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-[13px] text-[#9FB0CF]">Payments &amp; delivery we set up for you</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {PAYMENTS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0A2A6B]/60 px-3 py-1.5 text-[13px] font-medium text-[#E1E8F5] transition-colors duration-300 hover:border-[#00C8F0]/60"
                  >
                    <Icon size={15} strokeWidth={2.2} className="text-[#00C8F0]" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── Right: storefront scene ───────────────────────────────── */}
          <motion.div
            variants={rightList}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="relative mx-auto aspect-[1.1/1] w-full max-w-[680px] [container-type:inline-size] lg:mr-0"
          >
            {/* Desktop storefront */}
            <motion.div
              variants={popIn}
              className="absolute left-0 top-[8%] w-[80%] overflow-hidden rounded-[2.4cqw] border border-white/10 bg-[#F4F7FC] text-[#0B1A33] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-[1cqw] bg-[#E6ECF6] px-[2.2cqw] py-[1.4cqw]">
                <span className="size-[1.5cqw] rounded-full bg-[#FF5F57]" />
                <span className="size-[1.5cqw] rounded-full bg-[#FEBC2E]" />
                <span className="size-[1.5cqw] rounded-full bg-[#28C840]" />
                <span className="ml-[1.6cqw] flex-1 rounded-full bg-white px-[1.8cqw] py-[0.5cqw] text-[max(8px,1.5cqw)] text-[#6B7A94]">
                  yourbrand.myshopify.com
                </span>
              </div>
              <div className="flex items-center justify-between px-[2.6cqw] py-[1.6cqw]">
                <span className="text-[max(10px,2.3cqw)] font-extrabold">YOUR BRAND</span>
                <span className="flex gap-[1.8cqw] text-[max(8px,1.4cqw)] font-medium text-[#41506B]">
                  <span>New</span>
                  <span>Men</span>
                  <span>Women</span>
                  <span>Sale</span>
                </span>
                <span className="flex gap-[1.2cqw]">
                  <Search className="size-[max(10px,1.9cqw)]" strokeWidth={2.2} />
                  <ShoppingCart className="size-[max(10px,1.9cqw)]" strokeWidth={2.2} />
                </span>
              </div>
              {/* Banner */}
              <div className="mx-[2.6cqw] flex items-center justify-between rounded-[1.4cqw] bg-[linear-gradient(120deg,#0A2A6B,#1E5BA8)] px-[3cqw] py-[2.6cqw] text-white">
                <span>
                  <span className="block text-[max(9px,1.5cqw)] font-semibold uppercase tracking-wider text-[#7FE3FA]">
                    Festive Sale
                  </span>
                  <span className="mt-[0.6cqw] block text-[max(12px,3.2cqw)] font-extrabold leading-tight">
                    Up to 40% Off
                  </span>
                  <span className="mt-[1.2cqw] inline-block rounded-full bg-[#00C8F0] px-[1.8cqw] py-[0.7cqw] text-[max(8px,1.3cqw)] font-semibold text-[#061A3A]">
                    Shop Now
                  </span>
                </span>
                <ShoppingBag className="size-[11cqw] text-white/85" strokeWidth={1.3} />
              </div>
              {/* Product grid */}
              <div className="grid grid-cols-4 gap-[1.4cqw] p-[2.6cqw]">
                {PRODUCTS.map(({ icon: Icon, name, price }) => (
                  <span key={name} className="rounded-[1.2cqw] bg-white p-[1.2cqw] shadow-[0_4px_12px_rgba(11,26,51,0.08)]">
                    <span className="flex aspect-square items-center justify-center rounded-[0.9cqw] bg-[#EEF3FA]">
                      <Icon className="size-[5.4cqw] text-[#1F5FD6]" strokeWidth={1.6} />
                    </span>
                    <span className="mt-[0.8cqw] block truncate text-[max(7px,1.3cqw)] font-medium">{name}</span>
                    <span className="block text-[max(7px,1.3cqw)] font-bold text-[#1F5FD6]">{price}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Phone with product page */}
            <motion.div variants={phoneIn} className="absolute bottom-[2%] right-[2%] z-10 w-[34%]">
              <div {...float("up", 7.5, -1)}>
                <div className="rounded-[5cqw] border-[1.2cqw] border-[#0B1A33] bg-[#0B1A33] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <div className="overflow-hidden rounded-[3.8cqw] bg-white text-[#0B1A33]">
                    <div className="mx-auto mt-[1cqw] h-[1.4cqw] w-[30%] rounded-full bg-[#0B1A33]" />
                    <div className="relative mx-[2cqw] mt-[2cqw] flex aspect-square items-center justify-center rounded-[2.4cqw] bg-[#EEF3FA]">
                      <Heart className="absolute right-[1.6cqw] top-[1.6cqw] size-[max(9px,2.4cqw)] text-[#9DB0CC]" strokeWidth={2.2} />
                      <Watch className="size-[16cqw] text-[#1F5FD6]" strokeWidth={1.4} />
                    </div>
                    <div className="px-[2.4cqw] pb-[2.6cqw] pt-[1.8cqw]">
                      <span className="block text-[max(9px,2.2cqw)] font-bold">Smart Watch Pro</span>
                      <span className="mt-[0.6cqw] flex gap-[0.3cqw]">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="size-[max(7px,1.6cqw)] fill-[#2F7CF6] text-[#2F7CF6]" />
                        ))}
                      </span>
                      <span className="mt-[0.8cqw] block text-[max(10px,2.6cqw)] font-extrabold text-[#1F5FD6]">₹3,499</span>
                      <span
                        className={`mt-[1.6cqw] flex items-center justify-center gap-[0.8cqw] rounded-full bg-[#00C8F0] py-[1.4cqw] text-[max(8px,1.8cqw)] font-bold text-[#061A3A] ${styles.pulse}`}
                      >
                        <ShoppingCart className="size-[max(9px,2cqw)]" strokeWidth={2.4} /> Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating: new order */}
            <Floating className="right-0 top-0 w-[38%]">
              <div {...float("down", 6.4, -2)}>
                <div className="flex items-center gap-[1.6cqw] rounded-[2.2cqw] border border-[#00C8F0]/40 bg-[#0A2A6B]/90 px-[2.2cqw] py-[1.8cqw] shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <span className="flex size-[max(26px,6cqw)] shrink-0 items-center justify-center rounded-[1.4cqw] bg-[#00C8F0] text-[#061A3A]">
                    <Package className="size-[60%]" strokeWidth={2.2} />
                  </span>
                  <span className="leading-[1.25]">
                    <span className="block text-[max(10px,2cqw)] font-semibold">New order #1042</span>
                    <span className="block text-[max(9px,1.6cqw)] text-[#C7D3E8]">₹3,499 · Paid via UPI</span>
                  </span>
                </div>
              </div>
            </Floating>

            {/* Floating: sales mini chart */}
            <Floating className="bottom-[6%] left-[2%] w-[34%]">
              <div {...float("up", 6.8, -3)}>
                <div className="rounded-[2.2cqw] bg-white p-[2.2cqw] text-[#0B1A33] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                  <span className="flex items-center justify-between text-[max(9px,1.6cqw)] font-medium text-[#41506B]">
                    Weekly sales
                    <Sparkles className="size-[max(10px,1.9cqw)] text-[#00B8E6]" strokeWidth={2.2} />
                  </span>
                  <span className="mt-[1.4cqw] flex h-[9cqw] items-end gap-[1cqw]">
                    {[38, 55, 46, 70, 62, 84, 100].map((h, i) => (
                      <span
                        key={i}
                        className={`flex-1 rounded-t-[0.6cqw] ${i === 6 ? "bg-[#00C8F0]" : "bg-[#BFD6F7]"} ${styles.grow}`}
                        style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            </Floating>

            {/* Floating: mobile & speed chips */}
            <Floating className="left-[34%] top-[1%]">
              <div {...float("up", 5.8, -1.5)}>
                <span className="flex items-center gap-[1cqw] rounded-full bg-white px-[2cqw] py-[1.1cqw] text-[max(9px,1.7cqw)] font-semibold text-[#0B1A33] shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <Smartphone className="size-[max(10px,2cqw)] text-[#2F7CF6]" strokeWidth={2.2} />
                  Mobile-first
                </span>
              </div>
            </Floating>
            <Floating className="left-[56%] top-[54%]">
              <div {...float("down", 6, -4)}>
                <span className="flex items-center gap-[1cqw] rounded-full border border-[#00C8F0]/40 bg-[#0A2A6B]/90 px-[2cqw] py-[1.1cqw] text-[max(9px,1.7cqw)] font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <Gauge className="size-[max(10px,2cqw)] text-[#00C8F0]" strokeWidth={2.2} />
                  Fast checkout
                </span>
              </div>
            </Floating>

            {/* Toast: order placed */}
            <span
              className={`absolute left-[4%] top-[2%] z-20 flex items-center gap-[1cqw] rounded-[1.4cqw] bg-white px-[1.8cqw] py-[1.2cqw] text-[max(9px,1.6cqw)] font-medium text-[#0B1A33] shadow-[0_12px_28px_rgba(0,0,0,0.35)] ${styles.toast}`}
            >
              <CheckCircle2 className="size-[max(10px,2cqw)] text-[#00B8E6]" strokeWidth={2.4} />
              Added to cart
            </span>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
