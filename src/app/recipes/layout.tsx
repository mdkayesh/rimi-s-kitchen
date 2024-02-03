import React from "react";
import CommonHero from "../_conponents/CommonHero";
import RecipesSidebar from "./_components/RecipesSidebar";

type RecipesLayoutProps = {
  children: React.ReactNode;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export const revalidate = 60 * 60 * 24;

const RecipesLayout = ({ children }: RecipesLayoutProps) => {
  // const query = searchParams?.perPage || "";
  // const currentPage = Number(searchParams?.page) || 1;

  // const total_page = 5;

  return (
    <main className="recipes">
      <CommonHero title="Recipes" img={"../hero-3.png"} />
      <section className="container mt-10">
        <div className="flex gap-8 flex-col-reverse lg:flex-row">
          <div id="categories" className="flex-1">
            {children}
          </div>
          <RecipesSidebar />
        </div>
      </section>
    </main>
  );
};

export default RecipesLayout;
