import React from "react";
import CommonHero from "../_conponents/CommonHero";
import Image from "next/image";
// import { racipeItems } from "../_sections/LatestRecipes";
import EditorsCart from "../_conponents/EditorsCart";
import fetchDataFromApi from "@/lib/fetchDataFromApi";
import { Recipes } from "@/types/types";

const name = "Rimi's Kitchen";

//fetchLatestRecipes
const fetchLatestRecipes = async () => {
  const data = await fetchDataFromApi(
    "/recipes?populate[0]=categories&populate[1]=thumbnail&filters[type][$containsi]=latest&pagination[pageSize]=3"
  );
  return data;
};

const About = async () => {
  const recipes: Recipes = await fetchLatestRecipes();

  return (
    <section className="about">
      <CommonHero title="About Me" img="/hero-1.png" />

      <div className="container mt-20">
        <div className="flex gap-7 flex-col-reverse min-[900px]:flex-row">
          <div className="flex-1">
            <h4 className="uppercase text-lg mb-4 flex items-center gap-2 font-semibold">
              <span className="inline-block h-1 w-7 bg-primary rounded-lg"></span>
              About {"Rimi's Kitchen"}
            </h4>
            <h1 className="text-5xl font-semibold text-heading">
              Welcome to <span className="text-primary">{"Our Kitchen"}</span>
            </h1>
            <article className="description mt-7 [&_p]:mt-5">
              <p>
                Welcome to <span className="font-semibold">{name}</span>, where
                cooking is fun and easy! 🍽️✨ At{" "}
                <span className="font-semibold">{name}</span>, we love sharing
                tasty recipes and helpful cooking tips to make your time in the
                kitchen a breeze.
              </p>
              <p>
                Think of us as your friendly cooking guide. Rimi, the person
                behind the kitchen magic, wants to make cooking simple and
                enjoyable for everyone, whether you&apos;re a kitchen pro or
                just starting out.
              </p>
              <p>
                On our website, you&apos;ll find all kinds of recipes from
                around the world. We have easy-to-follow instructions and
                colorful pictures to help you make delicious meals. Rimi also
                likes to share stories about the recipes, adding a personal
                touch to the cooking experience.
              </p>
              <p>
                But <span className="font-semibold">{name}</span> is more than
                just recipes. It&apos;s a place where people who love food come
                together. We explore new ingredients, try out different cooking
                tricks, and share our kitchen adventures with you.
              </p>
            </article>
          </div>

          <div>
            <Image
              src="/logo.png"
              alt="Rimi's Kitchen"
              width={400}
              height={400}
              className="max-w-xs mx-auto"
            />
          </div>
        </div>

        {/* latest recipes */}

        <div className="section-padding">
          <h1 className="text-4xl font-semibold text-heading">
            Our Latest Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {recipes?.data?.map((item, index) => (
              <EditorsCart key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
