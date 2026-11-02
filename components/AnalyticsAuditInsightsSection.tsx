import Link from "next/link";
import { ArrowRight } from "lucide-react";

const bars = [30, 43, 38, 57, 51, 70, 64, 86, 78, 100];

export default function AnalyticsAuditInsightsSection() {
  return (
    <section
      aria-labelledby="analytics-audit-insights-heading"
      className="relative overflow-hidden bg-[#020B35] px-4 py-16 font-['Poppins',sans-serif] text-white sm:px-6 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 size-[480px] -translate-y-1/2 rounded-full bg-[#0478FD]/10 blur-[100px]"
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-5 rounded-[32px] bg-[#00D9FF]/[0.06] blur-xl" />
            <div
              aria-hidden="true"
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#071A4A] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-5 rounded-2xl opacity-40 [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_25%]"
              />
              <div className="relative flex h-64 items-end gap-2 border-b border-l border-white/15 px-4 sm:h-80 sm:gap-3 sm:px-6">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={
                      index === bars.length - 1
                        ? "flex-1 rounded-t-md bg-gradient-to-t from-[#0478FD] to-[#00D9FF]"
                        : "flex-1 rounded-t-md bg-[#1688E8]/50"
                    }
                    style={{ height: String(height) + "%" }}
                  />
                ))}
              </div>
              <div
                aria-hidden="true"
                className="relative mx-4 mt-5 h-1 rounded-full bg-[linear-gradient(90deg,#0478FD_0%,#00D9FF_65%,transparent_100%)] sm:mx-6"
              />
            </div>
        </div>

        <div className="max-w-[590px]">
          <h2
            id="analytics-audit-insights-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            No tracking issues.{" "}
            <span className="text-[#00D9FF]">
              Only clean data and winning insights.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#C8D5EA] sm:text-lg">
            Accurate data is crucial for all digital campaigns. We simplify analytics, providing clear insights for informed decisions. Our passion for analytics benefits clients in all marketing endeavors, ensuring better results and higher ROI.
          </p>
          <Link
            href="#analytics-audit-contact"
            className="group mt-8 inline-flex min-h-[54px] items-center gap-3 rounded-xl bg-[linear-gradient(90deg,#0478FD,#00C9F4)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(4,120,253,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,201,244,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
          >
            Get in touch with us
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
