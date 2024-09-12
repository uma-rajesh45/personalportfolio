import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MyApproach } from "@/components/MyApproach";
import { TimelineDemo } from "@/components/ProjectsTimeLine";
import { Testimonials } from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperienceCards from "@/components/WorkExperienceCards";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-black-100 mx-auto md:px-10 px-5 overflow-hidden relative">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          {name:"Home",link:"/",icon:<FaHome/>},
        ]}
        />
        <Hero/>
        <Grid/>
        <TimelineDemo/>
      </div>
      <Testimonials/>
      <WorkExperienceCards/>
      <MyApproach/>
    </main>
  );
}

