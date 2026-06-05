import { projects } from "@/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="nb-heading text-3xl md:text-5xl mb-16 text-center mx-auto w-fit">
        Projects
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px] bg-nb-dark/15" />

        <div className="space-y-8">
          {projects.map(({ id, des, link, title, tags, color }, idx) => (
            <div key={id} className="relative pl-16 md:pl-20 group">

              {/* Timeline dot */}
              <div
                className="absolute left-[14px] md:left-[20px] top-6 w-6 h-6 nb-border-thin z-10 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: color }}
              />

              {/* Connector line to card */}
              <div className="absolute left-[38px] md:left-[44px] top-[33px] w-6 md:w-8 h-[3px] bg-nb-dark/15" />

              {/* Card */}
              <div className="nb-card p-6 md:p-8 relative overflow-hidden">
                {/* Color accent at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: color }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    {/* Project number */}
                    <span
                      className="nb-tag text-[10px] mb-3 inline-block text-nb-dark"
                      style={{ backgroundColor: color }}
                    >
                      Project {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-space font-extrabold text-xl md:text-2xl text-nb-dark dark:text-white uppercase">
                      {title}
                    </h3>
                  </div>

                  <Link
                    href={link}
                    target="_blank"
                    className="nb-btn bg-nb-dark dark:bg-white text-white dark:text-nb-dark border-nb-dark dark:border-white text-xs py-2 px-4 flex-shrink-0 w-fit"
                  >
                    View
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>

                <p className="font-inter text-nb-dark/70 dark:text-white/70 text-sm md:text-base leading-relaxed mb-5">
                  {des}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold font-space uppercase px-2 py-1 bg-gray-100 dark:bg-nb-dark nb-border-thin border-nb-dark dark:border-white text-nb-dark dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* End dot */}
          <div className="relative pl-16 md:pl-20">
            <div className="absolute left-[14px] md:left-[20px] top-0 w-6 h-6 bg-nb-dark nb-border-thin flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
