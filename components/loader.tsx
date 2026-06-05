"use client";

import { useEffect, useState } from "react";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Fast count from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start the transition out
          setTimeout(() => setFade(true), 200);
          // Safely unmount after the transition completes
          setTimeout(() => setVisible(false), 700);
          return 100;
        }
        // Increment with varying values for a realistic feel
        const next = prev + Math.floor(Math.random() * 18) + 6;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FFFDF7] dark:bg-[#1a1a1a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${fade ? "opacity-0 pointer-events-none translate-y-[-100%]" : "opacity-100"
        }`}
    >
      {/* Neobrutalist Loader Box */}
      <div className="w-[90%] max-w-sm bg-white dark:bg-nb-dark nb-border p-6 nb-shadow-lg flex flex-col gap-6 rotate-[-1deg]">

        {/* Top window styling */}
        <div className="flex items-center justify-between border-b-2 border-nb-dark dark:border-white pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF6B6B] nb-border-thin" />
            <span className="w-3 h-3 rounded-full bg-[#FFE66D] nb-border-thin" />
            <span className="w-3 h-3 rounded-full bg-[#4ECDC4] nb-border-thin" />
          </div>
          <span className="font-space font-extrabold text-[9px] uppercase tracking-wider text-nb-dark/50 dark:text-white/50">
            portfolio_loader.exe
          </span>
        </div>

        {/* Loading details */}
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="font-space font-extrabold text-xl text-nb-dark dark:text-white uppercase">
            Loading...
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-8 bg-gray-100 dark:bg-nb-dark border-nb-dark dark:border-white border-2 relative overflow-hidden">
          {/* Progress bar fill */}
          <div
            className="h-full bg-[#FFE66D] border-r-2 border-nb-dark dark:border-white transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
          {/* Central percentage indicator */}
          <span className="absolute inset-0 flex items-center justify-center font-space font-extrabold text-xs text-nb-dark dark:text-white">
            {progress}%
          </span>
        </div>

        {/* Info footer */}
        <div className="font-space text-[9px] font-bold uppercase text-nb-dark/50 dark:text-white/50 flex justify-between">
          <span>VISHALKIRTHIK.DEV</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </div>
  );
};
