import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden dark-grid-bg border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            Client Success Stories
          </h2>
          <p className="text-zinc-400 text-sm font-light font-sans">
            Hear from industry leaders, coordinators, and startup founders who turned to ILUNGA MAN for mission-critical web applications and designs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              id={`testimonial-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between relative"
            >
              <div>
                {/* Quotation Marks Accent */}
                <span className="text-5xl font-serif text-blue-500/10 absolute top-4 left-4 select-none">“</span>
                
                {/* Star Ratings */}
                <div className="flex items-center space-x-1 mb-4 text-blue-400 relative z-10">
                  {Array.from({ length: item.rating }).map((_, rIdx) => (
                    <DynamicIcon key={rIdx} name="Sparkles" size={14} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-light italic mb-6 relative z-10">
                  "{item.text}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/25 flex items-center justify-center font-display font-bold text-xs uppercase">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-tight">{item.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    {item.role}, <span className="text-blue-400">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
