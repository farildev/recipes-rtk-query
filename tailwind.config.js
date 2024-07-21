/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary : 'Poppins'
    },
    extend: {
      backgroundImage : {
        'meal' : "url('https://images8.alphacoders.com/405/405724.jpg')"
      }
    },
  },
  plugins: [],
}