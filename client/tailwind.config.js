/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./views/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
      'del': ['Delicious Handrawn', 'cursive'],
      'sen' : [ 'Sen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
