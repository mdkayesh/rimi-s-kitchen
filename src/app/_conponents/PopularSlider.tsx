"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { RecipeItem } from "@/types/types";
import Link from "next/link";
import RatingStar from "./RatingStar";
import SliderItem from "./SliderItem";

export default function PopularSlider({
  recipeItems,
}: {
  recipeItems: RecipeItem[];
}) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={20}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {recipeItems?.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
