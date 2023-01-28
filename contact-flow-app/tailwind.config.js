/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        G: {
          100: "#141414",
          90: "#191919",
          80: "#1E1E1E",
          70: "#232323",
          60: "#282828",
          50: "#2D2D2D",
          40: "#323232",
          30: "#373737",
          20: "#3C3C3C",
          10: "#414141",
        },
      },
      opacity: {
        56: ".56",
        32: ".32",
      },
      fontFamily: {
        glysa: ["Glysa", "normal"],
        lexend: ["Lexend Deca", "normal"],
      },
    },
  },
  plugins: [],
};
