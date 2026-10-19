"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Brush,
  CheckCircle2,
  FileText,
  Gauge,
  Image as ImageIcon,
  LayoutDashboard,
  MousePointerClick,
  Palette,
  Plug,
  Plus,
  Rocket,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Type,
  Users,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const WORDS = ["Fast", "Secure", "SEO-Ready", "Easy to Manage"];

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

const KEYFRAMES = `
@keyframes wph-float-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-9px,0); } }
@keyframes wph-float-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,8px,0); } }
@keyframes wph-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
@keyframes wph-build { 0%,8% { transform: scaleX(0); } 45%,100% { transform: scaleX(1); } }
@keyframes wph-toast { 0%,12% { opacity: 0; transform: translate3d(0,14px,0); } 20%,80% { opacity: 1; transform: translate3d(0,0,0); } 90%,100% { opacity: 0; transform: translate3d(0,-8px,0); } }
@keyframes wph-cursor { 0%,100% { transform: translate(0,0); } 40% { transform: translate(-18px,-26px); } 60% { transform: translate(-18px,-26px) scale(.9); } }
.wph-anim { will-change: transform; }
@media (prefers-reduced-motion: reduce) { .wph-anim { animation: none !important; opacity: 1 !important; } }
`;

const loop = (name: string, s: number, delay = 0, timing = "ease-in-out"): CSSProperties => ({
  animation: `${name} ${s}s ${timing} ${delay}s infinite`,
});

const SERVICES = [
  { icon: Palette, label: "Custom Themes" },
  { icon: Plug, label: "Plugin Development" },
  { icon: ShoppingCart, label: "WooCommerce Stores" },
  { icon: Zap, label: "Speed & Security" },
];

const STEPS = [
  { n: "01", label: "Plan", icon: FileText },
  { n: "02", label: "Design", icon: Brush },
  { n: "03", label: "Build", icon: Blocks },
  { n: "04", label: "Launch", icon: Rocket },
];

const ADMIN_MENU = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FileText, label: "Pages", active: true },
  { icon: ImageIcon, label: "Media" },
  { icon: Brush, label: "Appearance" },
  { icon: Plug, label: "Plugins" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
];

function RotatingWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative block h-[1.15em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute left-0 top-0 whitespace-nowrap text-[#00C8F0]"
        >
          {WORDS[i]}.
        </motion.span>
      </AnimatePresence>
      {/* Screen readers get the full list once */}
      <span className="sr-only">{WORDS.join(", ")}.</span>
    </span>
  );
}

