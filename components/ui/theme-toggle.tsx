"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 border-2 border-nb-dark dark:border-white rounded-md bg-transparent flex-shrink-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 border-2 border-nb-dark dark:border-white rounded-md bg-white dark:bg-nb-dark flex items-center justify-center shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#FFFDF7] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#FFFDF7] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none dark:active:shadow-none transition-all text-nb-dark dark:text-white flex-shrink-0"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <FaSun className="text-sm text-nb-yellow" />
      ) : (
        <FaMoon className="text-sm text-nb-dark" />
      )}
    </button>
  );
};
