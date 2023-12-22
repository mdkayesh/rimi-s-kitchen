import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingStar from "./RatingStar";
import { RecipeItem } from "@/types/types";
import { BASE_URL } from "@/lib/fetchDataFromApi";

const SliderItem = ({ attributes }: RecipeItem) => {
  const { title, about_text, slug, thumbnail, rating } = attributes;

  let imgUrl = "";

  thumbnail?.data?.forEach((item) => {
    if (item.attributes.width === 600 && item.attributes.height === 400) {
      imgUrl = `${item.attributes.url}`;
    }
  });

  return (
    <Link href={`/recipe/${slug}`}>
      <Image
        src={imgUrl}
        width={600}
        height={400}
        alt={title}
        className="w-full"
      />
      <div className="px-6 -mt-12 z-10">
        <div className="text-center bg-bg_secondary rounded-lg px-3 py-5 relative mx-auto">
          <p className="text-sm text-primary">Breakfast</p>
          <h3 className="font-semibold text-lg text-heading mt-2">{title}</h3>
          <div className="flex gap-1 items-center justify-center mt-1">
            <RatingStar rating={rating} />
          </div>
          <p className="mt-4 line-clamp-4">{about_text}</p>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
