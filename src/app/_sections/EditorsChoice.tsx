import React from "react";
import SectionTitle from "../_conponents/SectionTitle";
import EditorsCart from "../_conponents/EditorsCart";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { RecipeItem, Recipes } from "@/types/types";

//fetchEditorsRecipes
const fetchEditorsRecipes = async () => {
  const data = await fetchDataFromApi(
    "/recipes?populate[0]=categories&populate[1]=thumbnail&filters[type][$containsi]=editors"
  );
  return data;
};
const EditorsChoice = async () => {
  const data: Recipes = await fetchEditorsRecipes();
  const recipeItems: RecipeItem[] = data.data;

  return (
    <section className="section-padding pb-20 bg-[url('../../public/editor_bg.jpg')] bg-center bg-cover">
      <div className="container">
        <SectionTitle subtitle="explore" title="Editor's Choice" align="left" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:gap-7">
          {recipeItems?.map((item, index) => (
            <EditorsCart key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsChoice;
