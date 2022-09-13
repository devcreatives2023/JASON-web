/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {},
      height: {},
      screens: {},
      colors: { gray: "gray" },
      fontSize: {
        xl: "2.5rem",
        "2xl": "10rem",
        sm: "12px",
      },

      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
