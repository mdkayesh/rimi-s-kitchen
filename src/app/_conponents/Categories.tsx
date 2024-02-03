"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ScrollTop } from "@/utils/functions";
import Link from "next/link";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { Categories, Category } from "@/types/types";
import LoadingSkeleton from "./LoadingSkeleton";

const Categories = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data: Categories = await fetchDataFromApi(
          "/categories?populate[0]=recipes&sort[0]=title:asc"
        );
        setCategories(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log("categories", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <ul className="flex-col gap-3 flex mt-4">
        {[...Array(7)].map((_, index) => (
          <li key={index}>
            <LoadingSkeleton className="h-8 rounded-full" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="sticky top-5 right-0">
      <h4 className="text-xl font-semibold mt-6">Categories</h4>
      <ul className="mt-4 flex gap-2 flex-col bg-bg_tertiary">
        <li>
          <Link
            href="/recipes"
            type="button"
            className={`${
              pathname === "/recipes" ? "bg-primary text-white" : ""
            } rounded-lg py-2 px-5 w-full flex justify-between items-center hover:bg-primary hover:text-white transition-colors capitalize`}
            onClick={() => ScrollTop("#categories")}
          >
            <span>All</span>
            <span>(8)</span>
          </Link>
        </li>
        {categories
          ?.slice(0, seeMore ? categories.length : 6)
          .map((category) => (
            <li key={category.id}>
              <Link
                href={`/recipes/${category.attributes.title}`}
                type="button"
                className={`${
                  pathname.includes(category.attributes.title)
                    ? "bg-primary text-white"
                    : ""
                } rounded-lg py-2 px-5 w-full flex justify-between items-center hover:bg-primary hover:text-white transition-colors capitalize`}
                onClick={() => ScrollTop("#categories")}
              >
                <span>{category.attributes.title}</span>
                <span>({category.attributes.recipes.data.length})</span>
              </Link>
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="capitalize w-full py-2 px-4 border-primary border mt-4"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Categories;
