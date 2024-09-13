import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { CgWorkAlt } from "react-icons/cg";


const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="about">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen " />
        <Spotlight
          className="top-20 left-full h-[80vh] w-[50vw] hidden md:block"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] hidden md:block" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-wider max-w-90 text-blue-100 text-center text-xs ">
            Dynamic web magic with next.js and react.js
          </h2>
          <TextGenerateEffect
          className="max-w-[70vw] md:max-w-[60vw] text-center text-[40px] tracking-wider md:text-5xl! lg:text-6xl!"
          words="Transforming Your Vision Into a Powerful, Fully Customized Digital Solution."
          />
          <p className="text-center md:tracking-wide mt-4 text-sm md:text-lg">
            Hi, I{"'"}m Uma, a Full-Stack Developer from india.
          </p>
          <a href="#mywork">
          <MagicButton icon={<CgWorkAlt className="w-4 h-4"/>} position="right" title="See My Work" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
