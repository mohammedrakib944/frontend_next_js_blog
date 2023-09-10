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
        rakib: {
          primary: "#147efb", // blue
          secondary: "#555", // less black
          accent: "#2d2e32", // text-primary
          neutral: "#767676", // text-secondary
          "base-100": "#f9f9f9", // gray background
        },
      },
    ],
  },
};
export default config;
