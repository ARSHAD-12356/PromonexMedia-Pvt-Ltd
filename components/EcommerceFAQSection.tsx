import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "What does ecommerce marketing include?",
    answer:
      "It can bring together paid advertising, ecommerce SEO, creative strategy, conversion optimisation and customer retention. The right mix depends on your products, margins and growth stage.",
  },
  {
    question: "Which ecommerce platforms do you work with?",
    answer:
      "We support Shopify, WooCommerce and other online storefronts. The plan is shaped around your platform, catalogue and the changes your team can support.",
  },
  {
    question: "Can you manage both Google Ads and Meta campaigns?",
    answer:
      "Yes. We can plan Google Search and Shopping alongside Meta campaigns, then coordinate audiences, creative and remarketing around the customer journey.",
  },
  {
    question: "Can you help improve product page conversions?",
    answer:
      "We can review product discovery, page messaging, trust signals and the path to checkout, then recommend practical conversion improvements.",
  },
  {
    question: "Do you offer ecommerce SEO with paid acquisition?",
    answer:
      "Yes. Paid campaigns can support immediate product discovery while ecommerce SEO builds organic visibility for relevant product and category searches over time.",
  },
  {
    question: "How soon can ecommerce SEO show results?",
    answer:
      "Timing depends on your current visibility, competition, site structure and the work involved. SEO is a longer-term channel, so we set priorities and track progress without promising a fixed result date.",
  },
  {
    question: "Can you work with a new or small ecommerce brand?",
    answer:
      "Yes. We shape the channel mix around your current stage, budget, product readiness and the goals you want to reach next.",
  },
  {
    question: "How do we get started?",
    answer:
      "Use the contact form below and tell us what you sell, which platform you use and what you want to improve. Our ecommerce team can then discuss practical next steps.",
  },
];

export default function EcommerceFAQSection() {
  return (
    <section
      aria-labelledby="ecommerce-faq-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto mb-9 max-w-[820px] text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Frequently asked questions
          </span>
          <h2 id="ecommerce-faq-heading" className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]">
            Ecommerce marketing FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-[18px] border border-[#DCEAF4] bg-white px-5 shadow-[0_6px_22px_rgba(6,26,64,0.035)] transition-colors open:border-[#A6DFF1] open:bg-[#FBFEFF] sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-[15px] font-bold text-[#10264B] marker:hidden sm:py-6 sm:text-[17px] [&::-webkit-details-marker]:hidden">
                {question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E8F8FD] text-[#087AA5] transition-transform duration-300 group-open:rotate-45">
                  <Plus size={17} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[850px] pb-5 pr-2 text-[14px] leading-7 text-[#52617E] sm:pb-6 sm:text-[15px]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
