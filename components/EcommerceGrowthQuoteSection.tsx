import { Quote } from "lucide-react";

export default function EcommerceGrowthQuoteSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020B35] px-4 py-16 font-['Poppins',sans-serif] text-white sm:px-6 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,200,240,0.18),transparent_58%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border border-[#00C8F0]/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 size-72 rounded-full border border-[#00C8F0]/10" />
      <div className="mx-auto max-w-[1040px] text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#00C8F0]/10 text-[#53D7F4] sm:size-14">
          <Quote size={25} aria-hidden="true" />
        </span>
        <p className="mt-7 text-[clamp(1.8rem,4.2vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.035em] text-white">
          Better ecommerce growth happens when every customer touchpoint moves in the{" "}
          <span className="text-[#53D7F4]">same direction.</span>
        </p>
        <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#C5D3E9] sm:text-[17px] sm:leading-8">
          We bring paid acquisition, creative, storefront experience and retention into one clear growth plan for your
          store.
        </p>
        <div className="mx-auto mt-8 flex max-w-[660px] flex-wrap items-center justify-center gap-2.5">
          {["Acquisition", "Creative", "Conversion", "Retention"].map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[11px] font-semibold text-[#D9E7F7] sm:text-[12px]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
