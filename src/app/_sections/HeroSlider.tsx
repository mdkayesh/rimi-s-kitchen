"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { EffectCreative, Navigation } from "swiper/modules";
import Button from "../_conponents/Button";
import gsap from "gsap";

const heroContent = [
  {
    upperText: "Welcome To Rimi's Kitchen",
    title1: "Explore The",
    title2: "Latest Recipes",
    bgImg: "../hero-1.png",
  },
  {
    upperText: "Welcome To Rimi's Kitchen",
    title1: "Make Food",
    title2: "For Your Family",
    bgImg: "../hero-2.png",
  },
  {
    upperText: "Welcome To Rimi's Kitchen",
    title1: "Learn To Make",
    title2: "Recipes Today",
    bgImg: "../hero-3.png",
  },
];

export default function HeroSlider() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.wrapper-${activeIndex}`, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.6,
      });
      gsap.to(`.heading-${activeIndex} span`, {
        stagger: 0.05,
        y: 0,
        x: 0,
        opacity: 1,
        ease: "back",
        duration: 0.4,
      });
    }, ref);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        speed={1000}
        navigation={true}
        creativeEffect={{
          prev: {
            // shadow: true,
            translate: ["-50%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className="mySwiper"
        onSlideChange={(element) => {
          setActiveIndex(element.activeIndex);
        }}
        ref={ref}
      >
        {heroContent.map((content, index) => (
          <SwiperSlide
            className="bg-center bg-cover"
            style={{ backgroundImage: `url(${content.bgImg})` }}
            key={content.bgImg}
          >
            <div className="bg-gradient-to-t from-bg_primary to-transparent max-h-[950px]">
              <div
                className={`wrapper-${index} container py-32`}
                style={{
                  opacity: 0,
                  transform: "translateY(50px) translateX(50px)",
                }}
              >
                <p className="text-gray-200 uppercase mb-3 font-bold tracking-widest before:h-0.5 before:w-6 before:bg-primary before:rounded-lg flex items-center gap-2">
                  {content.upperText}
                </p>
                <div className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-semibold text-heading flex flex-col gap-3 md:gap-4">
                  <h1 className={`heading-${index}`}>
                    {content.title1.split("").map((l, index) => (
                      <span
                        key={index}
                        className={`${
                          l === " " ? "ml-3 md:ml-4" : ""
                        } inline-block`}
                        style={{
                          opacity: 0,
                          transform: "translateX(-10px) ",
                        }}
                      >
                        {l}
                      </span>
                    ))}
                  </h1>
                  <h1 className={`heading-${index}`}>
                    {content.title2.split("").map((l, index) => (
                      <span
                        key={index}
                        className={`${
                          l === " " ? "ml-3 md:ml-4" : ""
                        } inline-block`}
                        style={{
                          opacity: 0,
                          transform: "translateX(-10px) ",
                        }}
                      >
                        {l}
                      </span>
                    ))}
                  </h1>
                </div>

                <Button tag="link" href={"/recipes"} btnClass="mt-8">
                  <span>Explore Recipes</span>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
