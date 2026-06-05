
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { Connect } from "@/components/connect";
import { Loader } from "@/components/loader";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
      <Loader />
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Connect />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
