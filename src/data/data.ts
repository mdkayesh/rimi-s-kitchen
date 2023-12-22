import { Navlinks } from "@/types/types";

export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const navlinks: Navlinks[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Recipes",
    url: "/recipes",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About",
    url: "/about",
  },
];
