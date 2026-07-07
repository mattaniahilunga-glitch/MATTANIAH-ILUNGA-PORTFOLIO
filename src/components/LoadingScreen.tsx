import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5s is fast but visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-overlay-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        >
          {/* Animated Logo Container */}
          <div className="flex flex-col items-center space-y-6">
            {/* Pulsing Logo Square */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-electric-blue flex items-center justify-center text-white font-display font-black text-3xl tracking-widest box-glow"
            >
              I
            </motion.div>

            {/* Glowing Brand text */}
            <div className="text-center space-y-1.5">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display font-bold text-white text-base tracking-[0.3em] uppercase"
              >
                ILUNGA MAN
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-mono text-[9px] text-zinc-400 tracking-[0.2em] uppercase"
              >
                Mattaniah Ilunga Portfolio
              </motion.p>
            </div>
          </div>

          {/* Glowing particle ring at bottom */}
          <div className="absolute bottom-10 w-40 h-1 rounded-full bg-zinc-900 overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-2/5 bg-gradient-to-r from-blue-600 to-electric-blue"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
