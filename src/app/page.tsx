import Hero from "./_sections/Hero";
import Banner from "./_sections/Banner";
import LatestRecipes from "./_sections/LatestRecipes";
import EditorsChoice from "./_sections/EditorsChoice";
import PopularRecipe from "./_sections/PopularRecipe";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Banner />
      <LatestRecipes />
      <EditorsChoice />
      <PopularRecipe />
    </main>
  );
}
