import React from "react";
import RecipeCart from "@/app/_conponents/RecipeCart";
import Pagination from "./_components/Pagination";
import { Recipes } from "@/types/types";
import fetchDataFromApi from "@/lib/fetchDataFromApi";

type RecipesProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

const Recipes = async ({ searchParams }: RecipesProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = searchParams?.q || "";
  // const perPage = Number(searchParams?.perPage) || 5;

  // const start = (page - 1) * perPage;
  // const end = start + perPage;

  // // const entries = racipeItems.slice(start, end);

  // // console.log("page", searchParams);

  if (searchQuery) {
    const recipes: Recipes = await fetchDataFromApi(
      `/recipes?populate=thumbnail&populate=categories&filters[keywords][$containsi]=${searchQuery}&pagination[pageSize]=10&pagination[page]=${page}`
    );

    if (recipes?.data?.length === 0) {
      return (
        <div className="h-1/2 flex justify-center items-center text-2xl">
          No Recipe Found!
        </div>
      );
    }

    return (
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recipes?.data?.map((item, index) => (
            <RecipeCart key={index} {...item} />
          ))}
        </div>
        <Pagination totalPage={recipes?.meta?.pagination?.pageCount} />
      </div>
    );
  } else {
    const recipes: Recipes = await fetchDataFromApi(
      `/recipes?populate=thumbnail&populate=categories&pagination[pageSize]=10&pagination[page]=${page}`
    );

    if (recipes?.data?.length === 0) {
      return (
        <div className="h-1/2 flex justify-center items-center text-2xl font-semibold">
          No Recipe Found!
        </div>
      );
    }

    return (
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recipes?.data?.map((item, index) => (
            <RecipeCart key={index} {...item} />
          ))}
        </div>
        <Pagination totalPage={recipes?.meta?.pagination?.pageCount} />
      </div>
    );
  }
};

export default Recipes;
