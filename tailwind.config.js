/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        second: "rgb(var(--second) / <alpha-value>)",
        third: "rgb(var(--third) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
