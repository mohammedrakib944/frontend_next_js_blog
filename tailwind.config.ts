import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        nightdark: {
          primary: "#00f397", // blue
          secondary: "#393E46", // less black
          accent: "#ddd", // text-primary
          neutral: "#b8b6b6", // text-secondary
          "base-100": "#222831", // gray background
          "base-200": "#191d24", // dark background
          "base-300": "#2b323d", // dark background
        },
        daylight: {
          primary: "#147efb", // blue
          secondary: "#555", // less black
          accent: "#2d2e32", // text-primary
          neutral: "#555659", // text-secondary
          "base-100": "#f9f9f9", // gray background
        },
      },
    ],
  },
};
export default config;
