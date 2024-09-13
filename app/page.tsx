import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MyApproach } from "@/components/MyApproach";
import { TimelineDemo } from "@/components/ProjectsTimeLine";
import { Testimonials } from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperienceCards from "@/components/WorkExperienceCards";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-black-100 dark:text-white mx-auto md:px-10 px-5 overflow-hidden relative">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <TimelineDemo/>
      </div>
      <Testimonials/>
      <WorkExperienceCards/>
      <MyApproach/>
      <Footer/>
    </main>
  );
}

