import { workExperience, achievements } from "@/data";
import {
  IconTrophyCircle,
  IconFlagDocument,
  IconFacetedTrophy,
  IconRibbonMedal,
  IconShieldBadge,
  IconDiamondTrophy,
  IconCapstoneCrown
} from "@/components/ui/achievement-icons";

// Helper to resolve custom SVGs matching the user's reference image style
const getAchievementIcon = (idx: number, className?: string) => {
  switch (idx) {
    case 0:
      return <IconTrophyCircle className={className} />;
    case 1:
      return <IconFacetedTrophy className={className} />;
    case 2:
      return <IconRibbonMedal className={className} />;
    case 3:
      return <IconFlagDocument className={className} />;
    case 4:
      return <IconDiamondTrophy className={className} />;
    case 5:
      return <IconShieldBadge className={className} />;
    case 6:
      return <IconCapstoneCrown className={className} />;
    default:
      return <IconTrophyCircle className={className} />;
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">

      {/* Work Experience */}
      <h2 className="nb-heading text-3xl md:text-5xl mb-16 text-center mx-auto w-fit">
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative mb-24">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px] bg-nb-dark/15 dark:bg-white/15" />

        <div className="space-y-8">
          {workExperience.map((exp) => (
            <div key={exp.id} className="relative pl-16 md:pl-20 group">

              {/* Timeline dot */}
              <div
                className="absolute left-[14px] md:left-[20px] top-6 w-6 h-6 nb-border-thin z-10 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: exp.color }}
              />

              {/* Connector */}
              <div className="absolute left-[38px] md:left-[44px] top-[33px] w-6 md:w-8 h-[3px] bg-nb-dark/15 dark:bg-white/15" />

              {/* Card */}
              <div className="nb-card p-6 md:p-8 relative overflow-hidden">
                {/* Color accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-space font-extrabold text-xl md:text-2xl text-nb-dark dark:text-white uppercase">
                        {exp.title}
                      </h3>
                      <span
                        className="nb-tag text-xs py-0.5 text-nb-dark"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <span className="nb-tag bg-nb-dark dark:bg-white text-white dark:text-nb-dark border-nb-dark dark:border-white text-xs font-bold flex-shrink-0 w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="font-inter text-nb-dark/70 dark:text-white/70 text-sm md:text-base leading-relaxed mb-5">
                  {exp.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
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
            <div className="absolute left-[14px] md:left-[20px] top-0 w-6 h-6 bg-nb-dark dark:bg-white nb-border-thin flex items-center justify-center">
              <span className="text-white dark:text-nb-dark text-[10px] font-bold">✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <h2 className="nb-heading text-3xl md:text-5xl mb-12 text-center mx-auto w-fit">
        Achievements
      </h2>

      {/* Grid listing all achievements unlocked/visible by default */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((ach, idx) => {
          const isLast = idx === 6;
          return (
            <div
              key={idx}
              className={`nb-card nb-card-clickable p-5 flex items-center gap-4 relative overflow-hidden transition-all duration-150 group select-none ${isLast
                  ? "col-span-1 md:col-span-2 lg:col-span-3 border-4 border-nb-dark dark:border-white shadow-[8px_8px_0px_var(--nb-shadow-color)] hover:shadow-[10px_10px_0px_var(--nb-shadow-color)]"
                  : "col-span-1"
                }`}
              style={{ backgroundColor: ach.color }}
            >
              {/* Custom SVG achievement icon tilts on hover */}
              <div className="w-14 h-14 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200 select-none">
                {getAchievementIcon(idx, "w-full h-full")}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-space font-extrabold text-sm md:text-base text-nb-dark uppercase leading-tight flex items-center gap-2 flex-wrap">
                  {ach.title}
                  {isLast && (
                    <span className="px-1.5 py-0.5 text-[8px] font-black bg-white text-nb-dark border border-nb-dark shadow-[1px_1px_0px_rgba(26,26,26,1)] uppercase">
                      🏆 Capstone Award
                    </span>
                  )}
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="font-inter font-bold text-xs text-nb-dark">
                    {ach.place}
                  </span>
                  {ach.org && (
                    <span className="font-inter text-xs text-nb-dark/70">
                      • {ach.org}
                    </span>
                  )}
                </div>
              </div>

              <span className="nb-tag bg-white text-nb-dark text-xs flex-shrink-0 border-2 border-nb-dark font-black shadow-[2px_2px_0px_rgba(26,26,26,1)]">
                {ach.year}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
