"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCheck, MailOpen, Reply, Rocket, Send, Target } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Each element animates in one after another
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const SEQUENCE = [
  { day: "Day 1", title: "Personalised intro email", status: "Sent", icon: Send },
  { day: "Day 3", title: "Value-driven follow-up", status: "Opened", icon: MailOpen },
  { day: "Day 7", title: "Case study + call to action", status: "Replied", icon: Reply },
];

const float = (delay: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

function Illustration() {
  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden="true"
      className="relative mx-auto aspect-[1.08/1] w-full max-w-[600px]"
    >
      {/* Soft glow */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E5BD8]/30 blur-3xl" />

      {/* Main card: outbound sequence */}
      <motion.div
        variants={pop}
        className="absolute left-[4%] top-[14%] w-[72%] rounded-[24px] border border-white/10 bg-white p-6 text-[#061A40] shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0478FD]">Outbound sequence</p>
            <p className="mt-1 text-[18px] font-bold sm:text-[20px]">Cold outreach campaign</p>
          </div>
          <span className="flex size-11 items-center justify-center rounded-xl bg-[#061A40] text-white">
            <Target size={22} />
          </span>
        </div>

        <ol className="relative mt-6 space-y-4">
          <span className="absolute bottom-5 left-[19px] top-5 w-[2px] bg-[linear-gradient(180deg,#00C8EF,#0478FD)]" />
          {SEQUENCE.map(({ day, title, status, icon: Icon }, i) => (
            <motion.li
              key={day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.18, ease: EASE }}
              className="relative flex items-center gap-4"
            >
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E6F9FD] text-[#0478FD] ring-4 ring-white">
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-[#E3EAF5] bg-[#F7FAFE] px-4 py-2.5">
                <p className="text-[11px] font-semibold text-[#8A99B2]">{day}</p>
                <p className="truncate text-[14px] font-semibold sm:text-[15px]">{title}</p>
              </div>
              <span className="hidden rounded-full bg-[#061A40] px-2.5 py-1 text-[11px] font-semibold text-white sm:inline-block">
                {status}
              </span>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* A/B test card */}
      <motion.div variants={pop} className="absolute bottom-[4%] right-0 w-[52%]">
        <motion.div
          {...float(0.6)}
          className="rounded-[22px] border border-white/10 bg-[#0B2A63] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FDBF5]">A/B subject test</p>
          {[
            { label: "Variant A", value: 58 },
            { label: "Variant B", value: 86, winner: true },
          ].map((v, i) => (
            <div key={v.label} className="mt-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-medium text-[#D0D9EB]">{v.label}</span>
                {v.winner && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#00C8EF] px-2 py-0.5 text-[10px] font-bold text-[#061A40]">
                    <CheckCheck size={12} /> Winner
                  </span>
                )}
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${v.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.9 + i * 0.2, ease: EASE }}
                  className={`h-full rounded-full ${v.winner ? "bg-[linear-gradient(90deg,#00C8EF,#3B82F6)]" : "bg-white/40"}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Rocket tile */}
      <motion.div variants={pop} className="absolute right-[6%] top-[4%]">
        <motion.div
          {...float(0)}
          className="flex size-[78px] items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#00C8EF,#0478FD)] text-white shadow-[0_18px_40px_rgba(0,200,239,0.45)]"
        >
          <Rocket size={36} />
        </motion.div>
      </motion.div>

      {/* Reply chip */}
      <motion.div variants={pop} className="absolute bottom-[8%] left-[2%]">
        <motion.div
          {...float(1.2)}
          className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#061A40] shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-[#061A40] text-white">
            <Reply size={14} />
          </span>
          New reply received
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// "Outbound/cold email marketing" — dark navy section with a coded illustration
export default function EmailMarketingOutboundSection() {
  return (
    <section
      aria-labelledby="em-outbound-heading"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#031539_0%,#061E52_55%,#0A2A6B_100%)] px-4 py-16 font-['Poppins',sans-serif] text-white sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Illustration />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[600px]"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-[#00C8EF]/40 bg-[#00C8EF]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7FDBF5]"
          >
            Outbound email
          </motion.span>
          <motion.h2
            variants={fadeUp}
            id="em-outbound-heading"
            className="mt-5 text-[36px] font-bold leading-[1.12] tracking-tight sm:text-[48px] lg:text-[58px]"
          >
            Outbound/cold <span className="text-[#00C9F4]">email marketing</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-[16px] leading-[1.8] text-[#D0D9EB] sm:text-[18px]">
            Targeted outbound emails that boost conversions and maximize ROI can help you attract your desired consumer
            base. Our cold email campaigns are crafted using customized target lists, data-driven marketing tactics, and
            robust automation. To ensure fantastic outcomes, we utilize{" "}
            <span className="font-semibold text-[#00C9F4]">A/B testing</span> and meticulous campaign monitoring.
          </motion.p>
          <motion.div variants={fadeUp}>
            {/* Same animated button style as the rest of the site */}
            <Link
              href="/contact"
              className="group relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#00D9FF] px-8 py-4 text-[15px] font-bold text-[#020B35] shadow-[0_6px_22px_rgba(0,217,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] active:translate-y-0 sm:px-9 sm:text-[16px]"
            >
              <span>Let&apos;s get started</span>
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
