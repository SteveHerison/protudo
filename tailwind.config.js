/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightBlue: "hsl(207, 33%, 95%)",
        reded: "hsl(0, 100%, 68%)",
        veryDarkBlue: "hsl(230, 29%, 20%)",
        darkGrayishBlue: "hsl(230, 11%, 40%)",
        grayishBlue: "hsl(231, 7%, 65%)",
        lightGrayishBlue: "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        barlowCondensed: ["BarlowCondensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.40em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};
