import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden dark-grid-bg border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            Full-Stack Architecture
          </h2>
          <p className="text-zinc-400 text-sm font-light font-sans">
            A comprehensive overview of my technological stacks. Mapped to deliver performant websites, resilient servers, and optimized workflows.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              id={`skills-cat-${catIdx}`}
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-base font-display font-bold text-white tracking-tight mb-6 pb-3 border-b border-white/5 flex items-center justify-between">
                  {category.name}
                  <span className="text-xs font-mono text-zinc-500">[{category.skills.length} Techs]</span>
                </h3>

                {/* Progress bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div id={`skill-${catIdx}-${sIdx}`} key={sIdx} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-sans font-medium text-zinc-300">{skill.name}</span>
                        <span className="font-mono text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Custom progress background */}
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                          id={`skill-bar-${catIdx}-${sIdx}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="px-2 py-0.5 bg-zinc-950 border border-white/5 text-[9px] font-mono text-zinc-500 rounded">
                    #{skill.name.toLowerCase().replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Consulting Trigger Card */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/60 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 box-glow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl border border-blue-500/20">
              <DynamicIcon name="BrainCircuit" size={24} />
            </div>
            <div>
              <h4 className="text-sm font-display font-semibold text-white">Need custom technology integrations or AI consulting?</h4>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">Let's coordinate on how to integrate Gemini LLMs, secure your databases, and host on Linux VPS.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-display font-medium text-xs rounded-xl transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            Start Free Consultation
            <DynamicIcon name="ArrowUpRight" size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};
