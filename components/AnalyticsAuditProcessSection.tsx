import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  RefreshCw,
} from "lucide-react";

const STEPS = [
  {
    icon: ClipboardCheck,
    number: "Step 1",
    title: "Measurement Plan",
    description:
      "A measurement plan translates business objectives into measurable online metrics. As they say, “without a goal, it’s difficult to score,” and it holds true.",
  },
  {
    icon: Lightbulb,
    number: "Step 2",
    title: "Spot Opportunities",
    description:
      "When you begin monitoring your web traffic, opportunities start to emerge. It’s like having a treasure map. You’ll start to notice where people get stuck, lost, or simply give up.",
  },
  {
    icon: RefreshCw,
    number: "Step 3",
    title: "Stay In Sync",
    description:
      "Over time, businesses naturally evolve. Customer buying trends shift, focuses change, and websites develop and grow. Don’t leave your analytics behind; they are too valuable to be neglected. Remember, no one puts data in the corner.",
  },
];

export default function AnalyticsAuditProcessSection() {
  return (
    <section
      aria-labelledby="analytics-audit-process-heading"
      className="bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2
              id="analytics-audit-process-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Measure Everything That Moves
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 border-b-2 border-[#00B8E6] pb-1.5 text-sm font-semibold text-[#0478FD] transition-colors hover:text-[#061A40] sm:text-base"
          >
            See all Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <article
              key={number}
              className="group flex min-h-[360px] flex-col rounded-2xl border border-[#DDE8F5] bg-white p-6 shadow-[0_12px_34px_rgba(6,26,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00B8E6]/50 hover:shadow-[0_20px_42px_rgba(6,26,64,0.1)] sm:p-8"
            >
              <span className="text-sm font-bold text-[#0478FD]">{number}</span>
              <span className="mt-7 flex size-16 items-center justify-center rounded-full border border-[#00B8E6]/25 bg-[#E3F8FD] text-[#0478FD] transition-colors group-hover:bg-[#061A40] group-hover:text-[#00D9FF]">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-7 text-xl font-bold tracking-tight sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B6B85] sm:text-[15px]">
                {description}
              </p>
              <Link
                href="#analytics-audit-contact"
                aria-label="Ask about this measurement step"
                className="mt-6 inline-flex size-10 items-center justify-center rounded-full bg-[#E3F8FD] text-[#0478FD] transition-all hover:bg-[#061A40] hover:text-[#00D9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0478FD]"
              >
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
