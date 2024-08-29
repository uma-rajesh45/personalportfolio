import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-black-100 mx-auto md:px-10 px-5 overflow-hidden relative">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          {name:"Home",link:"/",icon:<FaHome/>}
        ]}
        />
        <Hero/>
      </div>
    </main>
  );
}
