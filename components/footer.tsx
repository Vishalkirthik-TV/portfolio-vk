import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { links } from "@/config";
import Link from "next/link";
import { navItems } from "@/data";

export const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Divider */}
        <div className="nb-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Left - Branding */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFE66D] nb-border-thin flex items-center justify-center">
                <span className="font-space font-extrabold text-sm text-nb-dark">V</span>
              </div>
              <div>
                <p className="font-space font-bold text-base text-nb-dark dark:text-white">
                  {links.ownerName}
                </p>
                <p className="font-inter text-xs text-nb-dark/50 dark:text-white/50">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Center - Nav Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="font-space font-bold text-xs text-nb-dark/60 dark:text-white/60 uppercase tracking-wide hover:text-nb-dark dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-white dark:bg-nb-dark border-nb-dark dark:border-white border-2 flex items-center justify-center hover:bg-[#FFE66D] dark:hover:bg-[#FFE66D] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none dark:active:shadow-none transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-base text-nb-dark dark:text-white" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-white dark:bg-nb-dark border-nb-dark dark:border-white border-2 flex items-center justify-center hover:bg-[#4ECDC4] dark:hover:bg-[#4ECDC4] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none dark:active:shadow-none transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base text-nb-dark dark:text-white" />
            </a>
            <a
              href="https://x.com/vishalkirthik5"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-white dark:bg-nb-dark border-nb-dark dark:border-white border-2 flex items-center justify-center hover:bg-[#FF8B94] dark:hover:bg-[#FF8B94] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1a1a1a] dark:hover:shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none dark:active:shadow-none transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="text-base text-nb-dark dark:text-white" />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="nb-divider mt-8 mb-4" />
        <p className="font-inter text-xs text-nb-dark/40 dark:text-white/40 text-center">
          © {new Date().getFullYear()} {links.ownerName}. Built with Next.js & bold design.
        </p>
      </div>
    </footer>
  );
};
