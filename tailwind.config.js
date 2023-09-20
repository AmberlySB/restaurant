/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        pizza: "url('../src/images/pizza-bg.jpg')",
      },
    },
  },
  plugins: [],
};
