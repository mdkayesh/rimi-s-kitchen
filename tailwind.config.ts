import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff1abe",
        bg_primary: "#0E1317",
        bg_secondary: "#0f1d29",
        bg_tertiary: "#090E11",
        text_color: "#e5e7eb",
        heading: "#ffffff",
      },

      boxShadow: {
        "3xl": `4px 15px 28px -3px rgba(0, 0, 0, 0.5)`,
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1280px",
        },
      },

      screens: {
        lg: "992px",
      },
    },
  },
  plugins: [],
};
export default config;
