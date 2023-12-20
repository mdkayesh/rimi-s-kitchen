import { RecipeItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiNotebook } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import RatingStar from "./RatingStar";
import { BASE_URL } from "@/lib/fetchDataFromApi";

const PopularRecipeCart = ({ attributes }: RecipeItem) => {
  const {
    title,
    about_text,
    ingredients,
    servings,
    categories,
    slug,
    minutes,
    thumbnail,
    rating,
  } = attributes;

  let imgUrl = "";

  thumbnail?.data?.forEach((item) => {
    if (item.attributes.width === 600 && item.attributes.height === 400) {
      imgUrl = `${BASE_URL}${item.attributes.url}`;
    }
  });

  return (
    <Link href={`/recipe/${slug}`}>
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-bg_secondary">
        <div className="img overflow-hidden w-full md:w-1/2">
          <Image
            src={imgUrl}
            width={600}
            height={400}
            alt={title}
            className="h-full object-cover w-full"
          />
        </div>

        <div className="p-5 w-full md:w-1/2">
          <h2 className="text-heading font-semibold text-xl mt-2 hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <div className="flex flex-wrap gap-3 items-center mt-3">
            {categories?.data?.map((category) => (
              <h3
                className="category bg-primary px-2 text-sm rounded-lg text-white w-fit"
                key={category.id}
              >
                {category?.attributes?.title}
              </h3>
            ))}
          </div>
          <div className="flex gap-1 items-center mt-3">
            <RatingStar rating={rating} />
          </div>
          <p className="mt-4 line-clamp-2">{about_text}</p>

          <div className="flex gap-4 flex-wrap items-center mt-4">
            <div>
              <div className="flex gap-1 items-center" title="Minutes">
                <span className="text-base text-primary">
                  <IoMdTime />
                </span>
                <p className="text-gray-100 font-semibold text-sm">
                  {minutes} mins
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-1 items-center" title="Ingredients">
                <span className="text-base text-primary">
                  <PiNotebook />
                </span>
                <p className="text-gray-100 font-semibold text-sm">
                  {ingredients}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-1 items-center" title="Serving">
                <span className="text-base text-primary">
                  <SlPeople />
                </span>
                <p className="text-gray-100 font-semibold text-sm">
                  {servings}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularRecipeCart;
