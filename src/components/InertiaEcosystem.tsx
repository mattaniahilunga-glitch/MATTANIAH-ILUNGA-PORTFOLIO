import React, { useState } from "react";
import { motion } from "motion/react";
import { INERTIA_PRODUCTS } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const InertiaEcosystem: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("inertia-unfazed");

  return (
    <section id="inertia" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/10 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            TECHNOLOGY VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            The Inertia Ecosystem
          </h2>
          <p className="text-zinc-400 text-sm font-light font-sans">
            Inertia is my long-term mission to empower communities and businesses across Africa through technology, education, entrepreneurship, and high-performance software innovation.
          </p>
        </div>

        {/* Central Hub Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Spoke Description Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex bg-black p-1.5 rounded-xl border border-white/5 space-x-2">
              {INERTIA_PRODUCTS.map((prod) => (
                <button
                  id={`inertia-tab-${prod.id}`}
                  key={prod.id}
                  onClick={() => setActiveItem(prod.id)}
                  className={`flex-1 py-3 text-xs font-medium font-display rounded-lg transition-all cursor-pointer ${
                    activeItem === prod.id
                      ? "bg-blue-600 text-white shadow-lg box-glow"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {prod.title}
                </button>
              ))}
            </div>

            {/* Active product overview card */}
            <div className="p-8 rounded-2xl glass-card relative min-h-[280px] flex flex-col justify-between box-glow">
              {INERTIA_PRODUCTS.map((prod) => {
                if (prod.id !== activeItem) return null;
                return (
                  <motion.div
                    id={`inertia-detail-${prod.id}`}
                    key={prod.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">
                        {prod.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-1">
                        {prod.title}
                      </h3>
                    </div>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Focus Area</span>
                        <p className="text-xs text-white font-semibold mt-0.5">{prod.focusArea}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Core Tagline</span>
                        <p className="text-xs text-blue-400 font-semibold mt-0.5">{prod.tagline}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Spoke Graphic Hub Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Spinning decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/25 animate-[spin_40s_linear_infinite]" />
              
              {/* Inner glowing circle */}
              <div className="absolute inset-8 rounded-full bg-blue-600/5 border border-blue-500/20 box-glow flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center font-display font-black text-2xl text-white text-glow">
                  IN
                </div>
              </div>

              {/* Connected node lines */}
              {INERTIA_PRODUCTS.map((prod, idx) => {
                const isActive = prod.id === activeItem;
                // Distribute nodes in a circle
                const angle = (idx * 360) / 3;
                const transform = `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`;

                return (
                  <button
                    id={`inertia-node-${prod.id}`}
                    key={prod.id}
                    onClick={() => setActiveItem(prod.id)}
                    style={{ transform }}
                    className={`absolute p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-400 box-glow scale-110"
                        : "bg-zinc-950 text-zinc-500 border-white/5 hover:text-zinc-300 hover:border-white/10"
                    }`}
                  >
                    <DynamicIcon
                      name={idx === 0 ? "ShieldAlert" : idx === 1 ? "ShoppingBag" : "Cpu"}
                      size={16}
                    />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
