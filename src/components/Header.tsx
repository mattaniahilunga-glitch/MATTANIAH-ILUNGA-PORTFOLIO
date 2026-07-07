import React, { useState, useEffect } from "react";
import { DynamicIcon } from "./DynamicIcon";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenDashboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, onOpenDashboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled check
      setIsScrolled(window.scrollY > 20);

      // Scroll percentage calculation
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight > 0) {
        const scrolled = (window.scrollY / windowHeight) * 100;
        setScrollPercent(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Me", href: "#why-choose-me" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Inertia", href: "#inertia" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-electric-blue z-50 transition-all duration-75"
        style={{ width: `${scrollPercent}%` }}
      />

      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-black/75 backdrop-blur-md border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#home"
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-display font-bold text-white tracking-widest text-lg box-glow group-hover:bg-blue-500 transition-colors">
                I
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-widest text-white">ILUNGA MAN</span>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">MATTANIAH ILUNGA</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Secret Admin Button */}
              <button
                id="header-admin-trigger"
                onClick={onOpenDashboard}
                className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                title="View Submissions"
              >
                <DynamicIcon name="ShieldCheck" size={16} />
              </button>

              {/* Theme Toggle */}
              <button
                id="desktop-theme-toggle"
                onClick={toggleDarkMode}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <DynamicIcon name="Sun" size={16} /> : <DynamicIcon name="Moon" size={16} />}
              </button>

              <a
                href="#contact"
                className="px-4 py-2 bg-white text-black hover:bg-zinc-200 font-display font-medium text-xs rounded-lg transition-colors shadow-lg shadow-white/5 flex items-center gap-1 cursor-pointer"
              >
                Hire Me
                <DynamicIcon name="ArrowUpRight" size={12} />
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                id="header-admin-trigger-mobile"
                onClick={onOpenDashboard}
                className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                title="View Submissions"
              >
                <DynamicIcon name="ShieldCheck" size={18} />
              </button>

              <button
                id="mobile-theme-toggle"
                onClick={toggleDarkMode}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <DynamicIcon name="Sun" size={18} /> : <DynamicIcon name="Moon" size={18} />}
              </button>

              <button
                id="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <DynamicIcon name="X" size={20} /> : <DynamicIcon name="Menu" size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-navigation-drawer"
          className={`lg:hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-md border-b border-white/10 ${
            mobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col space-y-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-blue-600 text-white font-display font-medium text-xs rounded-lg text-center transition-colors shadow-lg flex items-center justify-center gap-1"
              >
                Hire Me
                <DynamicIcon name="ArrowUpRight" size={12} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
