import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "What does influencer marketing include?",
    answer:
      "It can include campaign planning, creator research and selection, briefing, content coordination, publishing and performance review. We shape the work around your audience and campaign goals.",
  },
  {
    question: "How do you choose the right creators for a brand?",
    answer:
      "We look beyond follower counts. Audience fit, content quality, engagement, creator values and campaign objectives all help us shortlist relevant partners.",
  },
  {
    question: "Can you work with micro and niche influencers?",
    answer:
      "Yes. Micro and niche creators can be a strong fit when their community and content align with your brand. The right creator mix depends on your audience, offer and goals.",
  },
  {
    question: "Which platforms can influencer campaigns use?",
    answer:
      "Campaigns can be planned for platforms such as Instagram, YouTube and other relevant social channels. We recommend formats based on where your audience spends time and what the campaign needs to achieve.",
  },
  {
    question: "Can you manage the campaign from start to finish?",
    answer:
      "We can coordinate creator shortlisting, campaign briefs, content timelines, approvals and publishing, then review the agreed performance measures with you.",
  },
  {
    question: "How do you measure an influencer campaign?",
    answer:
      "Measures depend on the campaign objective and may include reach, views, engagement, clicks, enquiries or sales. We agree on what matters before launch and review the results afterward.",
  },
  {
    question: "How long does it take to launch a campaign?",
    answer:
      "Timing varies with creator availability, deliverables and approval steps. After understanding your brief, we can map a practical timeline for planning and launch.",
  },
  {
    question: "How can my brand get started?",
    answer:
      "Use the contact form below to tell us about your brand, target audience and campaign goals. Our creator partnership team will discuss suitable next steps with you.",
  },
];

export default function InfluencerMarketingFAQSection() {
  return (
    <section
      aria-labelledby="influencer-faq-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto mb-9 max-w-[820px] text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Influencer marketing
          </span>
          <h2
            id="influencer-faq-heading"
            className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.035em]"
          >
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#52617E] sm:text-base">
            Helpful details about creator partnerships, campaign planning and measuring results.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-[18px] border border-[#DCEAF4] bg-white px-5 shadow-[0_6px_22px_rgba(6,26,64,0.035)] transition-colors open:border-[#A6DFF1] open:bg-[#FBFEFF] sm:px-7"
            >
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
