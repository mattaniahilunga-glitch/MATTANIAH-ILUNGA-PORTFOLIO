import React from "react";
import { motion } from "motion/react";
import { WHY_CHOOSE_ME } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-choose-me" className="py-24 bg-black relative overflow-hidden dark-grid-bg border-t border-white/5">
      {/* Decorative top-right spotlight */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            WHY HIRE ME?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            Uncompromising Standards
          </h2>
          <p className="text-zinc-400 text-sm font-light font-sans">
            Here is why clients across Africa and internationally trust ILUNGA MAN to design, develop, and maintain their business applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ME.map((item, idx) => {
            // Give specific cards different span and background highlights for a rhythmic Bento Grid look
            const isFeatured = idx === 1 || idx === 4; // Fast Delivery and Secure Dev
            
            return (
              <motion.div
                id={`why-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl glass-card flex flex-col justify-between transition-all relative ${
                  isFeatured 
                    ? "bg-gradient-to-tr from-blue-950/20 via-zinc-950/80 to-zinc-950 border-blue-500/15 box-glow" 
                    : ""
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-5 border ${
                    isFeatured 
                      ? "bg-blue-600/10 text-blue-400 border-blue-500/30" 
                      : "bg-zinc-950 text-zinc-400 border-white/5"
                  }`}>
                    <DynamicIcon name={item.icon} size={16} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-display font-bold text-white tracking-tight mb-2 flex items-center gap-1.5">
                    <DynamicIcon name="Check" className="text-blue-500 w-3.5 h-3.5" size={14} />
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Tech Grid Lines on highlights */}
                {isFeatured && (
                  <div className="absolute top-2 right-2 text-[8px] font-mono text-blue-500/30 select-none">
                    [SYS-STABLE]
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
