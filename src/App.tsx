import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChooseMe } from "./components/WhyChooseMe";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { InertiaEcosystem } from "./components/InertiaEcosystem";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LeadsDashboard } from "./components/LeadsDashboard";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Initialize theme from system or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("ilunga_man_theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      localStorage.setItem("ilunga_man_theme", "dark");
      document.documentElement.classList.remove("light");
    } else {
      localStorage.setItem("ilunga_man_theme", "light");
      document.documentElement.classList.add("light");
    }
  };

  // Setup Keyboard Shortcuts (e.g. Cmd+Shift+L to trigger admin panel)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setIsDashboardOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#050505] text-[#f9fafb]" 
        : "bg-zinc-50 text-zinc-900 light-mode-overrides"
    }`}>
      {/* Immersive UI Ambient Glowing Backdrops */}
      {isDarkMode && (
        <>
          <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        </>
      )}

      {/* Loading Sequence */}
      <LoadingScreen />

      {/* Header and Scroll Indicator */}
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenDashboard={() => setIsDashboardOpen(true)} 
      />

      {/* Section Content */}
      <main id="main-content-layout">
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Portfolio />
        <Skills />
        <InertiaEcosystem />
        <Testimonials />
        <Faq />
        <Contact onOpenDashboard={() => setIsDashboardOpen(true)} />
      </main>

      {/* Footer and Float Action Buttons */}
      <Footer onOpenDashboard={() => setIsDashboardOpen(true)} />

      {/* Leads Intake Administrative Portal */}
      <LeadsDashboard 
        isOpen={isDashboardOpen} 
        onClose={() => setIsDashboardOpen(false)} 
      />

      {/* Custom Styles Injection for Light Mode overrides */}
      {!isDarkMode && (
        <style dangerouslySetInnerHTML={{ __html: `
          .light-mode-overrides {
            color: #18181b !important;
          }
          .light-mode-overrides h1,
          .light-mode-overrides h2,
          .light-mode-overrides h3,
          .light-mode-overrides h4,
          .light-mode-overrides strong {
            color: #09090b !important;
          }
          .light-mode-overrides .glass-card {
            background: rgba(255, 255, 255, 0.8) !important;
            border-color: rgba(0, 0, 0, 0.08) !important;
            color: #27272a !important;
          }
          .light-mode-overrides .glass-card:hover {
            border-color: rgba(0, 102, 255, 0.4) !important;
            box-shadow: 0 10px 30px rgba(0, 102, 255, 0.05) !important;
          }
          .light-mode-overrides .text-glow {
            text-shadow: none !important;
          }
          .light-mode-overrides .dark-grid-bg {
            background-image: 
              linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px) !important;
          }
          .light-mode-overrides .blue-grid-bg {
            background-image: 
              linear-gradient(to right, rgba(0, 102, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 102, 255, 0.03) 1px, transparent 1px) !important;
          }
          .light-mode-overrides .bg-zinc-950,
          .light-mode-overrides .bg-black {
            background-color: #f4f4f5 !important;
          }
          .light-mode-overrides .bg-zinc-950\\/60,
          .light-mode-overrides .bg-black\\/40 {
            background-color: rgba(244, 244, 245, 0.85) !important;
          }
          .light-mode-overrides input,
          .light-mode-overrides textarea {
            background-color: #ffffff !important;
            color: #09090b !important;
            border-color: rgba(0, 0, 0, 0.1) !important;
          }
          .light-mode-overrides input:focus,
          .light-mode-overrides textarea:focus {
            border-color: #0066ff !important;
          }
          .light-mode-overrides .text-zinc-400 {
            color: #52525b !important;
          }
          .light-mode-overrides .text-zinc-500 {
            color: #71717a !important;
          }
          .light-mode-overrides .border-white\\/5,
          .light-mode-overrides .border-white\\/10 {
            border-color: rgba(0, 0, 0, 0.08) !important;
          }
          .light-mode-overrides .bg-white {
            background-color: #09090b !important;
            color: #ffffff !important;
          }
          .light-mode-overrides .bg-white:hover {
            background-color: #27272a !important;
          }
          .light-mode-overrides .bg-zinc-900 {
            background-color: #e4e4e7 !important;
            color: #18181b !important;
          }
          .light-mode-overrides .bg-zinc-900:hover {
            background-color: #d4d4d8 !important;
          }
          #scroll-progress-indicator {
            background: linear-gradient(to right, #0052cc, #00d2ff) !important;
          }
        ` }} />
      )}
    </div>
  );
}
