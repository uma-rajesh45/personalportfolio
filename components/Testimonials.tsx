"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import men1 from "@/public/men1.jpg"
import men2 from "@/public/men2.jpg"
import women1 from "@/public/woman1.jpg"
import women2 from "@/public/woman2.jpg"



export function Testimonials() {
  return (
    <div id="testimonials" className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100  items-center justify-center relative overflow-hidden">
        <p className="text-center text-4xl font-bold tracking-wider py-5 max-w-96 md:max-w-4xl">Here is what my <span className="text-purple">clients are saying!</span></p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div>
        <div>

        </div>
        <div></div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Uma was a fantastic experience. They took our complex requirements and built a robust, scalable web application that exceeded our expectations. Their attention to detail and technical expertise in both frontend and backend development made the process seamless.",
    name: " Sarah Williams ",
    image: women1,
  },
  {
    quote:
      "We were struggling with outdated systems, but Uma transformed our entire platform with modern technologies like Next.js and PostgreSQL. Their communication throughout the project was excellent, and they delivered a top-notch solution on time.",
    name: "James O'Neill",
    image: men1,
  },
  {
    quote: "Uma went above and beyond in delivering a custom-built website for our e-commerce platform. Their knowledge of full stack development, from backend APIs to frontend user experience, made a huge difference in the final product. Highly recommended!",
    name: "Emily Roberts ",
    image: women2,
  },
  {
    quote:
      "From Figma designs to a fully functioning web application, Uma brought our vision to life. Their expertise in React, Next.js, and Tailwind allowed them to create a responsive and high-performing site that we're incredibly proud of.",
    name: "Michael Carter",
    image: men2,
  },
];
