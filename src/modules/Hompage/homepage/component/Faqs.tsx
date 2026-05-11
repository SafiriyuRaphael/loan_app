import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../../../components/ui/data/faqs";

function Faq() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      className="relative py-24 px-6 bg-green-50 overflow-hidden"
      id="about"
    >
      <div className="absolute -top-25 -left-25 w-75 h-75 bg-green-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Find answers to common questions about our loan process and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-900">{item.question}</span>

              <ChevronDown
                className={`transition-transform ${
                  active === index ? "rotate-180 text-green-600" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Faq;
