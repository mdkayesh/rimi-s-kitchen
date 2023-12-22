import { IMAGE_URL } from "@/data/data";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { Categories } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = async () => {
  const categories: Categories = await fetchDataFromApi(
    "/categories?populate=img&sort[0]=title:asc&pagination[limit]=8"
  );

  return (
    <section id="banner">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[360px]:grid-cols-1 gap-x-5 gap-y-8">
          {categories?.data?.map((item, index) => (
            <Link
              href={`/recipes/${item?.attributes?.title?.toLowerCase()}`}
              key={index}
              className="flex flex-col items-center gap-4 px-3 group"
            >
              <Image
                src={`${item?.attributes?.img?.data?.attributes?.url || ""}`}
                alt={item?.attributes?.title}
                width={500}
                height={500}
                className="rounded-full p-3 bg-bg_secondary aspect-square shadow-lg object-cover"
              />
              <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary uppercase">
                {item?.attributes?.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
