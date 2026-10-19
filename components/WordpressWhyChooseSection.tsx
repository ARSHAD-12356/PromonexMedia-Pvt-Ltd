"use client";

import { MotionConfig, motion } from "framer-motion";
import {
  BarChart3,
  Brush,
  CalendarDays,
  Check,
  Code2,
  CreditCard,
  FileText,
  Filter,
  Headphones,
  Home,
  Image as ImageIcon,
  Leaf,
  MessageSquare,
  Paintbrush,
  Pin,
  Plug,
  Puzzle,
  Settings,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./WordpressWhyChooseSection.module.css";

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

// Float loop: class from the CSS module + per-card duration/phase
const float = (dir: "up" | "down", s: number, delay = 0) => ({
  className: dir === "up" ? styles.floatUp : styles.floatDown,
  style: { animationDuration: `${s}s`, animationDelay: `${delay}s` } as CSSProperties,
});

// ── Content (stats are placeholder values, replace with verified numbers) ─
const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Puzzle, title: "Custom Functionality", text: "Get tailored features that match your exact business needs." },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Clean, secure code following WordPress best practices and coding standards.",
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    text: "Smooth integration with themes, third-party plugins and external APIs.",
  },
  { icon: Headphones, title: "Ongoing Support", text: "Continuous support, updates and feature enhancements." },
];

const STATS: { icon: LucideIcon; value: string; label: string; note: string }[] = [
  { icon: Users, value: "200+", label: "WordPress Websites", note: "Successfully Delivered" },
  { icon: Settings, value: "50+", label: "Custom Plugins", note: "Built for Unique Needs" },
  { icon: ShieldCheck, value: "98%", label: "Client Satisfaction", note: "Trusted by Businesses" },
  { icon: Headphones, value: "24/7", label: "Support & Assistance", note: "Always Here for You" },
];

const SIDEBAR: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: Home, label: "Dashboard" },
  { icon: Pin, label: "Posts" },
  { icon: ImageIcon, label: "Media" },
  { icon: FileText, label: "Pages" },
  { icon: MessageSquare, label: "Comments" },
  { icon: Plug, label: "Plugins", active: true },
  { icon: Paintbrush, label: "Appearance" },
  { icon: User, label: "Users" },
  { icon: Wrench, label: "Tools" },
  { icon: Settings, label: "Settings" },
];

const PLUGINS: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Puzzle, name: "Custom Plugin", text: "Extend your website with custom features" },
  { icon: CalendarDays, name: "Booking Manager", text: "Manage appointments and bookings" },
  { icon: Filter, name: "Product Filter", text: "Advanced filtering for your products" },
  { icon: CreditCard, name: "Payment Gateway", text: "Integrate secure payment solutions" },
];

// ── Illustration pieces ───────────────────────────────────────────────────

function InfoCard({ icon: Icon, children, check = true }: { icon: LucideIcon; children: ReactNode; check?: boolean }) {
  return (
    <div className="relative flex items-center gap-[1.8cqw] rounded-[2.2cqw] bg-white px-[2.6cqw] py-[2.2cqw] shadow-[0_16px_36px_rgba(6,26,58,0.13)]">
      <Icon className="size-[max(18px,5cqw)] shrink-0 text-[#1E88E5]" strokeWidth={2.2} aria-hidden="true" />
      <span className="text-[max(11px,2.2cqw)] font-semibold leading-[1.2] text-[#061A3A]">{children}</span>
      {check && (
        <span className="absolute -right-[1cqw] -top-[1cqw] flex size-[max(16px,3.4cqw)] items-center justify-center rounded-full bg-[#00B8E6] text-white">
          <Check className="size-[65%]" strokeWidth={3} aria-hidden="true" />
        </span>
      )}
    </div>
  );
}

function Toggle() {
  return (
    <span className="relative h-[2.6cqw] w-[4.8cqw] shrink-0 rounded-full bg-[#1E88E5]">
      <span className="absolute right-[0.4cqw] top-1/2 size-[1.9cqw] -translate-y-1/2 rounded-full bg-white" />
    </span>
  );
}

