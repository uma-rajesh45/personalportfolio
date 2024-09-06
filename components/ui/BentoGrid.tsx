"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlobeDemo } from "../Globe";
import "../../public/grid.svg";
import { SiTicktick } from "react-icons/si";
import { BackgroundGradientAnimation } from "./background-gradient";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import copy from "copy-to-clipboard";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] h-[1500px]  lg:h-[800px] lg:grid-rows-4 grid-rows-6 grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  id,
  spareImg,
}: {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: string;
  id?: number;
  spareImg?: string;
}) => {
  const [copied,setCopied] = useState(false);

  const notify = ()=>toast("Email is copied :)")
  const handleClick = () => {
    copy("thinklikecoder748@gmail.com")
    setCopied(true)
    notify()
  };
  return (
    <div
      className={cn(
        `row-span-1 overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black-100 dark:border-white/[0.2] bg-white border border-transparent justify-between  flex flex-col space-y-4 ${
          id === 1 && `lg:row-span-2 lg:col-span-2`
        } ${
          id === 5 && `lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-4`
        }`,
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 bg-black-100">
        {id === 1 && (
          <div className="relative">
            {description && (
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>
            )}

            {icon && (
              <Image
                src={icon}
                height="300"
                width="850"
                alt={title!}
                className="object-cover"
              />
            )}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 z-50 text-2xl max-w-xs absolute left-3  top-20 lg:top-60">
              {title}
            </div>
          </div>
        )}
        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="h-full relative">
            <div className="pl-5 flex flex-col z-50 absolute top-12">
              <span className="font-bold tracking-wide text-3xl">{title}</span>
              <span className="font-extralight">{description}</span>
            </div>
            <div className="flex gap-1 h-full absolute right-0 sm:right-1/3 lg:right-0 bg-pink-700">
              <div className="flex flex-col gap-2 *:bg-black-200 *:text-xs *:p-5 *:rounded-xl *:text-center *:font-semibold -mt-5 lg:mt-0">
                <div className="lg:hidden"></div>
                <div>Next.js</div>
                <div>React.js</div>
                <div>PostgresSQL</div>
                <div></div>
              </div>
              <div className="flex flex-col gap-2 -mt-6 *:bg-black-200 *:text-xs *:p-5 *:rounded-xl *:text-center *:font-semibold">
                <div></div>
                <div>Typescript</div>
                <div>Express</div>
                <div>Javascript</div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        {id === 4 && (
          <div className="relative">
            <p className="font-bold font-sans text-2xl absolute top-5 max-w-lg">Expert full-stack apps with Next.js, React & Express—fast and modern!</p>
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 object-cover"
              src={icon!}
              width="500"
              height="500"
              alt={title!}
            />
            <Image
              className="absolute -right-7 top-24 lg:top-12 object-cover"
              src={spareImg!}
              width="300"
              height="400"
              alt={title!}
            />
          </div>
        )}
        {id === 5 && (
          <div className="relative">
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 object-cover"
              src={spareImg!}
              width="850"
              height="1200"
              alt={title!}
            />
            <Image
              className="absolute -right-52 object-cover lg:right-0"
              src={icon!}
              width="500"
              height="100"
              alt={title!}
            />
            <div className="max-w-sm absolute left-2 top-20 lg:top-48">
              <p className="opacity-50 font-sans">A hotel management website</p>
              <p className="text-2xl font-bold tracking-wide font-sans">
                Recently completed the hotel management website
              </p>
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="relative">
            <BackgroundGradientAnimation>
              <div className="flex flex-col items-center justify-center cursor-pointer mt-7">
                <p className="text-2xl font-bold font-sans">
                  Want to start a project?
                </p>
                <MagicButton
                  icon={copied?<SiTicktick/>:<IoCopyOutline />}
                  position="left"
                  title={copied?"Email address copied!":"Copy my email address"}
                  handleClick={handleClick}
                />
              </div>
            </BackgroundGradientAnimation>

          </div>
        )}
      </div>
      <Toaster/>

    </div>
  );
};
