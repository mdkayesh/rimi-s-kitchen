import { ReactNode } from "react";

type Navlinks = {
  title: string;
  url: string;
  icon?: ReactNode;
};

// recipes types

type Recipes = {
  data: RecipeItem[];
  meta: Meta;
};

type RecipeItem = {
  id: number;
  attributes: Recipe;
};

type Recipe = {
  id: Key | null | undefined;
  title: string;
  description: string;
  slug: string;
  keywords: string;
  ingredients: number;
  servings: number;
  minutes: number;
  rating: number;
  youtube_link: string;
  about_text: string;
  type: string;
  categories: {
    data: Category[];
  };
  thumbnail: {
    data: ThumbnailImg[];
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type ThumbnailImg = {
  id: number;
  attributes: {
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
    };
    url: string;
    width: number;
    height: number;
  };
};

// category types

type Category = {
  id: number;
  attributes: {
    title: string;
    img: {
      data: ThumbnailImg;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    recipes: { data: RecipeItem[] };
  };
};

type Categories = {
  data: Category[];
  meta: Meta;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
