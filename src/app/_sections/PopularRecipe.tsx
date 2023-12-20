import React from "react";
import PopularRecipeCart from "../_conponents/PopularRecipeCart";
import PopularSlider from "../_conponents/PopularSlider";
import SectionTitle from "../_conponents/SectionTitle";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { RecipeItem, Recipes } from "@/types/types";

//fetchPopularRecipes
const fetchPopularRecipes = async () => {
  const data = await fetchDataFromApi(
    "/recipes?populate[0]=categories&populate[1]=thumbnail&filters[type][$containsi]=popular"
  );
  return data;
};

const PopularRecipe = async () => {
  const data: Recipes = await fetchPopularRecipes();
  const recipeItems: RecipeItem[] = data.data;

  return (
    <section className="popular-recipe section-padding">
      <div className="container">
        <SectionTitle subtitle="Other" title="Popular Recipes" />
        <div className="flex gap-x-7 gap-y-10 mt-10 flex-col lg:flex-row">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 md:gap-8">
            {recipeItems?.slice(0, 5).map((item) => (
              <PopularRecipeCart key={item.id} {...item} />
            ))}
          </div>

          <div className="">
            <div className="lg:max-w-xs overflow-hidden sticky top-0 right-0">
              <PopularSlider recipeItems={recipeItems?.slice(5)} />
              <div className="popular-tags">
                <h3 className="text-heading font-semibold text-2xl mt-10">
                  Popular Tags
                </h3>
                <div className="flex gap-4 mt-5 flex-wrap">
                  <p className="bg-primary text-white px-3 py-1 rounded-full transition-all duration-300 hover:bg-bg_secondary hover:shadow-lg hover:scale-110">
                    Breakfast
                  </p>
                  <p className="bg-primary text-white px-3 py-1 rounded-full">
                    Lunch
                  </p>
                  <p className="bg-primary text-white px-3 py-1 rounded-full">
                    Dinner
                  </p>
                  <p className="bg-primary text-white px-3 py-1 rounded-full">
                    Vegetarian
                  </p>
                  <p className="bg-primary text-white px-3 py-1 rounded-full">
                    Vegan
                  </p>
                  <p className="bg-primary text-white px-3 py-1 rounded-full">
                    Gluten Free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
