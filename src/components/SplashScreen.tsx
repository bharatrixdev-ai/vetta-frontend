"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VMark } from "@/components/Logo";

export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check session storage so splash screen shows once per session or initial load
    const hasSeenSplash = sessionStorage.getItem("vetta_splash_seen");
    if (hasSeenSplash) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("vetta_splash_seen", "true");
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0b0c] text-white selection:bg-red-500/30"
        >
          {/* Ambient Crimson Halo */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0.2, 0.45, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(235,45,80,0.35)_0%,rgba(168,28,60,0.1)_50%,transparent_70%)] blur-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1a1c29] to-[#0e1017] p-4 shadow-[0_0_50px_rgba(235,45,80,0.25)] ring-1 ring-white/10"
            >
              <VMark className="h-12 w-12" />
            </motion.div>

            {/* Brand title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-[28px] font-bold tracking-[0.25em] text-white uppercase font-sans"
            >
              Vetta
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-2 text-[12px] font-medium tracking-[0.2em] text-white/50 uppercase"
            >
              Verified Practitioner Network
            </motion.p>

            {/* Loading line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeInOut" }}
              className="mt-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#eb2d50] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
