"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgePercent,
  BellRing,
  Check,
  CircleCheck,
  MessageSquareText,
  Repeat2,
  Rocket,
  MessageCircle,
  Plus,
  Send,
  ShoppingCart,
  Sparkles,
  Target,
  Timer,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const journeySteps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Opt in",
    description: "Capture clear consent through website forms, checkout journeys, lead campaigns or customer touchpoints.",
    icon: UserRoundCheck,
  },
  {
    number: "02",
    title: "Nurture",
    description: "Answer common questions, share useful information and move interested leads toward the next step.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Convert",
    description: "Use relevant product reminders, cart recovery messages, offers and clear calls to action.",
    icon: Target,
  },
  {
    number: "04",
    title: "Support",
    description: "Use WhatsApp for useful order, service and customer communication where your setup allows.",
    icon: CircleCheck,
  },
  {
    number: "05",
    title: "Retain",
    description: "Reconnect with past buyers through replenishment, launches, back-in-stock alerts and win-back campaigns.",
    icon: Sparkles,
  },
];

const automationSteps: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "Customer leaves products in cart",
    detail: "Trigger: high purchase intent",
    icon: ShoppingCart,
  },
  {
    title: "Apply timing and audience conditions",
    detail: "Check consent, order status and eligibility",
    icon: Timer,
  },
  {
    title: "Send a relevant WhatsApp reminder",
    detail: "Product context with a clear next step",
    icon: Send,
  },
  {
    title: "Stop or update the journey after purchase",
    detail: "Avoid unnecessary follow-up messages",
    icon: Check,
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.19em] sm:text-[12px] ${light ? "text-[#67E8F9]" : "text-[#087F8C]"}`}>
      <span className={`h-0.5 w-7 rounded-full ${light ? "bg-[#00D9FF]" : "bg-[#00B88A]"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function WhatsAppJourneyPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] min-w-0">
      <div aria-hidden="true" className="absolute -inset-5 rounded-[38px] bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,217,255,0.18),transparent_70%)] blur-2xl sm:-inset-8" />
      <div className="relative rounded-[24px] border border-white/15 bg-white/[0.07] p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:rounded-[30px] sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-1.5 rounded-[16px] border border-white/10 bg-[#071641] px-3.5 py-3 sm:rounded-[18px] sm:px-5">
          <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#9BAAC8] sm:text-[11px] sm:tracking-[0.15em]">Illustrative workflow</span>
          <span className="text-[11px] font-semibold text-white sm:text-sm">Abandoned Cart Recovery</span>
        </div>

        <div className="mx-auto mt-3 w-full max-w-[430px] overflow-hidden rounded-[22px] border border-white/20 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] sm:mt-4 sm:rounded-[28px]">
          <div className="flex items-center gap-3 border-b border-[#E7EDF5] px-3.5 py-3 sm:px-5 sm:py-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00D9FF,#087CEB)] text-[11px] font-extrabold text-[#020B35] sm:size-11 sm:text-xs">PM</span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-bold text-[#102246] sm:text-sm">Promonex Store</p>
              <p className="mt-0.5 truncate text-[10px] text-[#71809B] sm:text-xs">WhatsApp customer journey</p>
            </div>
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-[#E7F8FC] px-2 py-1 text-[9px] font-semibold text-[#067D93] sm:text-[10px]">
              <span className="size-1.5 rounded-full bg-[#00B88A]" /> Live flow
            </span>
          </div>

          <div className="space-y-3 bg-[#F1F7F8] p-3 sm:space-y-4 sm:p-5">
            <div className="max-w-[94%] rounded-2xl rounded-tr-md border border-[#DCE8E7] bg-white p-3 text-[11px] leading-relaxed text-[#23334D] shadow-sm sm:p-4 sm:text-[13px]">
              <p className="font-bold text-[#102246]">Hi Ananya 👋</p>
              <p className="mt-1">The black sling bag in your cart is still available. Would you like to continue your order?</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-[#C8D9E9] bg-white px-2.5 py-1.5 text-[9px] font-semibold text-[#087F8C] sm:text-[10px]">View cart</span>
                <span className="rounded-lg border border-[#C8D9E9] bg-white px-2.5 py-1.5 text-[9px] font-semibold text-[#087F8C] sm:text-[10px]">Need help?</span>
              </div>
            </div>
            <div className="ml-auto max-w-[78%] rounded-2xl rounded-tl-md bg-[#DDF5FA] px-3 py-2.5 text-[10px] leading-relaxed text-[#23334D] sm:px-4 sm:py-3 sm:text-xs">
              Is the offer still active?
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-tr-md border border-[#DCE8E7] bg-white p-3 text-[10px] leading-relaxed text-[#23334D] shadow-sm sm:p-4 sm:text-xs">
              Yes. You can reopen your cart from the button above and complete checkout.
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:mt-4 sm:gap-3">
          {[
            ["Trigger", "Cart abandoned"],
            ["Audience", "Opted-in shopper"],
            ["Goal", "Return to checkout"],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0 rounded-[14px] border border-white/15 bg-[#071641]/90 px-3 py-2.5 sm:rounded-[16px] sm:px-3.5 sm:py-3">
              <p className="text-[9px] text-[#9BAAC8] sm:text-[10px]">{label}</p>
              <p className="mt-1 truncate text-[10px] font-semibold text-white sm:text-xs">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppMarketingHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(0,217,255,0.16),transparent_42%),radial-gradient(ellipse_at_12%_82%,rgba(52,79,202,0.2),transparent_38%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.7px,transparent_0.7px)] [background-size:22px_22px]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[0.98fr_1.02fr] lg:gap-12 lg:px-10 lg:py-12 xl:gap-16 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative z-10 mx-auto w-full max-w-[680px] min-w-0 lg:mx-0 lg:pl-8"
        >
          <Eyebrow light>WhatsApp marketing services</Eyebrow>
          <h1 className="mt-5 text-[clamp(2rem,7.8vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.045em] sm:mt-6 sm:text-[clamp(2.7rem,5.3vw,4.5rem)] lg:text-[clamp(2.9rem,4.4vw,4.5rem)]">
            Turn WhatsApp Into a <span className="text-[#00D9FF]">Revenue &amp; Retention Channel.</span>
          </h1>
          <p className="mt-5 max-w-[640px] text-[14px] leading-[1.8] text-[#C5D3EA] sm:mt-6 sm:text-[16px] lg:text-[17px]">
            Promonex Media helps ecommerce and service businesses plan better customer journeys through WhatsApp campaigns, lead nurturing, abandoned cart recovery, audience segmentation, automation and repeat-purchase communication.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row sm:mt-8 sm:gap-4">
            <Link
              href="#whatsapp-marketing-contact"
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-3 text-center text-[13px] font-bold text-[#020B35] shadow-[0_10px_28px_rgba(0,217,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#60E7FA] min-[480px]:w-auto sm:min-h-[56px] sm:px-6 sm:text-[14px]"
            >
              Build my WhatsApp strategy <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="#whatsapp-marketing-journey"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.04] px-5 py-3 text-center text-[13px] font-semibold text-white transition-all duration-300 hover:border-[#00D9FF]/70 hover:bg-[#00D9FF]/10 min-[480px]:w-auto sm:min-h-[56px] sm:px-6 sm:text-[14px]"
            >
              Explore WhatsApp Marketing
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-3 sm:mt-9 sm:gap-3">
            {["Opt-in focused", "Ecommerce + lead generation", "Automation-ready journeys"].map((item) => (
              <div key={item} className="flex min-w-0 items-center gap-2 text-[11px] font-semibold text-[#DBE8F8] sm:text-xs">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#00D9FF]/15 text-[#00D9FF]"><Check size={12} strokeWidth={3} /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          className="relative mx-auto w-full min-w-0 max-w-[660px] lg:mx-0 lg:ml-auto"
        >
          <WhatsAppJourneyPreview />
        </motion.div>
      </div>
    </section>
  );
}

export function WhatsAppCustomerJourneySection() {
  return (
    <section id="whatsapp-marketing-journey" className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-[850px] text-center"
        >
          <Eyebrow>WhatsApp customer journey</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.55rem,7vw,1.9rem)] font-bold leading-[1.12] tracking-[-0.04em] text-[#061A40] sm:text-[clamp(2.2rem,5vw,3.4rem)]">
            WhatsApp Marketing Works Best When <span className="text-[#00D9FF]">Every Message Has a Purpose.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.8] text-[#53627B] sm:mt-5 sm:text-[16px]">
            We map WhatsApp communication to the customer lifecycle instead of sending the same broadcast to everyone.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
          {journeySteps.map(({ number, title, description, icon: Icon }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
              className={`min-w-0 rounded-[22px] border p-5 transition-[border-color,box-shadow] duration-300 hover:border-[#00B8D7]/50 hover:shadow-[0_16px_36px_rgba(6,26,64,0.09)] sm:p-6 ${index === 2 ? "border-[#BFEAF2] bg-[#F0FBFD]" : "border-[#E1E8F1] bg-white"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#061A40] text-[#00D9FF]">
                  <Icon size={19} strokeWidth={2.1} aria-hidden="true" />
                </span>
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#087F8C]">{number}</span>
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-[#061A40] sm:text-[19px]">{title}</h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-[#53627B] sm:text-[14px]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptInPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] min-w-0 rounded-[24px] border border-[#D8E5EA] bg-white p-4 shadow-[0_20px_55px_rgba(6,26,64,0.08)] sm:rounded-[30px] sm:p-6 lg:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5EAF0] pb-4">
        <h3 className="text-[14px] font-bold text-[#102246] sm:text-[16px]">Get useful updates on WhatsApp</h3>
        <span className="rounded-full bg-[#E8F8FC] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087F8C]">Sample opt-in</span>
      </div>

      <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
        <div className="rounded-xl border border-[#E2E7ED] px-3.5 py-3 text-[12px] text-[#748198] sm:px-4 sm:py-3.5 sm:text-[13px]">Name: Ananya Mehta</div>
        <div className="rounded-xl border border-[#E2E7ED] px-3.5 py-3 text-[12px] text-[#748198] sm:px-4 sm:py-3.5 sm:text-[13px]">Mobile: +91 98XX XXX 214</div>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-[#F3F8FA] p-3 text-[10px] leading-[1.6] text-[#53627B] sm:p-3.5 sm:text-[11px]">
        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded bg-[#00B88A] text-white"><Check size={11} strokeWidth={3} /></span>
        <span>I agree to receive relevant product, service and marketing communication on WhatsApp. I can opt out later.</span>
      </div>

      <div className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-4 py-3 text-center text-[12px] font-bold text-[#020B35] sm:mt-4 sm:min-h-[54px] sm:text-[13px]">
        Continue on WhatsApp <ArrowRight size={15} aria-hidden="true" />
      </div>
      <p className="mt-3 border-l-2 border-[#00B88A] bg-[#F2FBF7] px-3 py-2.5 text-[10px] leading-[1.6] text-[#617387] sm:text-[11px]">
        Sample flow. Consent wording and message rules should match your business setup and applicable requirements.
      </p>
    </div>
  );
}

export function WhatsAppOptInSection() {
  return (
    <section className="overflow-hidden bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="min-w-0"
        >
          <Eyebrow>WhatsApp opt-in strategy</Eyebrow>
          <h2 className="mt-4 max-w-[650px] text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#061A40]">
            Good WhatsApp Marketing Starts Before the <span className="text-[#00D9FF]">First Message.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#53627B] sm:text-[16px]">
            Promonex Media helps businesses plan permission-based WhatsApp journeys across websites, lead forms, checkout pages and campaigns. Clear opt-in and better audience data make later communication more useful and easier to segment.
          </p>
          <p className="mt-4 text-[14px] leading-[1.8] text-[#53627B] sm:text-[16px]">
            For businesses using the WhatsApp Business Platform or third-party tools, we can also plan how website actions and customer stages feed into campaign workflows.
          </p>
          <Link
            href="#whatsapp-marketing-contact"
            className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-3 text-center text-[13px] font-bold text-[#020B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#60E7FA] sm:mt-7 sm:min-h-[54px] sm:px-6 sm:text-[14px]"
          >
            Plan my opt-in journey <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
          className="min-w-0"
        >
          <OptInPreview />
        </motion.div>
      </div>
    </section>
  );
}

export function WhatsAppAutomationSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020B35] px-4 py-16 font-['Poppins',sans-serif] text-white sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(0,217,255,0.13),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-9 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="min-w-0"
        >
          <Eyebrow light>WhatsApp automation services</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            Trigger Messages From Customer Actions, <span className="text-[#00D9FF]">Not Guesswork.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#C5D3EA] sm:text-[16px]">
            WhatsApp automation can connect customer behaviour with timely follow-ups. We plan workflows for cart recovery, lead nurturing, product interest, repeat purchases and customer reactivation based on the tools available in your stack.
          </p>
          <Link
            href="#whatsapp-marketing-contact"
            className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-3 text-center text-[13px] font-bold text-[#020B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#60E7FA] sm:mt-7 sm:min-h-[54px] sm:px-6 sm:text-[14px]"
          >
            Plan my WhatsApp automations <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
          className="relative min-w-0"
        >
          <div aria-hidden="true" className="absolute inset-5 rounded-[32px] bg-[#00D9FF]/10 blur-3xl" />
          <div className="relative rounded-[22px] border border-white/15 bg-white/[0.06] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:rounded-[28px] sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3 px-1 sm:mb-4 sm:px-2">
              <p className="text-[12px] font-bold text-white sm:text-sm">Example customer workflow</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00D9FF]/25 bg-[#00D9FF]/10 px-2.5 py-1 text-[9px] font-semibold text-[#82EAF7] sm:text-[10px]">
                <span className="size-1.5 rounded-full bg-[#00D9FF]" /> Consent-aware
              </span>
            </div>
            <div className="space-y-2.5 sm:space-y-3">
              {automationSteps.map(({ title, detail, icon: Icon }, index) => (
                <div key={title} className="relative flex min-w-0 items-center gap-3 rounded-[16px] border border-white/10 bg-[#071641] p-3 sm:gap-4 sm:rounded-[18px] sm:p-4">
                  {index < automationSteps.length - 1 && <span aria-hidden="true" className="absolute left-[27px] top-[48px] hidden h-3 border-l-2 border-[#00D9FF]/45 sm:block" />}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#00D9FF]/12 text-[#00D9FF] sm:size-11 sm:rounded-[14px]">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold leading-snug text-white sm:text-[13px]">{title}</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-[#A9B8D3] sm:text-[11px]">{detail}</p>
                  </div>
                  <span className="hidden shrink-0 text-[10px] font-bold text-[#7FDBF5] min-[420px]:block">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const campaignTypes: { category: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    category: "Ecommerce",
    title: "Abandoned Cart Recovery",
    description: "Reconnect with opted-in shoppers who added products to cart but did not complete checkout.",
    icon: ShoppingCart,
  },
  {
    category: "Product marketing",
    title: "New Launch Campaigns",
    description: "Introduce new products, collections or services to relevant customer segments.",
    icon: Rocket,
  },
  {
    category: "Sales",
    title: "Offer & Promotion Campaigns",
    description: "Plan timely campaigns with clear targeting, useful offers and a simple next step.",
    icon: BadgePercent,
  },
  {
    category: "Lead generation",
    title: "WhatsApp Lead Nurturing",
    description: "Follow up after enquiries with FAQs, proof and helpful reminders that guide the next conversation.",
    icon: MessageSquareText,
  },
  {
    category: "Retention",
    title: "Repeat Purchase Campaigns",
    description: "Reconnect with past customers through replenishment reminders, related products and win-back offers.",
    icon: Repeat2,
  },
  {
    category: "Lifecycle",
    title: "Customer Update Journeys",
    description: "Share useful service and order updates when supported by your platform and process.",
    icon: BellRing,
  },
];

export function WhatsAppCampaignManagementSection() {
  return (
    <section className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-[850px] text-center"
        >
          <Eyebrow>WhatsApp campaign management</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            WhatsApp Campaigns Built Around <span className="text-[#00D9FF]">Real Customer Intent.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.8] text-[#53627B] sm:mt-5 sm:text-[16px]">
            Our WhatsApp marketing services can support ecommerce, lead generation, customer engagement and retention journeys.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:mt-11 sm:gap-4 lg:grid-cols-3">
          {campaignTypes.map(({ category, title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: EASE }}
              className="min-w-0 rounded-[22px] border border-[#DDE7F1] bg-white p-5 shadow-[0_12px_32px_rgba(6,26,64,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#00B8D7]/45 hover:shadow-[0_16px_36px_rgba(6,26,64,0.08)] sm:p-6 lg:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-[#E9FAFD] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#087F8C] sm:text-[11px]">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#00D9FF]" />
                  <span className="truncate">{category}</span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#061A40] text-[#00D9FF] sm:size-11">
                  <Icon size={19} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-bold leading-snug text-[#061A40] sm:text-[19px]">{title}</h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-[#53627B] sm:text-[14px]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ecommerceJourneys = [
  "Abandoned cart recovery",
  "Back-in-stock alerts",
  "New product launches",
  "Repeat purchase reminders",
  "Relevant product recommendations",
  "Customer lifecycle updates",
];

export function WhatsAppEcommerceSection() {
  return (
    <section className="overflow-hidden bg-[#EAFBFD] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative isolate mx-auto aspect-[1.02/1] w-full max-w-[620px] overflow-hidden rounded-[24px] bg-[#020B35] shadow-[0_24px_64px_rgba(6,26,64,0.18)] sm:aspect-[1.15/1] sm:rounded-[30px] lg:order-1"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(0,217,255,0.3),transparent_45%),linear-gradient(140deg,#061A40,#071641_55%,#06385C)]" />
          <Image
            src="/assets/service-girl.png"
            alt="Ecommerce customer reviewing a WhatsApp campaign on her laptop"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
            className="object-contain object-bottom px-2 pt-10 sm:px-4 sm:pt-12"
          />
          <div className="absolute left-3 right-3 top-3 flex min-w-0 items-center justify-between gap-2 rounded-2xl border border-white/15 bg-[#061A40]/85 px-3 py-2.5 text-white backdrop-blur-md sm:left-5 sm:right-5 sm:top-5 sm:px-4 sm:py-3">
            <span className="min-w-0 truncate text-[10px] font-semibold sm:text-xs">WhatsApp campaign journey</span>
            <span className="shrink-0 rounded-full bg-[#00D9FF]/15 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#7BEAFF] sm:text-[9px]">Illustrative</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-white p-3 shadow-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
            <div className="flex items-start gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00D9FF]/15 text-[#087F8C] sm:size-9"><MessageCircle size={17} /></span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-[#061A40] sm:text-xs">A helpful cart reminder</p>
                <p className="mt-1 text-[9px] leading-relaxed text-[#53627B] sm:text-[11px]">Your selected items are waiting. Continue whenever you’re ready.</p>
              </div>
              <ArrowRight size={16} className="mt-1 shrink-0 text-[#00AFCB]" aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
          className="min-w-0 lg:order-2"
        >
          <Eyebrow>WhatsApp marketing for ecommerce</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            Recover Intent <span className="text-[#00D9FF]">Before It Goes Cold.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#53627B] sm:text-[16px]">
            For Shopify, WooCommerce and other ecommerce businesses, WhatsApp can support high-intent moments such as abandoned carts, product interest, restocks and repeat-purchase journeys.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-5 sm:grid-cols-2 sm:gap-y-1">
            {ecommerceJourneys.map((journey) => (
              <li key={journey} className="flex min-w-0 items-center gap-2.5 border-b border-[#D4E8EB] py-3 text-[12px] font-semibold leading-snug text-[#102246] sm:text-[13px]">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#00D9FF]/15 text-[#008CA5]"><Check size={14} strokeWidth={2.5} /></span>
                <span>{journey}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#whatsapp-marketing-contact"
            className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-3 text-center text-[12px] font-bold text-[#020B35] transition-colors duration-300 hover:bg-[#60E7FA] sm:mt-7 sm:min-h-[54px] sm:px-6 sm:text-[14px]"
          >
            Build my ecommerce WhatsApp flow <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const leadNurtureSteps = [
  { day: "Day 0", title: "Enquiry acknowledgement", detail: "Confirm the enquiry and explain the next step.", label: "New lead" },
  { day: "Day 1", title: "Useful FAQ", detail: "Answer a common objection or customer question.", label: "Nurture" },
  { day: "Day 3", title: "Proof or service information", detail: "Share relevant credentials, benefits or a case example.", label: "Consider" },
  { day: "Day 5", title: "Clear next step", detail: "Invite the lead to book, call, visit or continue the conversation.", label: "Action" },
];

export function WhatsAppLeadNurturingSection() {
  return (
    <section className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="min-w-0"
        >
          <Eyebrow>WhatsApp lead nurturing</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            A New Lead Doesn’t Need the Same Follow-Up <span className="text-[#00D9FF]">Every Day.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#53627B] sm:text-[16px]">
            For clinics, consultants, education, real estate and other lead-driven businesses, WhatsApp can help continue a conversation after an enquiry. Plan follow-ups around customer questions, intent and next steps.
          </p>
          <Link
            href="#whatsapp-marketing-contact"
            className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-3 text-center text-[12px] font-bold text-[#020B35] transition-colors duration-300 hover:bg-[#60E7FA] sm:mt-7 sm:min-h-[54px] sm:px-6 sm:text-[14px]"
          >
            Build my lead nurture flow <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
          className="min-w-0 rounded-[22px] border border-[#DDE7F1] bg-white p-3 shadow-[0_20px_55px_rgba(6,26,64,0.07)] sm:rounded-[28px] sm:p-5 lg:p-7"
        >
          <div className="space-y-0 divide-y divide-[#E5EAF0]">
            {leadNurtureSteps.map(({ day, title, detail, label }) => (
              <div key={day} className="grid min-w-0 grid-cols-[48px_minmax(0,1fr)] items-center gap-3 py-4 first:pt-2 last:pb-2 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-4 sm:py-5">
                <p className="text-[10px] font-extrabold text-[#008CA5] sm:text-xs">{day}</p>
                <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                  <div className="min-w-0 flex-1 basis-[150px]">
                    <p className="text-[12px] font-bold leading-snug text-[#102246] sm:text-[14px]">{title}</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-[#66758C] sm:text-xs">{detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#E9FAFD] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-[#087F8C] sm:text-[9px]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const whatsappFaqs = [
  {
    question: "What are WhatsApp marketing services?",
    answer: "They help businesses plan useful, permission-based WhatsApp conversations, including campaigns, customer updates, audience segments and automated follow-ups.",
  },
  {
    question: "Can WhatsApp marketing be used for ecommerce?",
    answer: "Yes. Ecommerce journeys can include cart reminders, product launches, back-in-stock updates and repeat-purchase communication for opted-in customers.",
  },
  {
    question: "Do you provide WhatsApp automation services?",
    answer: "We plan automation journeys around customer actions and the tools available in your setup. Platform access, approvals and message rules can affect what is possible.",
  },
  {
    question: "Can WhatsApp help nurture sales leads?",
    answer: "It can support timely follow-ups after an enquiry with useful answers, relevant information and a clear next step, when the person has agreed to be contacted.",
  },
  {
    question: "Do you plan abandoned cart WhatsApp campaigns?",
    answer: "Yes. We can map a consent-aware reminder journey that checks timing, order status and eligibility before sending a message.",
  },
  {
    question: "Can WhatsApp marketing work with Shopify or WooCommerce?",
    answer: "It can be planned for Shopify, WooCommerce and other ecommerce setups. The exact integration depends on your store, messaging platform and connected tools.",
  },
  {
    question: "Do you send WhatsApp bulk messages to purchased databases?",
    answer: "No. We focus on relevant communication to people who have opted in, and on respecting opt-outs and the rules of the messaging platform.",
  },
  {
    question: "How much does WhatsApp marketing cost?",
    answer: "Pricing depends on the campaign scope, audience, integrations and automation needs. Share your goals and setup for a tailored estimate.",
  },
];

export function WhatsAppFaqSection() {
  return (
    <section id="whatsapp-marketing-faqs" className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[960px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center"
        >
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            WhatsApp Marketing <span className="text-[#00D9FF]">FAQs</span>
          </h2>
        </motion.div>

        <div className="mt-8 sm:mt-10">
          {whatsappFaqs.map(({ question, answer }, index) => (
            <details key={question} className="group border-b border-[#E1E8F1]">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[13px] font-bold leading-snug text-[#102246] marker:hidden sm:min-h-[68px] sm:text-[15px] [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{question}</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E9FAFD] text-[#008CA5] transition-transform duration-200 group-open:rotate-45">
                  <Plus size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[820px] pb-5 pr-9 text-[12px] leading-[1.75] text-[#53627B] sm:pb-6 sm:text-[14px]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFinalCtaSection() {
  return (
    <section id="whatsapp-marketing-final-cta" className="bg-white px-4 pb-16 font-['Poppins',sans-serif] sm:px-7 sm:pb-20 lg:px-10 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative isolate mx-auto flex aspect-square w-full max-w-[560px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#00D9FF]/20 bg-[#020B35] px-5 py-5 text-center text-white shadow-[0_24px_70px_rgba(6,26,64,0.16)] sm:aspect-auto sm:max-w-[1240px] sm:rounded-[32px] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_20%,rgba(0,217,255,0.2),transparent_38%),radial-gradient(ellipse_at_90%_100%,rgba(22,90,178,0.32),transparent_48%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 -z-10 size-44 rounded-full border border-[#00D9FF]/15 sm:size-72" />
        <Eyebrow light>Start better customer conversations</Eyebrow>
        <h2 className="mt-3 max-w-[860px] text-[clamp(1.25rem,5.6vw,1.75rem)] font-bold leading-[1.12] tracking-[-0.035em] sm:mt-5 sm:text-[clamp(2rem,4vw,3.25rem)]">
          <span className="sm:hidden">Plan WhatsApp Marketing That Fits Your Funnel.</span>
          <span className="hidden sm:inline">Build a WhatsApp Marketing Journey That Fits Your Sales Funnel.</span>
        </h2>
        <p className="mt-2 max-w-[700px] text-[10px] leading-[1.55] text-[#C5D3EA] sm:mt-4 sm:text-[14px] sm:leading-[1.8]">
          <span className="sm:hidden">A clear plan for better conversations, campaigns and follow-ups.</span>
          <span className="hidden sm:inline">Tell us how customers discover, enquire and buy from you. We’ll help plan WhatsApp campaigns, automation and customer segments around your sales journey.</span>
        </p>
        <div className="mt-3 flex w-full max-w-[440px] flex-col gap-2 sm:mt-7 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3">
          <Link
            href="#whatsapp-marketing-contact"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-4 py-2.5 text-[10px] font-bold leading-tight text-[#020B35] transition-colors duration-200 hover:bg-[#60E7FA] sm:min-h-[54px] sm:w-auto sm:px-6 sm:py-3 sm:text-[14px]"
          >
            <span className="sm:hidden">Get my plan</span>
            <span className="hidden sm:inline">Get my WhatsApp Marketing Plan</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="#whatsapp-marketing-contact"
            className="inline-flex min-h-9 w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-[10px] font-semibold leading-tight text-white transition-colors duration-200 hover:border-[#00D9FF]/60 hover:bg-white/5 sm:min-h-[54px] sm:w-auto sm:px-6 sm:py-3 sm:text-[14px]"
          >
            <span className="sm:hidden">Talk to our team</span>
            <span className="hidden sm:inline">Discuss My Customer Journey</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
