"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { navItems } from "@/data";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 inset-x-4 z-[5000] mx-auto max-w-4xl px-4 md:px-6 py-2.5 bg-[#FFFDF7]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm border-2 border-nb-dark dark:border-white rounded-xl transition-all duration-300",
        scrolled ? "shadow-[4px_4px_0px_#1a1a1a] dark:shadow-[4px_4px_0px_#FFFDF7] top-3" : "shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#FFFDF7]",
        className
      )}
      id="navbar"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group font-space font-extrabold text-base md:text-lg text-nb-dark dark:text-white uppercase tracking-wider"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-full bg-nb-coral border-2 border-nb-dark dark:border-white flex items-center justify-center shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#FFFDF7] transition-all group-hover:bg-nb-yellow group-hover:shadow-[3px_3px_0px_#1a1a1a] dark:group-hover:shadow-[3px_3px_0px_#FFFDF7] group-hover:rotate-12">
            <span className="text-sm">VK</span>
          </div>
          <span className="hidden sm:inline-block">VishalKirthik TV</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-nb-dark dark:border-white bg-white/95 dark:bg-[#1a1a1a]/95 text-nb-dark dark:text-white shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#FFFDF7] hover:border-nb-yellow hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#FFFDF7] transition-all"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="relative px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-nb-dark dark:text-white text-[11px] sm:text-xs md:text-sm font-extrabold font-space uppercase tracking-wide bg-transparent border-2 border-transparent hover:border-nb-dark dark:hover:border-white hover:bg-nb-yellow dark:hover:bg-nb-yellow hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#FFFDF7] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none dark:active:shadow-none transition-all rounded-md"
              >
                {navItem.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "sm:hidden absolute left-4 right-4 top-full mt-3 rounded-2xl border-2 border-nb-dark dark:border-white bg-[#FFFDF7]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm shadow-[4px_4px_0px_#1a1a1a] dark:shadow-[4px_4px_0px_#FFFDF7] overflow-hidden transition-all",
          menuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-2 p-3">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`mobile-link-${idx}`}
              href={navItem.link}
              onClick={() => setMenuOpen(false)}
              className="block px-3.5 py-2 text-nb-dark dark:text-white text-sm font-extrabold font-space uppercase tracking-wider bg-transparent border-2 border-transparent rounded-lg hover:border-nb-dark dark:hover:border-white hover:bg-nb-yellow dark:hover:bg-nb-yellow hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#FFFDF7] transition-all"
            >
              {navItem.name}
            </Link>
          ))}
          <div className="flex justify-center pt-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
