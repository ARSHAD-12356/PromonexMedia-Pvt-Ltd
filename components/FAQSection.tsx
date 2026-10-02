"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We work across performance marketing, SEO, social media marketing, website development, and creative design. Share your goals and we can discuss the right mix for your business.",
  },
  {
    question: "Where is Promonex Media located?",
    answer:
      "Our team is based in Patna, Bihar. The map above shows our location, and you can reach us at +91 70619 41818.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send your contact details and a short note about your goals using the form above. It opens a WhatsApp message to our team so we can follow up with you.",
  },
  {
    question: "Can you tailor a plan to my business?",
    answer:
      "Yes. We start by understanding your business, audience, and priorities, then discuss a strategy suited to your needs.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Timing depends on your goals, channels, competition, and starting point. We can outline realistic milestones after learning more about your project.",
  },
  {
    question: "How can I contact the team directly?",
    answer:
      "Call or message us at +91 70619 41818, or use the project form above to send your details through WhatsApp.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-[#F5F8FC] px-4 py-14 text-[#08183D] sm:px-6 sm:py-18 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 191, 255, 0.09), transparent 50%), linear-gradient(180deg, rgba(255, 255, 255, 0.72), transparent 80%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 text-center sm:mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#168BFF]">
            A few helpful details
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-poppins text-[30px] font-bold leading-tight text-[#08183D] sm:text-[40px]"
          >
            Frequently asked <span className="text-[#168BFF]">questions</span>
          </h2>
        </motion.header>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
                className="overflow-hidden rounded-xl border border-[#DCE5F1] bg-white shadow-[0_5px_18px_rgba(8,24,61,0.045)] transition-all hover:-translate-y-0.5 hover:border-[#168BFF]/35 hover:shadow-[0_10px_24px_rgba(8,24,61,0.08)]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold text-[#08183D] transition-colors hover:text-[#168BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#168BFF] sm:px-5"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#168BFF] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[#E2E8F0] px-4 pb-4 pt-3 text-sm leading-relaxed text-[#52617E] sm:px-5 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}