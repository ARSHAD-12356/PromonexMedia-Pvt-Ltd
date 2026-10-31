import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function EcommerceFinalCTASection() {
  return (
    <section className="bg-[#F7FBFE] px-4 pb-16 pt-4 font-['Poppins',sans-serif] sm:px-6 sm:pb-20 lg:pb-24">
      <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[30px] bg-[#020B35] px-6 py-12 text-center text-white shadow-[0_28px_75px_rgba(6,26,64,0.17)] sm:rounded-[38px] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,200,240,0.2),transparent_62%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-[#00C8F0]/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-16 size-56 rounded-full border border-[#00C8F0]/10" />

        <span className="inline-flex items-center gap-2 rounded-full border border-[#53D7F4]/20 bg-[#00C8F0]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8AE9FC] sm:text-[11px]">
          <span className="size-2 rounded-full bg-[#53D7F4]" aria-hidden="true" />
          Ready to grow your store?
        </span>
        <h2 className="mx-auto mt-5 max-w-[940px] text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.045em]">
          Build a clearer growth plan for your{" "}
          <span className="text-[#53D7F4]">ecommerce store.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#CFD9EA] sm:text-[17px] sm:leading-8">
          Tell us what you sell, where your store is today and what you want to improve. We’ll help map a practical next
          step across acquisition, conversion and retention.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#contact-ecommerce-marketing"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#00C8F0] px-5 py-3 text-[13px] font-bold text-[#061A40] shadow-[0_12px_32px_rgba(0,200,240,0.2)] transition hover:-translate-y-0.5 hover:bg-[#53D7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B35] sm:text-[14px]"
          >
            Get a growth plan
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact-ecommerce-marketing"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-[13px] font-bold text-white transition hover:border-[#53D7F4]/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53D7F4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B35] sm:text-[14px]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Discuss your store
          </Link>
        </div>
      </div>
    </section>
  );
}
