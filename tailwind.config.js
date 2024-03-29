/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage:{
      'hero-bg':"url('/src/assets/background.png')",
      'about-bg':"url('/src/assets/aboutbg.png')",
      'byby-bg':"url('/src/assets/background-byby.png')"

    },
    extend: {},
  },
  plugins: [],
}