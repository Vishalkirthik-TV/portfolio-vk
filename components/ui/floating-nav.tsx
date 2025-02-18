"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-6xl items-center justify-between rounded-3xl border border-white/[0.2] bg-black-100 px-10 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {/* Logo Container */}
        <div className="flex-shrink-0 scale-125">
          <img src="/logo.png" alt="Logo" className="h-20 w-50" />
        </div>

        {/* Navigation Links Container */}
        <div className="flex items-center space-x-8">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center space-x-1 text-neutral-600 text-lg hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            >
              <span className="!cursor-pointer text-lg">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
