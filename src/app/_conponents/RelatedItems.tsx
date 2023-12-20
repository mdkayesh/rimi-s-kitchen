import Image from "next/image";
import React from "react";
import RatingStar from "./RatingStar";
import Link from "next/link";
import { RecipeItem } from "@/types/types";
import { BASE_URL } from "@/lib/fetchDataFromApi";

const RelatedItems = ({ attributes }: RecipeItem) => {
  const { title, about_text, slug, thumbnail, rating } = attributes;

  let imgUrl = "";

  thumbnail?.data?.forEach((item) => {
    if (item.attributes.width === 600 && item.attributes.height === 400) {
      imgUrl = `${BASE_URL}${item.attributes.url}`;
    }
  });

  return (
    <Link href={`/recipe/${slug}`}>
      <div className="flex gap-4 mt-5">
        <div className="w-1/3 min-w-[120px]">
          <Image
            src={imgUrl}
            width={100}
            height={100}
            className="object-cover aspect-[3/1] rounded-lg h-full w-full"
            alt="recipe"
          />
        </div>
        <div className="w-2/3">
          <h3 className="line-clamp-2 text-heading text-sm font-semibold">
            {title}
          </h3>
          <div className="mt-1 text-sm">
            <RatingStar rating={rating} />
          </div>
          <p className="line-clamp-2 text-xs mt-2">{about_text}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedItems;
