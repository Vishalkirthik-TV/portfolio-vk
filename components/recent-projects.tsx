import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";



export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="relative w-[90vw] max-w-[570px] bg-[#13162d] rounded-3xl p-6 border border-white/[0.2] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-2xl">
                <Image
                  height={300}
                  width={570}
                  src={img}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h1 className="text-xl font-bold text-white mb-3 line-clamp-1">
                {title}
              </h1>

              <p className="text-sm text-gray-300 mb-6 line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`,
                      }}
                    >
                      {icon.startsWith('/') ? (
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      ) : (
                        <span className="text-xs font-medium text-white px-1 text-center leading-tight">
                          {icon}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    href={sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex text-sm text-purple md:text-xs lg:text-xl"
                  >
                    Visit Link
                  </Link>

                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
