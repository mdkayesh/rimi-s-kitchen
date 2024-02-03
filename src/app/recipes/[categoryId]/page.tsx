import React from "react";
import Pagination from "../_components/Pagination";
import { Categories, Recipes } from "@/types/types";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import RecipeCart from "@/app/_conponents/RecipeCart";
import { Metadata } from "next";

type CategoryProps = {
  params: { categoryId: string };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateStaticParams(): Promise<
  { categoryId: string }[]
> {
  const data: Categories = await fetchDataFromApi(
    "/categories?populate[0]=recipes&sort[0]=title:asc"
  );

  return data.data.map((category) => ({
    categoryId: category.attributes.title,
  }));
}

// dynamic meta data
export async function generateMetadata({
  params: { categoryId },
}: CategoryProps): Promise<Metadata> {
  return {
    title: categoryId?.toUpperCase(),
  };
}

const Category = async ({
  params: { categoryId },
  searchParams,
}: CategoryProps) => {
  const page = Number(searchParams?.page) || 1;
  const recipes: Recipes = await fetchDataFromApi(
    `/recipes?populate=categories&populate=thumbnail&filters[categories][title][$eq]=${categoryId}&pagination[pageSize]=10&pagination[page]=${page}`
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
