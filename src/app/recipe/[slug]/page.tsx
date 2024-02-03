import Categories from "@/app/_conponents/Categories";
import DateConverter from "@/app/_conponents/DateConverter";
import RatingStar from "@/app/_conponents/RatingStar";
import RelatedItems from "@/app/_conponents/RelatedItems";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { RecipeItem, Recipes } from "@/types/types";
import { Metadata } from "next";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiNotebook } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import Markdown from "react-markdown";

type SingleRecipeProps = {
  params: {
    slug: string;
  };
};

//fetchSingleRecipe
const fetchSingleRecipe = async (slug: string) => {
  const data = await fetchDataFromApi(
    `/recipes?filters[slug][$eq]=${slug}&populate=*`
  );
  return data;
};

// const fetch related recipe

const fetchRelatedRecipe = async (category: string) => {
  const data = await fetchDataFromApi(
    `/recipes?filters[categories][title][$in]=${category}&pagination[pageSize]=4&populate=*`
  );
  return data;
};

// dynamic meta data
export async function generateMetadata({
  params: { slug },
}: SingleRecipeProps): Promise<Metadata> {
  const data: Recipes = await fetchSingleRecipe(slug);
  const recipeItems: RecipeItem[] = data?.data;
  const item = recipeItems?.[0]?.attributes;

  return {
    title: item?.title,
    description: item?.about_text,
  };
}

const SingleRecipe = async ({ params: { slug } }: SingleRecipeProps) => {
  const data: Recipes = await fetchSingleRecipe(slug);
  const related: Recipes = await fetchRelatedRecipe(
    data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title
  );
  const recipeItems: RecipeItem[] = data?.data;
  const item = recipeItems?.[0]?.attributes;

  return (
    <section className="single-recipe">
      <div className="container mt-10">
        <div className="flex gap-7 flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-wrap gap-3 items-center mt-3">
              {item?.categories?.data?.map((category) => (
                <h3
                  className="category bg-primary px-2 text-sm rounded-lg text-white w-fit"
                  key={category?.id}
                >
                  {category?.attributes?.title}
                </h3>
              ))}
            </div>
            <h1 className="capitalize text-3xl font-semibold text-heading mt-5">
              {item?.title}
            </h1>
            <div className="flex gap-4 items-center mt-4 text-sm">
              <DateConverter publishedAt={item?.publishedAt} />

              <p>By : Rimi Akter</p>
            </div>

            <div className="flex gap-6 items-center mt-3">
              <RatingStar rating={item?.rating} />
            </div>
            <div
              className="img max-h-[400px] aspect-video bg-center bg-cover bg-no-repeat bg-fixed w-full mt-7"
              style={{
                backgroundImage: `url(${
                  item?.thumbnail?.data?.[0]?.attributes?.url || ""
                })`,
              }}
            >
              <iframe
                width="320"
                height="560"
                src={item?.youtube_link}
                title={item?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full md:h-full"
              ></iframe>
            </div>

            <div className="flex gap-6 flex-wrap items-center mt-6">
              <div className="flex gap-1.5 items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl bg-primary flex justify-center items-center rounded-full w-12 h-12 text-white">
                    <IoMdTime />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {item?.minutes}
                  </p>
                </div>
                <p className="tracking-wide text-gray-200 uppercase text-base">
                  Minutes
                </p>
              </div>
              <div className="flex gap-1.5 items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl bg-primary flex justify-center items-center rounded-full w-12 h-12 text-white">
                    <PiNotebook />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {item?.ingredients}
                  </p>
                </div>
                <p className="tracking-wide text-gray-200 uppercase text-base">
                  Ingredients
                </p>
              </div>
              <div className="flex gap-1.5 items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl bg-primary flex justify-center items-center rounded-full w-12 h-12 text-white">
                    <SlPeople />
                  </span>
                  <p className="text-gray-100 font-semibold text-xl">
                    {item?.servings}
                  </p>
                </div>
                <p className="tracking-wide text-gray-200 uppercase text-base">
                  Serving
                </p>
              </div>
            </div>

            <Markdown className="recipe-content mt-7 markdown">
              {item?.about_text}
            </Markdown>

            <Markdown className="recipe-content mt-5 markdown">
              {item?.description}
            </Markdown>
          </div>

          {/* right */}
          <div className="w-full lg:max-w-[300px]">
            <div className="related-recipes">
              <h2 className="text-2xl font-semibold text-heading">
                Related Recipes
              </h2>
              {related?.data?.map((r) => {
                if (r?.id === recipeItems?.[0]?.id) return;
                return <RelatedItems key={r?.id} {...r} />;
              })}
            </div>
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipe;
