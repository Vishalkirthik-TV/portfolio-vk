"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { links } from "@/config";
import { skills } from "@/data";

export const Hero = () => {
  const greetings = [
    "Bonjour!",
    "Hola!",
    "こんにちは!",
    "Olá!",
    "Ciao!",
    "你好!",
    "Привет!",
    "Hallo!",
    "Salut!",
    "Hello there!",
  ];

  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= greetings.length) {
        window.clearInterval(interval);
        return;
      }
      setGreeting(greetings[currentIndex]);
    }, 180);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-28 pb-12 px-4 overflow-hidden">

      {/* Decorative floating background shapes */}
      <div className="absolute top-36 left-6 md:left-12 w-12 h-12 bg-[#FFE66D] nb-border rotate-12 animate-nb-float hidden md:block" />
      <div className="absolute top-48 right-10 md:right-16 w-10 h-10 bg-[#4ECDC4] nb-border rounded-full animate-nb-float-delayed hidden md:block" />
      <div className="absolute bottom-40 left-12 w-8 h-8 bg-[#C3AED6] nb-border-thin rotate-45 animate-nb-float-delayed hidden md:block" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mt-6">

        {/* Left Column - Copy & CTA */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

          {/* Greeting Badge */}
          <div className="nb-tag bg-[#4ECDC4] text-nb-dark text-[0.75rem] font-extrabold uppercase px-3 py-2 flex items-center justify-center gap-2">
            <span className={`inline-block ${greeting === "Hello there!" ? "" : "animate-nb-greeting"}`}>
              {greeting}
            </span>
          </div>

          {/* Name Display */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-space text-nb-dark dark:text-white leading-[0.95] tracking-tight uppercase">
            I&apos;m VishalKirthik.
          </h1>

          {/* Short Bio Tagline */}
          <p className="text-base md:text-lg font-inter text-nb-dark/80 dark:text-white/80 max-w-lg leading-relaxed">
            Thanks for stopping by 😀, I am Vishalkirthik based in Nagpur, India - Passionate about building systems and fullstack projects. 
          </p>

          {/* Social Icons Row */}
          <div className="flex gap-3 mt-1">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-nb-dark border-2 border-nb-dark dark:border-white flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] hover:bg-nb-yellow dark:hover:bg-nb-yellow hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a] dark:hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:active:shadow-none transition-all"
            >
              <FaGithub className="text-lg text-nb-dark dark:text-white" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-nb-dark border-2 border-nb-dark dark:border-white flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] hover:bg-[#74B9FF] dark:hover:bg-[#74B9FF] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a] dark:hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:active:shadow-none transition-all"
            >
              <FaLinkedinIn className="text-lg text-nb-dark dark:text-white" />
            </a>
            <a
              href="https://x.com/vishalkirthik5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-nb-dark border-2 border-nb-dark dark:border-white flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] hover:bg-[#FF8B94] dark:hover:bg-[#FF8B94] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a] dark:hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:active:shadow-none transition-all"
            >
              <FaXTwitter className="text-lg text-nb-dark dark:text-white" />
            </a>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-3">
            <Link href="#contact">
              <button className="nb-btn bg-[#FFE66D] text-nb-dark text-sm px-6 py-3">
                Get in Touch!
                <FaArrowRight className="text-xs" />
              </button>
            </Link>

            {/* Direct Resume Download link */}
            <div className="flex items-center gap-2.5">
              <a
                href="/VISHALKIRTHIK_RESUME.pdf"
                download
                className="nb-btn bg-white dark:bg-nb-dark text-nb-dark dark:text-white text-xs py-2 px-4 border-2 border-nb-dark dark:border-white hover:bg-[#A8E6CF] dark:hover:bg-[#A8E6CF] dark:hover:text-nb-dark"
              >
                Download CV
              </a>
              <div className="flex items-center gap-1.5 text-nb-dark/50 dark:text-white/50 hidden sm:flex select-none">
                <svg
                  className="w-7 h-7 -rotate-12 translate-y-0.5 text-nb-dark dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <span className="font-space font-extrabold text-xs italic">Resume / CV!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Slanted Avatar Display */}
        <div className="flex-shrink-0 relative mt-6 lg:mt-0">

          {/* Slanted Tape Decoration */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-7 bg-[#FFE66D]/80 border-2 border-nb-dark z-20 rotate-[-6deg]" />

          {/* Outer Slanted Frame */}
          <div className="relative z-10 w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-[350px] bg-[#74B9FF] border-3 border-nb-dark dark:border-white rounded-lg shadow-[8px_8px_0px_#1a1a1a] dark:shadow-[8px_8px_0px_#000000] rotate-[2deg] overflow-hidden p-3.5">
            {/* White Canvas Container */}
            <div className="relative w-full h-full bg-white dark:bg-nb-dark border-2 border-nb-dark dark:border-white rounded overflow-hidden flex items-center justify-center">
              <Image
                src="/hero_image.jpeg"
                alt={links.ownerName}
                fill
                className="object-cover p-1"
                priority
              />
            </div>
          </div>

          {/* Floating Elements */}
          {/* Terminal Tag */}
          <div className="absolute -top-3 -right-6 z-20 bg-nb-dark text-green-400 border-2 border-nb-dark py-1 px-3 rounded shadow-[3px_3px_0px_#A8E6CF] text-xs font-mono font-bold animate-nb-float rotate-[8deg]">
            &gt;_ dev
          </div>

          {/* Code Delimiter Tag */}
          <div className="absolute top-24 -left-10 z-20 bg-[#FFE66D] text-nb-dark border-2 border-nb-dark dark:border-white p-2.5 rounded shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] text-xs font-bold animate-nb-float-delayed rotate-[-12deg]">
            &lt;/&gt;
          </div>

          {/* Floppy Storage Tag */}
          <div className="absolute bottom-12 -left-10 z-20 bg-[#A8E6CF] border-2 border-nb-dark dark:border-white p-2 rounded shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] animate-nb-float">
            <svg
              className="w-6 h-6 text-nb-dark dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </div>

          {/* Ninja tag bottom right */}
          <div className="absolute -bottom-3 -right-4 z-20 bg-[#FF8B94] text-nb-dark border-2 border-nb-dark dark:border-white font-space font-extrabold text-xs uppercase px-4 py-2 shadow-[3px_3px_0px_#1a1a1a] dark:shadow-[3px_3px_0px_#000000] rotate-[-3deg]">
            Fullstack Wizard
          </div>
        </div>
      </div>

      {/* Infinite Skills Marquee */}
      <div className="w-full mt-20 border-y-3 border-nb-dark bg-[#FFE66D] py-3.5 rotate-[0.5deg] overflow-hidden select-none relative z-10">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 font-space font-extrabold text-xs md:text-sm uppercase tracking-wider text-nb-dark"
            >
              <span>✦</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
