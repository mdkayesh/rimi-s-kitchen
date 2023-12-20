import React from "react";
import Pagination from "../_components/Pagination";
import { Recipes } from "@/types/types";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import RecipeCart from "@/app/_conponents/RecipeCart";

type CategoryProps = {
  params: { categoryId: string };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};
//
const Category = async ({
  params: { categoryId },
  searchParams,
}: CategoryProps) => {
  const page = Number(searchParams?.page) || 1;
  const recipes: Recipes = await fetchDataFromApi(
    `/recipes?populate=categories&populate=thumbnail&filters[categories][title]=${categoryId}&pagination[pageSize]=10&pagination[page]=${page}`
  );

  if (recipes?.data?.length === 0) {
    return (
      <div className="h-1/2 flex justify-center items-center text-2xl">
        No Recipe Found!
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {recipes?.data?.map((item, index) => (
          <RecipeCart key={index} {...item} />
        ))}
      </div>
      <Pagination totalPage={recipes?.meta?.pagination?.pageCount} />
    </div>
  );
};

export default Category;
