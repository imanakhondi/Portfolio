/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "onyx-black": "#000",
        "dark-night": "#1E3A5F",
        "emerald-shadow": "#001F1F",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/Group 1000003914.png')",
        userImage: "url('/public/images/Group 1000003844.png')",
        "onyx-black-gradient": "linear-gradient(to bottom, #19191B, #0C0C0C)",
        "dark-night-gradient": "linear-gradient(to bottom, #0D1B2A, #1B263B)",
        "emerald-shadow-gradient":
          "linear-gradient(to bottom, #001F1F, #1E656D)",

        "onyx-black-rgba-gradient":
          "linear-gradient(to bottom, rgba(60,59,59,0.48), rgba(28,27,27,0.29))",
        "dark-night-rgba-gradient":
          "linear-gradient(to bottom, rgba(30,58,95,0.48), rgba(15,29,48,0.29))",
        "emerald-shadow-rgba-gradient":
          "linear-gradient(to bottom, rgba(0,31,31,0.48), rgba(0,15,15,0.29))",
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
    },
  },
  safelist: [
    "bg-onyx-black",
    "bg-dark-night",
    "bg-emerald-shadow",
    "bg-onyx-black-gradient",
    "bg-dark-night-gradient",
    "bg-emerald-shadow-gradient",
    "bg-onyx-black-rgba-gradient",
    "bg-dark-night-rgba-gradient",
    "bg-emerald-shadow-rgba-gradient",
  ],
  plugins: [],
};
