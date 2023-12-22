import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiNotebook } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { RecipeItem } from "@/types/types";
import RatingStar from "./RatingStar";

const RecipeCart = ({ attributes }: RecipeItem) => {
  const {
    title,
    about_text,
    ingredients,
    servings,
    categories,
    slug,
    minutes,
    rating,
    thumbnail,
  } = attributes;

  let imgUrl = "";

  thumbnail?.data?.forEach((item) => {
    if (item.attributes.width === 400 && item.attributes.height === 600) {
      imgUrl = `${item.attributes.url}`;
    }
  });

  return (
    <div className="recipe-cart max-sm:max-w-sm max-sm:mx-auto">
      <div className="pl-4 p-2">
        <h2 className="text-xl text-heading font-semibold">
          <Link
            href={`/recipe/${slug}`}
            className="hover:text-primary transition-colors line-clamp-2"
          >
            {title}
          </Link>
        </h2>
        <div className="mt-3">
          <RatingStar rating={rating} />
        </div>
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
        <div className="flex gap-3 flex-wrap items-center justify-between mt-4">
          <div>
            <div className="flex gap-1 items-center">
              <span className="text-2xl text-gray-400">
                <IoMdTime />
              </span>
              <p className="text-primary font-semibold text-xl">{minutes}</p>
            </div>
            <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
              minutes
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <span className="text-2xl text-gray-400">
                <PiNotebook />
              </span>
              <p className="text-primary font-semibold text-xl">
                {ingredients}
              </p>
            </div>
            <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
              Ingredients
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <span className="text-2xl text-gray-400">
                <SlPeople />
              </span>
              <p className="text-primary font-semibold text-xl">{servings}</p>
            </div>
            <p className="capitalize tracking-wide text-gray-200 font-[500] text-base">
              Serving
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-300 line-clamp-4">{about_text}</p>
        <Button
          tag="link"
          href={`/recipe/${slug}`}
          btnClass="text-sm w-full mt-6"
        >
          Read More
        </Button>
      </div>

      <div className="cart-cover p-4">
        <Image
          src={imgUrl}
          width={400}
          height={500}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RecipeCart;
