import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm font-light font-sans max-w-lg mx-auto">
            Find immediate answers regarding professional web development pricing, delivery times, redesigned options, and customized software systems.
          </p>
        </div>

        {/* FAQs Accordion Column */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            
            return (
              <div
                id={`faq-item-${faq.id}`}
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-zinc-950 border-blue-500/30 box-glow"
                    : "bg-black border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-sm font-display font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className={`p-1 bg-white/5 rounded-lg text-zinc-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-400 bg-blue-600/10" : ""
                  }`}>
                    <DynamicIcon name="ChevronDown" size={14} />
                  </span>
                </button>

                {/* Collapsible Answer Pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light border-t border-white/5 bg-zinc-950/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
