"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarHeart,
  LayoutGrid,
  MessageCircleHeart,
  PieChart,
  RefreshCcw,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const SERVICES: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Personalized", description: "Product Recommendations for Increased Conversions", icon: LayoutGrid },
  { title: "Abandoned Cart Recovery", description: "Win Back Lost Sales", icon: ShoppingCart },
  { title: "Exclusive Promotions", description: "Discounts to Drive Repeat Purchases", icon: Sparkles },
  { title: "Customer Reviews", description: "Request Testimonials to Build Trust", icon: MessageCircleHeart },
  { title: "Upselling and Cross-Selling", description: "Maximize Customer Value", icon: PieChart },
  { title: "Seasonal Campaigns", description: "Capitalize on Holiday Shopping Trends", icon: CalendarHeart },
  { title: "Re-Engagement Campaigns", description: "Bring Back Inactive Customers", icon: RefreshCcw },
];

// Ecommerce email services grid + "Got Query?" enquiry card
export default function EmailMarketingEcommerceSection() {
  return (
    <section
      aria-labelledby="em-ecommerce-heading"
      className="bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-[980px] text-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#E3F8FD] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0478FD] sm:text-[13px]">
            We are an email marketing agency
          </span>
          <h2
            id="em-ecommerce-heading"
            className="mt-5 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[42px] lg:text-[52px]"
          >
            Email marketing services especially designed for{" "}
            <span className="text-[#00B8E6]">ecommerce.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[22px] border border-[#E3EAF5] bg-white p-7 shadow-[0_10px_30px_rgba(6,26,64,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#061A40]/40 hover:shadow-[0_22px_45px_rgba(6,26,64,0.18)]"
            >
              {/* Top accent bar appears on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#020B35,#0A2A6B)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#E6F9FD,#DCEBFF)] text-[#0478FD] transition-colors duration-300 group-hover:bg-[linear-gradient(135deg,#0A2A6B,#020B35)] group-hover:text-white">
                <Icon size={26} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="mt-6 text-[12px] font-semibold text-[#9AA8BF]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-[20px] font-bold leading-snug sm:text-[21px]">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#4A5A75]">{description}</p>
            </motion.article>
          ))}

          {/* Enquiry card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="group relative flex h-full min-h-[270px] flex-col justify-between overflow-hidden rounded-[22px] bg-[linear-gradient(150deg,#0A2A6B_0%,#061A40_60%,#031539_100%)] p-7 text-white shadow-[0_22px_45px_rgba(6,26,64,0.28)] transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8EF] focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#00C8EF]/20 blur-2xl"
              />
              <div className="relative">
                <p className="text-[38px] font-bold leading-[1.05] sm:text-[42px]">
                  Got
                  <br />
                  <span className="text-[#00C8EF]">Query?</span>
                </p>
                <p className="mt-4 text-[18px] font-medium text-[#D0D9EB]">Enquire Now!</p>
              </div>
              <span className="relative mt-6 flex size-14 items-center justify-center rounded-full bg-[#00C8EF] text-[#061A40] transition-transform duration-300 group-hover:translate-x-1.5">
                <ArrowRight size={26} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
