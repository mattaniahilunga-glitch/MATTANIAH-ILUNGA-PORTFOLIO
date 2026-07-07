import React, { useState } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { DynamicIcon } from "./DynamicIcon";

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBookService = (title: string) => {
    // Custom event to communicate with Contact Form component
    const event = new CustomEvent("autofill-service", { detail: title });
    window.dispatchEvent(event);
    
    // Smooth scroll to contact
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredServices = SERVICES.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-24 relative bg-zinc-950 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              PROFESSIONAL OFFERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
              Elite Digital Solutions
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              Meticulously crafted software, design, and cybersecurity integrations tailored to skyrocket your brand visibility and optimize business pipelines.
            </p>
          </div>

          {/* Service Search Bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
              <DynamicIcon name="Search" className="w-4 h-4" size={16} />
            </span>
            <input
              id="service-search-bar"
              type="text"
              placeholder="Filter services (e.g., NGO, e-commerce)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-black border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-black/40 border border-white/5 rounded-2xl">
              <p className="text-zinc-400 font-medium">No services found matching "{searchTerm}"</p>
              <button
                id="reset-search-btn"
                onClick={() => setSearchTerm("")}
                className="mt-3 text-xs text-blue-400 hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredServices.map((service, idx) => (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col justify-between p-6 rounded-2xl glass-card transition-all relative overflow-hidden"
              >
                {/* Glowing border element */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Service Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/25 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <DynamicIcon name={service.iconName} size={18} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-display font-bold text-white tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans font-light mb-5">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2 text-[11px] text-zinc-500">
                        <DynamicIcon name="Check" className="text-blue-500 w-3.5 h-3.5 shrink-0" size={14} />
                        <span className="font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <button
                  id={`book-${service.id}-btn`}
                  onClick={() => handleBookService(service.title)}
                  className="w-full py-2 bg-zinc-900 group-hover:bg-blue-600/10 text-zinc-300 group-hover:text-blue-400 group-hover:border-blue-500/20 border border-white/5 rounded-xl text-[11px] font-display font-medium tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Book Service
                  <DynamicIcon name="ArrowUpRight" size={10} />
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
