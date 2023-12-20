"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  return (
    <button
      type="button"
      onClick={() => {
        gsap.to(window, {
          scrollTo: {
            x: 0,
            y: 0,
          },
          ease: "expo.inOut",
          duration: 2,
        });
      }}
      title="go to top"
      className="rounded-full h-10 w-10 text-3xl border flex justify-center items-center mx-auto hover:scale-110 transition-transform duration-200 group"
    >
      <IoIosArrowRoundUp className="hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
};

export default ScrollToTop;
