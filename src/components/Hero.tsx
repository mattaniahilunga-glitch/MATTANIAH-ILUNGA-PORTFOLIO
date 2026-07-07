import React from "react";
import { motion } from "motion/react";
import { DynamicIcon } from "./DynamicIcon";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 blue-grid-bg"
    >
      {/* Background Gradients & Glow Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-600/10 blur-[80px] sm:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Decorative Top Line/Grid Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 bg-zinc-950/80 rounded-full border border-white/10 mb-8 box-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300">
            Available for Custom Contracts & Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.05]"
        >
          Building <span className="bg-gradient-to-r from-white via-zinc-200 to-blue-500 bg-clip-text text-transparent text-glow">Powerful Digital</span> Experiences That Grow Businesses.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 text-base sm:text-xl max-w-2xl mt-6 font-sans font-light leading-relaxed"
        >
          I design and develop professional websites, custom software, and digital solutions that help businesses establish a strong, high-converting online presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-display font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Hire Me
            <DynamicIcon name="Briefcase" size={14} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white font-display font-medium text-sm rounded-xl hover:bg-zinc-900 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            View My Work
            <DynamicIcon name="Eye" size={14} />
          </a>
        </motion.div>

        {/* Brand Indicators / Value Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-12 mt-16 max-w-3xl w-full"
        >
          <div className="flex flex-col items-center">
            <span className="text-glow font-display font-bold text-2xl text-blue-400">100%</span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mt-1">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-glow font-display font-bold text-2xl text-white">Full-Stack</span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mt-1">Elite Expertise</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-glow font-display font-bold text-2xl text-white">Secure</span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mt-1">Development Standards</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-glow font-display font-bold text-2xl text-blue-400">24/7</span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mt-1">Systems Security</span>
          </div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Hint Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Explore Portfolio</span>
        <a href="#about" className="animate-bounce p-1 bg-white/5 border border-white/5 rounded-full text-zinc-400 hover:text-white cursor-pointer">
          <DynamicIcon name="ChevronDown" size={14} />
        </a>
      </div>
    </section>
  );
};
