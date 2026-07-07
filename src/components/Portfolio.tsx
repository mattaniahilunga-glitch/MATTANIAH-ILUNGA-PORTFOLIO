import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { DynamicIcon } from "./DynamicIcon";

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | "Web" | "System">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [simulationMessage, setSimulationMessage] = useState<string | null>(null);

  const categories: ("All" | "Web" | "System")[] = ["All", "Web", "System"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background radial spotlight */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-blue-950/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              SELECTED SHOWCASES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
              Engineering Excellence
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              Explore dynamic web systems, bespoke SaaS dashboards, and conversion portals designed with flawless responsiveness and airtight security metrics.
            </p>
          </div>

          {/* Categories Tab selector */}
          <div className="flex bg-black p-1 rounded-xl border border-white/5 self-start md:self-auto shrink-0">
            {categories.map((cat) => (
              <button
                id={`portfolio-cat-${cat.toLowerCase()}-btn`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium font-display rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-md border-b border-white/5"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl overflow-hidden glass-card transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-white/5">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Tech Tag */}
                    <span className="absolute top-4 right-4 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-wider uppercase text-blue-400 rounded-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-base font-display font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs / Tech Tags */}
                <div className="px-6 pb-6 pt-3 border-t border-white/5 bg-zinc-950/20 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/5 text-[9px] font-mono text-zinc-400 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-blue-950/20 text-blue-400 text-[9px] font-mono rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                id="portfolio-detail-modal"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="w-full max-w-2xl rounded-2xl glass-card overflow-hidden flex flex-col box-glow-strong"
              >
                {/* Modal Hero Banner */}
                <div className="relative aspect-video w-full bg-zinc-950">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    id="close-modal-btn"
                    onClick={() => {
                      setSelectedProject(null);
                      setSimulationMessage(null);
                    }}
                    className="absolute top-4 right-4 p-2 bg-black/80 backdrop-blur-md hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    <DynamicIcon name="X" size={16} />
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 bg-blue-600 text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                      {selectedProject.category} System
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-3 text-glow">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Description</h4>
                    <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech specs */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Technologies Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Terminal Status Panel */}
                  {simulationMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 bg-blue-950/20 border border-blue-500/20 rounded-xl flex flex-col gap-1.5 font-mono text-[10px]"
                    >
                      <div className="flex items-center justify-between text-blue-400">
                        <span className="font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
                          [TRANSMISSION_ESTABLISHED]
                        </span>
                        <span className="opacity-65">PORT: 3000 // SECURE</span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed">
                        {simulationMessage}
                      </p>
                    </motion.div>
                  )}

                  {/* Dynamic Simulation Actions */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                    <button
                      id="simulate-demo-btn"
                      onClick={() => setSimulationMessage(`[TUNNEL_INIT] Requesting demonstration environment routing. Simulating secure production sandbox for "${selectedProject.title}". CDN assets preloaded. Virtual sandbox running smoothly.`)}
                      className="flex-1 py-3 bg-white text-black hover:bg-zinc-200 font-display font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <DynamicIcon name="ArrowUpRight" size={14} />
                      Launch Live Demo
                    </button>
                    <button
                      id="simulate-github-btn"
                      onClick={() => setSimulationMessage(`[RESOLVING_REPOSITORY] Querying source signature from github.com/mattaniahilunga/${selectedProject.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}. Code schema verified. Commit history loaded.`)}
                      className="flex-1 py-3 bg-zinc-950 text-white hover:bg-zinc-900 border border-white/10 hover:border-white/20 font-display font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <DynamicIcon name="Github" size={14} />
                      View Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
