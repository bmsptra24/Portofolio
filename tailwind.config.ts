import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        one: "#D285F2",
        two: "#1B1640",
        three: "#332973",
        four: "#9959D9",
        five: "#5246A6",
      },
    },
  },
  plugins: [],
};
export default config;
