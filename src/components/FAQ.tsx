import { useState } from "react";
import { faqQuestions } from "../../dataStore";
import { RiArrowDownSLine } from "@remixicon/react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 px-8 container mx-auto flex flex-col md:flex-row gap-12">
      {/* Title */}
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold text-[var(--color-primary)]">
          Questions and answers
        </h3>
      </div>

      {/* FAQ List */}
      <ul className="md:w-1/2 w-full">
        {faqQuestions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={index} className="border-t border-base-content/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex-1 text-[var(--color-primary)]">
                  {item.question}
                </span>
                <RiArrowDownSLine
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-5 text-sm text-[var(--color-primary)]">
                  {item.answer}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
