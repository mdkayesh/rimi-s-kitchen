import React from "react";
import Button from "../_conponents/Button";
import SectionTitle from "../_conponents/SectionTitle";
import RecipeCart from "../_conponents/RecipeCart";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { RecipeItem, Recipes } from "@/types/types";

//fetchLatestRecipes
const fetchLatestRecipes = async () => {
  const data = await fetchDataFromApi(
    "/recipes?populate[0]=categories&populate[1]=thumbnail&filters[type][$containsi]=latest"
  );
  return data;
};

const LatestRecipes = async () => {
  const data: Recipes = await fetchLatestRecipes();
  const recipeItems: RecipeItem[] = data.data;

  return (
    <section id="latest-recipe" className="py-20 bg-bg_tertiary">
      <div className="container">
        <SectionTitle subtitle="Explore" title="Latest Recipes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {recipeItems?.map((item, index) => (
            <RecipeCart key={index} {...item} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-9">
          <Button tag="link" href={"/recipes"}>
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestRecipes;
