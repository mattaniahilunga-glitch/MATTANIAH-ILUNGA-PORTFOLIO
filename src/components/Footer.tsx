import React, { useState, useEffect } from "react";
import { DynamicIcon } from "./DynamicIcon";

interface FooterProps {
  onOpenDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDashboard }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cleanPhone = "+260776918455"; // 0776 918 455

  return (
    <>
      {/* Floating Action Button (FAB) Area: WhatsApp & Back to Top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col space-y-3 pointer-events-none">
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${cleanPhone.replace("+", "")}?text=Hello%20Mattaniah,%20I'm%20contacting%20you%20regarding%20a%20website%20development%20project.`}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 pointer-events-auto hover:scale-110 flex items-center justify-center box-glow relative group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <DynamicIcon name="Phone" size={20} />
          <span className="absolute right-14 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] text-zinc-300 font-mono px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full shadow-2xl border border-white/5 hover:border-white/10 transition-all duration-300 pointer-events-auto hover:scale-110 flex items-center justify-center cursor-pointer"
            aria-label="Back to top"
          >
            <DynamicIcon name="ChevronUp" size={16} />
          </button>
        )}
      </div>

      {/* Main Footer Container */}
      <footer id="footer" className="bg-black text-zinc-400 py-16 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/5">
            {/* Left Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div 
                onDoubleClick={onOpenDashboard}
                className="flex items-center space-x-2 group cursor-pointer select-none"
                title="Double-click to open Lead Dashboard"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display font-bold text-white tracking-widest text-base">
                  I
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-widest text-white">ILUNGA MAN</span>
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider">BUILDING OPPORTUNITIES</span>
                </div>
              </div>

              <p className="text-zinc-400 text-xs font-sans font-light leading-relaxed max-w-sm">
                Building Technology That Creates Opportunities. Custom full-stack websites, secure SaaS dashboards, and responsive system integration pipelines optimized for growth.
              </p>

              {/* Social Channels */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://github.com/mattaniahilunga"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-white border border-white/5 rounded-lg transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <DynamicIcon name="Github" size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/mattaniah-ilunga"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-white border border-white/5 rounded-lg transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <DynamicIcon name="Linkedin" size={14} />
                </a>
                <a
                  href="mailto:mattaniahilunga@gmail.com"
                  className="p-2 bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-white border border-white/5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Email Mattaniah"
                >
                  <DynamicIcon name="Mail" size={14} />
                </a>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">Sitemap</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services Highlight Links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">Contact Info</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li className="flex items-center gap-2">
                  <DynamicIcon name="Mail" size={12} className="text-zinc-500" />
                  <span>mattaniahilunga@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="Phone" size={12} className="text-zinc-500" />
                  <span>0776 918 455 (WhatsApp)</span>
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="Phone" size={12} className="text-zinc-500" />
                  <span>0963 606 962 (Inquiries)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Metadata */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-600 gap-4">
            <div>
              &copy; {new Date().getFullYear()} ILUNGA MAN. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <span>SEO Optimized</span>
              <span>•</span>
              <span>Fast-Load Ready</span>
              <span>•</span>
              <button 
                onClick={onOpenDashboard}
                className="hover:text-blue-400 transition-colors underline cursor-pointer"
              >
                Intake Dashboard
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
