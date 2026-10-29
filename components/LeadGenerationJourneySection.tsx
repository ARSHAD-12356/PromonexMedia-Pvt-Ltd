import Image from "next/image";
import Link from "next/link";
import { Check, MoveRight } from "lucide-react";

const journeySteps = [
  "Campaign strategy",
  "Audience targeting",
  "High-intent keywords",
  "Ad creatives and messaging",
  "Landing page experience",
  "Lead forms and calls-to-action",
  "Conversion tracking",
];

export default function LeadGenerationJourneySection() {
  return (
    <section
      aria-labelledby="lead-generation-journey-heading"
      className="w-full bg-white px-5 py-16 font-['Poppins',sans-serif] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1260px] items-center gap-10 lg:grid-cols-[1fr_0.96fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9F4] sm:text-sm">
            Traffic is not the goal
          </p>
          <h2
            id="lead-generation-journey-heading"
            className="max-w-[620px] text-[clamp(2.2rem,4.2vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#09183D]"
          >
            1,000 Visitors Mean Nothing If Nobody{" "}
            <span className="text-[#00C9F4]">Enquires.</span>
          </h2>

          <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#536176] sm:text-[17px] sm:leading-8">
            A lead generation campaign should connect advertising, messaging,
            landing pages and tracking into one clear journey.
          </p>
          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#536176] sm:text-[17px] sm:leading-8">
            We focus on the full path — from the first click to the enquiry.
          </p>

          <ul className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
            {journeySteps.map((step) => (
              <li key={step} className="flex items-start gap-3 text-[15px] leading-7 text-[#09183D] sm:text-[17px]">
                <Check
                  aria-hidden="true"
                  size={20}
                  strokeWidth={2.4}
                  className="mt-1 shrink-0 text-[#42B88A]"
                />
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#lead-generation-contact"
            className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[linear-gradient(90deg,#0478FD,#00C9F4)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(4,120,253,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,201,244,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2 sm:text-base"
          >
            Build My Lead Funnel
            <MoveRight size={19} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[620px] lg:ml-auto">
          <Image
            src="/assets/lead-generation-funnel-journey.png"
            alt="Lead generation funnel connecting Google Ads, Meta Ads, messaging and landing pages to leads, enquiries and customers."
            width={1373}
            height={1145}
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 80vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
