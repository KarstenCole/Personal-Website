/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'galaxy-shooter': "url('/src/images/APCS_Final_Map.png')",
        'Music-Website': "url('/src/images/guitar-music-theory.jpeg')",
        'Match-Website': "url('/src/images/Match-game.jpeg')",
      }
    },
  },
  plugins: [],
}