function Laptop() {
  return (
    <div className="w-full">
      <div className="rounded-t-[2.2cqw] border-[1.1cqw] border-b-[1.4cqw] border-[#1A2233] bg-[#1A2233] shadow-[0_30px_60px_rgba(6,26,58,0.28)]">
        <div className="flex overflow-hidden rounded-[0.6cqw] bg-white">
          {/* WP admin sidebar */}
          <div className="w-[25%] shrink-0 bg-[#1D2B44] py-[1.4cqw] text-[#C3CEE0]">
            <span className="mb-[1cqw] flex items-center gap-[0.8cqw] px-[1.6cqw] text-[1.45cqw] font-semibold text-white">
              <span className="flex size-[2.2cqw] items-center justify-center rounded-full border-[0.25cqw] border-white font-serif text-[1.3cqw] leading-none">
                W
              </span>
              WordPress
            </span>
            {SIDEBAR.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={`flex items-center gap-[0.9cqw] px-[1.6cqw] py-[0.75cqw] text-[1.25cqw] ${
                  active ? "bg-[#1E88E5] text-white" : ""
                }`}
              >
                <Icon className="size-[1.6cqw] shrink-0" strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          {/* Plugins screen */}
          <div className="flex-1 bg-[#F6F8FC] px-[2.2cqw] py-[1.8cqw] text-[#061A3A]">
            <div className="flex items-center gap-[1.4cqw]">
              <span className="text-[2.4cqw] font-bold">Plugins</span>
              <span className="rounded-[0.5cqw] border border-[#1E88E5] px-[1cqw] py-[0.3cqw] text-[1.2cqw] font-semibold text-[#1E88E5]">
                Add New Plugin
              </span>
              <span className="ml-auto rounded-[0.5cqw] border border-[#DCE4F0] bg-white px-[1.2cqw] py-[0.4cqw] text-[1.1cqw] text-[#8A97AD]">
                Search plugins...
              </span>
            </div>
            <div className="mt-[1.6cqw] space-y-[1.1cqw]">
              {PLUGINS.map(({ icon: Icon, name, text }) => (
                <div
                  key={name}
                  className="flex items-center gap-[1.4cqw] rounded-[1cqw] bg-white px-[1.6cqw] py-[1.3cqw] shadow-[0_3px_10px_rgba(6,26,58,0.06)]"
                >
                  <Icon className="size-[3cqw] shrink-0 text-[#1E88E5]" strokeWidth={2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.5cqw] font-semibold">{name}</span>
                    <span className="block truncate text-[1.1cqw] text-[#6B7A94]">{text}</span>
                  </span>
                  <Toggle />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="mx-[-5%] h-[2cqw] rounded-b-[2cqw] bg-gradient-to-b from-[#E4E9F1] to-[#AEB8C8]">
        <span className="mx-auto block h-[0.8cqw] w-[16%] rounded-b-[0.8cqw] bg-[#9AA6B8]" />
      </div>
    </div>
  );
}

function CodePanel() {
  return (
    <div className="rounded-[1.6cqw] bg-[#1A2233] p-[2cqw] font-mono shadow-[0_20px_40px_rgba(6,26,58,0.3)]">
      <div className="mb-[1.4cqw] flex gap-[0.8cqw]">
        <span className="size-[1.3cqw] rounded-full bg-[#FF5F57]" />
        <span className="size-[1.3cqw] rounded-full bg-[#FEBC2E]" />
        <span className="size-[1.3cqw] rounded-full bg-[#28C840]" />
      </div>
      <pre className="text-[1.4cqw] leading-[1.6] text-[#E1E8F5]">
        <span className="text-[#7FE3FA]">add_action</span>(<span className="text-[#A9C9F5]">&apos;init&apos;</span>,{"\n"}
        <span className="text-[#7FB4FF]">function</span>() {"{"}
        {"\n"}
        <span className="text-[#6FD3A8]">{"  "}// Your custom</span>
        {"\n"}
        <span className="text-[#6FD3A8]">{"  "}// plugin code</span>
        {"\n"}
        {"}"});
      </pre>
    </div>
  );
}

function Plant() {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <div className="relative h-[13cqw] w-[13cqw]">
        <Leaf className="absolute bottom-0 left-[8%] size-[8cqw] -rotate-[30deg] text-[#2E9D62]" strokeWidth={1.5} fill="#43B97A" />
        <Leaf className="absolute bottom-[10%] right-[4%] size-[8cqw] rotate-[20deg] text-[#2E9D62]" strokeWidth={1.5} fill="#5CC98C" />
        <Leaf className="absolute left-1/2 top-0 size-[8cqw] -translate-x-1/2 text-[#2E9D62]" strokeWidth={1.5} fill="#3FAE70" />
      </div>
      <span className="-mt-[1cqw] h-[7cqw] w-[10cqw] rounded-b-[2.4cqw] rounded-t-[0.8cqw] bg-white shadow-[0_10px_24px_rgba(6,26,58,0.15)]" />
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────

export default function WordpressWhyChooseSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="wp-why-heading"
        className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A3A] sm:px-6 sm:py-20 md:pl-20 lg:py-24 min-[1420px]:pl-6"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[46fr_54fr] lg:gap-8">
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
                id="wp-why-heading"
                className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[42px] xl:text-[52px]"
              >
                <span className="block">Why Choose Our</span>
                <span className="block text-[#00B8E6]">WordPress Plugin</span>
                <span className="block">Development</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[600px] text-[15.5px] leading-[1.7] text-[#4A5873] sm:text-[17px]"
              >
                We build custom WordPress plugins that are secure, scalable and easy to use — designed to match your exact
                business requirements and help you extend your website&apos;s functionality without limitations.
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
              {/* Soft circle */}
              <motion.span
                variants={popIn}
                className="absolute left-[16%] top-[10%] aspect-square w-[74%] rounded-full bg-[#EEF6FE]"
              />

              <motion.div variants={popIn} className="absolute left-[3%] top-[44%] w-[30%] -rotate-[8deg]">
                <CodePanel />
              </motion.div>

              <motion.div variants={slideIn} className="absolute left-[16%] top-[27%] w-[68%]">
                <Laptop />
              </motion.div>

              {/* WordPress-style badge */}
              <motion.div variants={popIn} className="absolute left-[54%] top-[11%] w-[15%]">
                <span className="flex aspect-square w-full items-center justify-center rounded-full border-[1cqw] border-white bg-[#1E5BA8] font-serif text-[8cqw] font-bold leading-none text-white shadow-[0_14px_30px_rgba(6,26,58,0.25)]">
                  W
                </span>
              </motion.div>

              <motion.div variants={popIn} className="absolute left-[13%] top-[72%]">
                <span className="flex size-[9cqw] items-center justify-center rounded-[2cqw] bg-white text-[#1E88E5] shadow-[0_12px_26px_rgba(6,26,58,0.16)]">
                  <Code2 className="size-[5cqw]" strokeWidth={2.4} />
                </span>
              </motion.div>

              <motion.div variants={popIn} className="absolute bottom-[14%] right-[0%]">
                <Plant />
              </motion.div>

              {/* Floating info cards */}
              <motion.div variants={popIn} className="absolute left-[2%] top-[5%] w-[38%]">
                <div {...float("up", 6.5)}>
                  <div className="-rotate-[5deg]">
                    <InfoCard icon={Puzzle}>Custom Plugin Development</InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute right-[0%] top-[2%] w-[27%]">
                <div {...float("down", 7, -1.5)}>
                  <div className="rotate-[6deg]">
                    <InfoCard icon={Brush}>Theme Integration</InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute right-[0%] top-[37%] w-[25%]">
                <div {...float("up", 6, -3)}>
                  <div className="-rotate-[4deg]">
                    <InfoCard icon={Settings}>API Integration</InfoCard>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={popIn} className="absolute bottom-[3%] right-[10%] w-[30%]">
                <div {...float("down", 7.4, -2)}>
                  <div className="-rotate-[4deg]">
                    <InfoCard icon={BarChart3} check={false}>
                      <span className="flex items-center gap-[1cqw]">
                        Better Performance
                        <TrendingUp className="size-[max(14px,3.4cqw)] shrink-0 text-[#00B8E6]" strokeWidth={2.4} />
                      </span>
                    </InfoCard>
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
