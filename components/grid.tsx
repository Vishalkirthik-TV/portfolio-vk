import React from "react";
import { skillCategories, education } from "@/data";
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaTerminal 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiCplusplus, 
  SiPython, 
  SiReact, 
  SiRedux, 
  SiMui, 
  SiExpress, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiDocker,
  SiGithub
} from "react-icons/si";

// Category icon lookup
const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Languages": FaCode,
  "Frontend": FaLaptopCode,
  "Backend": FaServer,
  "Databases & storage": FaDatabase,
  "DevOps / Tooling / Others": FaTerminal,
};

// Skill technology brand logo lookup
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "C++": SiCplusplus,
  "Python": SiPython,
  "React.js": SiReact,
  "React-Native": SiReact,
  "Redux": SiRedux,
  "Material UI": SiMui,
  "Express.js": SiExpress,
  "NestJs": SiNestjs,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Git/GitHub": SiGithub,
  "Docker": SiDocker,
};

export const Grid = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="nb-heading text-3xl md:text-5xl mb-16 text-center mx-auto w-fit">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Bio Card */}
        <div className="nb-card nb-card-clickable p-6 md:p-8 md:col-span-2 lg:col-span-3 flex flex-col justify-between group">
          <div>
            <h3 className="font-space font-extrabold text-xl text-nb-dark dark:text-white uppercase mb-4 flex items-center gap-3">
              <span className="inline-block w-4 h-4 bg-[#FF6B6B] nb-border-thin" />
              Who Am I
            </h3>
            <p className="font-inter text-nb-dark/80 dark:text-white/80 text-base md:text-lg leading-relaxed">
              I&apos;m a developer who likes building functional apps that people actually use.
              I focus on writing clean, maintainable code and optimizing performance across the stack. 
              Whether it&apos;s building real-time communication tools, setting up search logic, or developing mobile apps, 
              I enjoy taking a complex backend idea and wrapping it in a simple, solid user interface.
            </p>
          </div>
        </div>

        {/* Core Skills & Tech Stack Section Title Card */}
        <div className="nb-card p-6 md:p-8 md:col-span-2 lg:col-span-3 bg-white dark:bg-neutral-900 border-3 border-nb-dark dark:border-white">
          <h3 className="font-space font-extrabold text-2xl text-nb-dark dark:text-white uppercase flex items-center gap-3">
            <span className="inline-block w-5 h-5 bg-[#4ECDC4] border-2 border-nb-dark" />
            Core Skills & Tech Stack
          </h3>
        </div>

        {/* 5 Categories Grid Layout */}
        {skillCategories.map((category, idx) => {
          const CategoryIcon = categoryIconMap[category.title];
          // 5th card (DevOps, idx === 4) spans 2 columns on tablet/desktop to fill the space
          const spanClass = idx === 4 
            ? "md:col-span-2 lg:col-span-2 col-span-1" 
            : "col-span-1";

          return (
            <div
              key={category.title}
              className={`nb-card nb-card-clickable p-6 border-3 border-nb-dark dark:border-white flex flex-col justify-between group transition-all duration-150 ${spanClass}`}
              style={{
                boxShadow: "6px 6px 0px var(--nb-shadow-color)",
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-space font-black text-sm uppercase text-nb-dark dark:text-white py-1 px-2.5 border-2 border-nb-dark dark:border-white shadow-[2px_2px_0px_rgba(26,26,26,1)] bg-white dark:bg-neutral-800">
                    {category.title}
                  </span>
                  {CategoryIcon && (
                    <CategoryIcon className="text-2xl md:text-3xl text-nb-dark/25 dark:text-white/25 group-hover:text-nb-dark dark:group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.items.map((skill) => {
                    const SkillIcon = skillIconMap[skill];
                    return (
                      <span
                        key={skill}
                        className="nb-tag flex items-center gap-1.5 text-xs font-black py-1.5 px-3 border-2 border-nb-dark dark:border-white shadow-[2.5px_2.5px_0px_rgba(26,26,26,1)] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_rgba(26,26,26,1)] active:translate-y-0.5 active:shadow-none transition-all duration-100 select-none cursor-pointer text-nb-dark"
                        style={{ backgroundColor: category.color }}
                      >
                        {SkillIcon && <SkillIcon className="text-sm flex-shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Education Card */}
        <div 
          className="nb-card nb-card-clickable p-6 md:p-8 bg-[#FFE66D] md:col-span-2 lg:col-span-3 border-4 border-nb-dark shadow-[8px_8px_0px_var(--nb-shadow-color)] hover:shadow-[10px_10px_0px_var(--nb-shadow-color)] transition-all duration-150"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-space font-extrabold text-2xl text-nb-dark uppercase mb-3 flex items-center gap-3">
                <span className="inline-block w-5 h-5 bg-[#1a1a1a]" />
                Education
              </h3>
              <p className="font-space font-black text-xl text-nb-dark">
                {education.degree}
              </p>
              <p className="font-inter font-bold text-nb-dark/70 text-base mt-1">
                {education.institution}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="nb-tag bg-white text-nb-dark text-xs font-black border-2 border-nb-dark shadow-[2px_2px_0px_rgba(26,26,26,1)] py-1 px-2.5">
                {education.period}
              </span>
              <span className="nb-tag bg-white text-nb-dark text-xs font-black border-2 border-nb-dark shadow-[2px_2px_0px_rgba(26,26,26,1)] py-1 px-2.5">
                {education.location}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