export default function WordpressHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <style>{KEYFRAMES}</style>
      <section className="relative isolate overflow-hidden bg-[#061A3A] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-8 sm:py-16 md:pl-24 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:py-20 xl:pl-20 min-[1480px]:pl-12">
          {/* ── Left: content ───────────────────────────────────────── */}
          <motion.div variants={leftList} initial="hidden" animate="show" className="relative z-10 max-w-[600px]">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00C8F0]/50 bg-[#00C8F0]/10 px-4 py-1.5 text-[13px] font-semibold tracking-[0.14em] text-[#7FE3FA]">
                <Blocks size={16} strokeWidth={2.3} aria-hidden="true" />
                WORDPRESS DEVELOPMENT
              </span>
              <span className="text-[13px] font-medium text-[#9FB0CF]">Patna, Bihar</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[clamp(2.1rem,3.7vw,3.3rem)] font-extrabold leading-[1.12] tracking-tight"
            >
              <span className="block sm:whitespace-nowrap">WordPress Websites</span>
              <span className="block">That Are</span>
              <RotatingWord />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[#D3DCEC] sm:text-[16.5px]"
            >
              From custom themes to WooCommerce stores, we build WordPress websites that load fast, rank better and stay
              easy for your team to update, without touching a line of code.
            </motion.p>

            {/* Service chips */}
            <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-2.5">
              {SERVICES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[13.5px] font-medium text-[#E1E8F5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00C8F0]/60 hover:bg-[#00C8F0]/10"
                >
                  <Icon size={16} strokeWidth={2.2} className="text-[#00C8F0]" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[58px] items-center gap-4 rounded-full bg-[#00C8F0] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-[#061A3A] shadow-[0_10px_30px_rgba(0,200,240,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22D6FA] hover:shadow-[0_14px_36px_rgba(0,200,240,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A] sm:text-[16px]"
              >
                Get a free WordPress consultation
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

            {/* Process strip */}
            <motion.ol variants={fadeUp} className="mt-10 grid max-w-[560px] grid-cols-4 gap-2" aria-label="Our process">
              {STEPS.map(({ n, label, icon: Icon }, i) => (
                <li key={n} className="relative flex flex-col items-start">
                  <div className="flex w-full items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#00C8F0]/60 bg-[#0A2A6B] text-[#00C8F0]">
                      <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="mx-1.5 h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
                        <span
                          className="wph-anim block h-full origin-left bg-[#00C8F0]"
                          style={loop("wph-build", 4, i * 0.6)}
                        />
                      </span>
                    )}
                  </div>
                  <span className="mt-2 text-[11.5px] font-semibold tracking-wider text-[#7FE3FA]">{n}</span>
                  <span className="text-[13.5px] font-medium text-white sm:text-[14.5px]">{label}</span>
                </li>
              ))}
            </motion.ol>
          </motion.div>

          {/* ── Right: WordPress dashboard mockup ─────────────────────── */}
          <motion.div
            variants={rightList}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[680px] pb-[6%] pt-[4%] [container-type:inline-size] lg:mr-0"
          >
            {/* Browser window */}
            <motion.div
              variants={popIn}
              className="relative overflow-hidden rounded-[2.6cqw] border border-white/10 bg-[#0B2350] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-[1.2cqw] border-b border-white/10 px-[2.6cqw] py-[1.8cqw]">
                <span className="size-[1.7cqw] rounded-full bg-[#FF5F57]" />
                <span className="size-[1.7cqw] rounded-full bg-[#FEBC2E]" />
                <span className="size-[1.7cqw] rounded-full bg-[#28C840]" />
                <span className="ml-[2cqw] flex-1 truncate rounded-full bg-white/[0.07] px-[2cqw] py-[0.7cqw] text-[max(9px,1.7cqw)] text-[#9FB0CF]">
                  yourbusiness.com/wp-admin/post.php
                </span>
              </div>

              <div className="flex min-h-[54cqw]">
                {/* Admin sidebar */}
                <div className="w-[25%] shrink-0 bg-[#061A3A] py-[2cqw]">
                  {ADMIN_MENU.map(({ icon: Icon, label, active }) => (
                    <span
                      key={label}
                      className={`flex items-center gap-[1.2cqw] px-[2cqw] py-[1.2cqw] text-[max(9px,1.65cqw)] ${
                        active ? "border-l-[0.5cqw] border-[#00C8F0] bg-[#00C8F0]/15 text-white" : "text-[#9FB0CF]"
                      }`}
                    >
                      <Icon className="size-[max(10px,2cqw)] shrink-0" strokeWidth={2} />
                      <span className="truncate">{label}</span>
                    </span>
                  ))}
                </div>

                {/* Block editor */}
                <div className="relative flex-1 bg-[#F4F7FC] p-[3cqw] text-[#0B1A33]">
                  <div className="mb-[2.4cqw] flex items-center justify-between">
                    <span className="text-[max(10px,2cqw)] font-semibold text-[#41506B]">Edit Page: Home</span>
                    <span className="rounded-[0.8cqw] bg-[#2F7CF6] px-[2cqw] py-[0.8cqw] text-[max(9px,1.6cqw)] font-semibold text-white">
                      Update
                    </span>
                  </div>

                  {/* Heading block */}
                  <div className="relative rounded-[1cqw] border-[0.25cqw] border-[#2F7CF6] bg-white px-[2cqw] py-[1.6cqw]">
                    <span className="absolute -top-[2.2cqw] left-[1.4cqw] flex items-center gap-[0.6cqw] rounded-[0.6cqw] bg-[#0B1A33] px-[1cqw] py-[0.4cqw] text-[max(8px,1.3cqw)] text-white">
                      <Type className="size-[max(8px,1.4cqw)]" strokeWidth={2.4} /> Heading
                    </span>
                    <span className="text-[max(13px,3.3cqw)] font-extrabold leading-tight">
                      Grow your business online
                      <span
                        className="wph-anim ml-[0.4cqw] inline-block h-[3cqw] w-[0.35cqw] translate-y-[0.4cqw] bg-[#2F7CF6]"
                        style={loop("wph-blink", 1, 0, "steps(1)")}
                      />
                    </span>
                  </div>

                  {/* Text block */}
                  <div className="mt-[1.8cqw] space-y-[1cqw] px-[0.6cqw]">
                    <span className="block h-[1.2cqw] w-[92%] rounded-full bg-[#D3DEEF]" />
                    <span className="block h-[1.2cqw] w-[78%] rounded-full bg-[#D3DEEF]" />
                  </div>

                  {/* Image + button blocks */}
                  <div className="mt-[2.4cqw] grid grid-cols-[1.3fr_1fr] gap-[2cqw]">
                    <span className="flex aspect-[1.5/1] items-center justify-center rounded-[1cqw] bg-[linear-gradient(135deg,#2F7CF6,#00C8F0)] text-white">
                      <ImageIcon className="size-[6cqw]" strokeWidth={1.6} />
                    </span>
                    <span className="flex flex-col justify-center gap-[1.2cqw]">
                      <span className="block h-[1.2cqw] w-full rounded-full bg-[#D3DEEF]" />
                      <span className="block h-[1.2cqw] w-[70%] rounded-full bg-[#D3DEEF]" />
                      <span className="mt-[0.6cqw] inline-flex w-fit items-center rounded-full bg-[#061A3A] px-[2cqw] py-[0.9cqw] text-[max(9px,1.5cqw)] font-semibold text-white">
                        Get Started
                      </span>
                    </span>
                  </div>

                  {/* Add block */}
                  <span className="mt-[2.4cqw] flex items-center gap-[1cqw] text-[max(9px,1.5cqw)] text-[#6B7A94]">
                    <span className="flex size-[3.2cqw] items-center justify-center rounded-[0.6cqw] bg-[#0B1A33] text-white">
                      <Plus className="size-[2cqw]" strokeWidth={2.6} />
                    </span>
                    Add block
                  </span>

                  <MousePointerClick
                    className="wph-anim absolute bottom-[8%] right-[10%] size-[4.4cqw] fill-white text-[#0B1A33]"
                    strokeWidth={1.8}
                    style={loop("wph-cursor", 5, 0.5)}
                  />

                  {/* "Published" toast */}
                  <span
                    className="wph-anim absolute bottom-[4%] left-[4%] flex items-center gap-[1cqw] rounded-[1cqw] bg-[#0B1A33] px-[1.8cqw] py-[1.2cqw] text-[max(9px,1.5cqw)] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                    style={loop("wph-toast", 6, 1, "ease")}
                  >
                    <CheckCircle2 className="size-[max(10px,2cqw)] text-[#00C8F0]" strokeWidth={2.4} />
                    Page updated. View page
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating: PageSpeed score */}
            <motion.div variants={popIn} className="absolute -left-[3%] top-[54%] w-[25%]">
              <div className="wph-anim" style={loop("wph-float-a", 6.5)}>
                <div className="rounded-[2.2cqw] bg-white p-[2.2cqw] text-[#0B1A33] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                  <span className="flex items-center gap-[1cqw] text-[max(9px,1.6cqw)] font-medium text-[#41506B]">
                    <Gauge className="size-[max(10px,2cqw)] text-[#2F7CF6]" strokeWidth={2.2} /> PageSpeed
                  </span>
                  <span className="mt-[1.2cqw] flex items-center gap-[1.4cqw]">
                    <span className="relative flex size-[9cqw] items-center justify-center rounded-full bg-[conic-gradient(#00C8F0_0_96%,#E3EAF5_96%_100%)]">
                      <span className="absolute inset-[0.9cqw] rounded-full bg-white" />
                      <span className="relative text-[max(11px,2.6cqw)] font-extrabold">96</span>
                    </span>
                    <span className="text-[max(9px,1.5cqw)] leading-[1.3] text-[#41506B]">
                      Mobile
                      <br />
                      score
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating: security / updates */}
            <motion.div variants={popIn} className="absolute -right-[2%] top-0 w-[34%]">
              <div className="wph-anim" style={loop("wph-float-b", 7, -2)}>
                <div className="flex items-center gap-[1.6cqw] rounded-[2.2cqw] border border-[#00C8F0]/40 bg-[#0A2A6B]/90 px-[2.2cqw] py-[1.8cqw] shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <ShieldCheck className="size-[max(16px,4.6cqw)] shrink-0 text-[#00C8F0]" strokeWidth={2} />
                  <span className="leading-[1.25]">
                    <span className="block text-[max(10px,1.9cqw)] font-semibold">Secure & Updated</span>
                    <span className="block text-[max(9px,1.5cqw)] text-[#C7D3E8]">Core, theme & plugins</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating: SEO ready */}
            <motion.div variants={popIn} className="absolute -right-[3%] bottom-0 w-[30%]">
              <div className="wph-anim" style={loop("wph-float-a", 7.4, -3.5)}>
                <div className="flex items-center gap-[1.4cqw] rounded-[2.2cqw] bg-white px-[2.2cqw] py-[1.8cqw] text-[#0B1A33] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                  <BadgeCheck className="size-[max(16px,4.2cqw)] shrink-0 text-[#2F7CF6]" strokeWidth={2} />
                  <span className="leading-[1.25]">
                    <span className="block text-[max(10px,1.9cqw)] font-semibold">SEO Ready</span>
                    <span className="block text-[max(9px,1.5cqw)] text-[#41506B]">Schema & clean URLs</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
