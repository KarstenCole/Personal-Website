/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-shooter': "url('/src/images/APCS_Final_Map.png')"
      }
    },
  },
  plugins: [],
}

