import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiNotebook } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { RecipeItem } from "@/types/types";
import RatingStar from "./RatingStar";
import { BASE_URL } from "@/lib/fetchDataFromApi";

const EditorsCart = ({ attributes }: RecipeItem) => {
  const { title, ingredients, servings, slug, minutes, thumbnail, rating } =
    attributes;

  let imgUrl = "";

  thumbnail?.data?.forEach((item) => {
    if (item.attributes.width === 400 && item.attributes.height === 600) {
      imgUrl = `${BASE_URL}${item.attributes.url}`;
    }
  });

  return (
    <Link href={`/recipe/${slug}`}>
      <div className="editors-cart relative overflow-hidden group max-w-sm w-full mx-auto">
        <Image
          src={imgUrl}
          width={400}
          height={600}
          alt={title}
          className="transition-all duration-300 object-cover w-full group-hover:rotate-6 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-bg_primary to-transparent flex items-end">
          <div className="text-center w-full p-4">
            <h1 className="text-xl font-semibold transition-colors duration-300 hover:text-primary">
              {title}
            </h1>

            <div className="flex justify-center mt-3">
              <RatingStar rating={rating} />
            </div>
            <div className="flex gap-3 flex-wrap items-center justify-between mt-4 pb-7">
              <div>
                <div className="flex gap-1 items-center">
                  <span className="text-2xl text-primary">
                    <IoMdTime />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {minutes}
                  </p>
                </div>
                <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
                  Minutes
                </p>
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  <span className="text-2xl text-primary">
                    <PiNotebook />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {ingredients}
                  </p>
                </div>
                <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
                  Ingredients
                </p>
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  <span className="text-2xl text-primary">
                    <SlPeople />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {servings}
                  </p>
                </div>
                <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
                  Serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EditorsCart;
