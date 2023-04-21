/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#f6f8ff',
          DEFAULT: '#0079ff',
          dark: '#4b6a9b',
        },
        'secondary': {
          light: '#1e2a47',
          DEFAULT: '#2b3442',
          dark: '#141d2f',
        },
        'gray': {
          light: '#fefefe',
          dark: '#697c9a'
        }
      },
      fontSize: {
        'h1': ['26px', '38px'],
        'h2': ['22px', '33px'],
        'h3': ['16px', '24px'],
        'h4': ['13px', '20px'],
        'body': ['15px', '25px'],
      }
    },
  },
  plugins: [],
}

