/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green1: {
          100: "#A5D17D",
          200: "#86BD53",
          300: "#78AC46",
          400: "#649634",
          500: "#2D640D",
          600: "#234E0A",
        },
      },
    },
  },
  plugins: [],
};
