/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {},
      height: {},
      screens: {},
      colors: { gray: "gray" },
      fontFamily: {
        // body:"'Barlow', sans-serif ",
      },
      fontSize: {
        xl: "2.5rem",
      },
    },
  },
  plugins: [],
};
