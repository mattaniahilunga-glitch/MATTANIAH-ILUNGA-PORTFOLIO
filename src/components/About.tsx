import React from "react";
import { motion } from "motion/react";
import { DynamicIcon } from "./DynamicIcon";

export const About: React.FC = () => {
  // Exact path of the generated premium avatar
  const avatarUrl = "/src/assets/images/ilunga_man_avatar_1783430576362.jpg";

  return (
    <section id="about" className="py-24 relative bg-black overflow-hidden dark-grid-bg">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square"
            >
              {/* Animated outer glowing borders */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-sky-500/10 to-transparent blur-md opacity-70" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-400 p-[1.5px] opacity-40 hover:opacity-80 transition-all duration-500" />
              
              {/* Main image container */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center relative border border-white/5 box-glow">
                <img
                  src={avatarUrl}
                  alt="Mattaniah Ilunga (ILUNGA MAN)"
                  className="w-full h-full object-cover grayscale contrast-[1.15] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fail-safe placeholder if image is missing
                    (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/developer/800/800";
                  }}
                />
                
                {/* Tech overlay HUD label */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-black/85 backdrop-blur-sm border border-white/15 rounded-lg flex items-center justify-between font-mono">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Digital Architect</span>
                    <span className="text-[12px] text-white font-bold tracking-wider">MATTANIAH ILUNGA</span>
                  </div>
                  <div className="px-2 py-0.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded text-[9px] uppercase tracking-widest font-bold">
                    HQ-ZM
                  </div>
                </div>
              </div>

              {/* Decorative float elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center shadow-lg animate-float">
                <DynamicIcon name="Award" className="text-blue-400 w-5 h-5" size={20} />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                  ABOUT THE BRAND
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
                  Meet ILUNGA MAN
                </h2>
              </div>

              <div className="h-px bg-gradient-to-r from-blue-600/40 via-white/5 to-transparent w-full" />

              <div className="space-y-4 font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-medium">Mattaniah Ilunga</strong>, professionally recognized as <strong className="text-blue-400 font-semibold tracking-wider">ILUNGA MAN</strong>. 
                  I am a passionate, results-focused technology professional dedicated to solving high-impact, real-world operational problems through custom software engineering, modern systems, and elite design interfaces.
                </p>
                <p>
                  My engineering philosophy is simple: <strong className="text-zinc-200">code should be as elegant on the inside as it is functional on the outside.</strong> 
                  With a diverse toolkit crossing full-stack development, database architecture, Linux server deployments, and cybersecurity, I build software that scales effortlessly, loads instantly, and delivers frictionless experiences to end users.
                </p>
                <p>
                  Continuous learning is the bedrock of my brand. I stay at the cutting edge of modern software frameworks and AI-powered workflow automation so my clients always receive digital solutions that are secure, modern, and highly profitable.
                </p>
              </div>

              {/* Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-start space-x-3 hover:border-blue-500/20 transition-all">
                  <div className="p-1.5 bg-blue-600/10 text-blue-400 rounded-lg mt-0.5">
                    <DynamicIcon name="Cpu" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Problem-Solving Mindset</h3>
                    <p className="text-xs text-zinc-400 mt-1">Every custom script and UI element is structured directly to solve standard conversion bottlenecks.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-start space-x-3 hover:border-blue-500/20 transition-all">
                  <div className="p-1.5 bg-blue-600/10 text-blue-400 rounded-lg mt-0.5">
                    <DynamicIcon name="ShieldCheck" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">High-Quality Execution</h3>
                    <p className="text-xs text-zinc-400 mt-1">Dedicated to delivering pristine, clean, and highly secure code structures with responsive rendering layouts.</p>
                  </div>
                </div>
              </div>

              {/* Button link */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 rounded-xl transition-all text-xs font-display font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <DynamicIcon name="Mail" size={12} />
                  Contact Mattaniah
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-transparent hover:bg-white/5 text-blue-400 rounded-xl transition-all text-xs font-display font-medium flex items-center gap-1 cursor-pointer"
                >
                  See Project Showcases
                  <DynamicIcon name="ArrowUpRight" size={12} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
