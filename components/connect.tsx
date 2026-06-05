"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { links } from "@/config";

const connectLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: links.linkedin,
    color: "#74B9FF",
    rotation: "-2deg",
    tapeColor: "#FFE66D",
    tapeRotation: "12deg",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: links.github,
    color: "#FFE66D",
    rotation: "1deg",
    tapeColor: "#A8E6CF",
    tapeRotation: "-8deg",
  },
  {
    name: "X / Twitter",
    icon: FaXTwitter,
    url: "https://x.com/vishalkirthik5",
    color: "#FF8B94",
    rotation: "-1.5deg",
    tapeColor: "#FFE66D",
    tapeRotation: "10deg",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: `mailto:${links.ownerEmail}`,
    color: "#A8E6CF",
    rotation: "2deg",
    tapeColor: "#C3AED6",
    tapeRotation: "-6deg",
  },
];

export const Connect = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Heading */}
      <div className="mb-6">
        <div className="inline-block bg-[#FFE66D] nb-border px-6 py-3 nb-shadow">
          <h2 className="font-space font-extrabold text-2xl md:text-4xl text-nb-dark uppercase tracking-tight">
            Get in Touch
          </h2>
        </div>
      </div>

      {/* Subtitle */}
      <p className="font-inter text-lg md:text-xl text-nb-dark/80 dark:text-white/80 mb-16 max-w-lg">
        Let&apos;s connect and have a chat!
      </p>

      {/* Sticky Note Cards */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {connectLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("mailto") ? "_self" : "_blank"}
            rel="noreferrer"
            className="group relative block flex-shrink-0"
            style={{ transform: `rotate(${link.rotation})` }}
          >
            {/* Tape decoration */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 z-10 opacity-80"
              style={{
                backgroundColor: link.tapeColor,
                transform: `translateX(-50%) rotate(${link.tapeRotation})`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            />

            {/* Card */}
            <div
              className="relative w-36 h-44 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 flex flex-col items-center justify-center gap-3 md:gap-4 nb-border shadow-[6px_6px_0px_#1a1a1a] transition-all duration-200 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_#1a1a1a] group-active:translate-y-1.5 group-active:shadow-none cursor-pointer"
              style={{
                backgroundColor: link.color,
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/30 backdrop-blur-sm nb-border-thin flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <link.icon className="text-2xl sm:text-3xl text-nb-dark" />
              </div>

              {/* Label */}
              <span className="font-space font-bold text-xs sm:text-sm md:text-base text-nb-dark uppercase tracking-wide">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
