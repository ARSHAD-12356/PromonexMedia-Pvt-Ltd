import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Settings,
  ShieldCheck,
  UserRoundSearch,
} from "lucide-react";

const AUDIT_AREAS = [
  {
    icon: ShieldCheck,
    title: "Data Accuracy & Integrity Check",
    description:
      "Ensure precise data collection, validate accuracy, and detect discrepancies for better data integrity.",
  },
  {
    icon: Settings,
    title: "Customization & Configuration Review",
    description:
      "Evaluate goals, events, and tracking setup to align with business objectives and enhance data insights.",
  },
  {
    icon: Code2,
    title: "Tracking Code Analysis",
    description:
      "Thoroughly inspect tracking code implementation to prevent data loss and ensure accurate user interaction capture.",
  },
  {
    icon: UserRoundSearch,
    title: "User Journey & Conversion Analysis",
    description:
      "Identify bottlenecks and drop-offs in the user journey, optimizing conversion rates for improved performance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights Evaluation",
    description:
      "Improve Google Analytics reports and insights for better decision-making aligned with business goals.",
  },
];

export default function AnalyticsAuditIncludesSection() {
  return (
    <section
      id="analytics-audit-includes"
      aria-labelledby="analytics-audit-includes-heading"
      className="bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-3xl">
          <h2
            id="analytics-audit-includes-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            What does a Google Analytics audit include?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {AUDIT_AREAS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-[#DDE8F5] bg-white p-6 shadow-[0_12px_34px_rgba(6,26,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00B8E6]/50 hover:shadow-[0_20px_42px_rgba(6,26,64,0.1)] sm:p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#E3F8FD] text-[#0478FD] transition-colors group-hover:bg-[#061A40] group-hover:text-[#00D9FF]">
                <Icon size={23} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B6B85] sm:text-[15px]">
                {description}
              </p>
              <Link
                href="#analytics-audit-contact"
                aria-label="Ask us about this audit area"
                className="mt-6 inline-flex size-11 items-center justify-center rounded-full text-[#0478FD] transition-all hover:bg-[#E3F8FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0478FD]"
              >
                <ArrowRight size={24} aria-hidden="true" />
              </Link>
            </article>
          ))}

          <article className="flex min-h-[300px] flex-col justify-center rounded-2xl bg-[linear-gradient(145deg,#061A40_0%,#0A2A6B_100%)] p-7 text-white shadow-[0_18px_42px_rgba(6,26,64,0.2)] sm:p-8">
            <span className="text-sm font-semibold text-[#38D8F5]">
              100% Guaranteed Results
            </span>
            <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-[28px]">
              Send us a message for more info.
            </h3>
            <Link
              href="#analytics-audit-contact"
              className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-[#00D9FF] px-6 py-3 text-sm font-semibold text-[#020B35] transition-colors hover:bg-[#38E2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A40]"
            >
              Contact us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
