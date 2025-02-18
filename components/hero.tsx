import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import heroImg from "../public/hero-image.jpg";

export const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-16 flex justify-center">
        <div className="grid max-w-[90vw] grid-cols-1 items-center gap-6 md:grid-cols-2 lg:max-w-[70vw]">
          {/* Left side content */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100 md:text-left">
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl md:text-left"
              words="Transforming Concepts into Seamless User Experiences"
            />

            <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl md:text-left">
              Hi, I&apos;m {links.ownerName}, a FullStack developer based in India.
            </p>

            <Link href="#about" className="md:mt-6">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                asChild
              />
            </Link>
          </div>

          {/* Right side image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative flex items-center justify-center">
              {/* White Circular Background */}
              <div className="absolute -z-10 h-[240px] w-[240px] md:h-[280px] md:w-[280px] rounded-full bg-white shadow-md" />

              <Image
                src={heroImg}
                alt="Developer at work"
                width={280}
                height={280}
                className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
