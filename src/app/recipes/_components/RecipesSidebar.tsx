import Categories from "@/app/_conponents/Categories";
import RecipeSearchBar from "@/app/_conponents/RecipeSearchBar";
import React from "react";

const RecipesSidebar = () => {
  return (
    <aside className="w-full lg:max-w-[270px]">
      <h3 className="text-2xl font-semibold text-heading">Search & Filters</h3>
      <RecipeSearchBar />
      <Categories />
    </aside>
  );
};

export default RecipesSidebar;
