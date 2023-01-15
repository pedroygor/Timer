/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    
    extend: {
      colors: {
        'white-100': '#FFFFFF',
        'white-200': '#EAEAEA',
        'white-300': '#D1D1D1',
        'white-400': '#DBDBDB',
        'white-500': '#F9F9F9',
        'white-600': '#E9E9E9',
        'blue-100': '#DCF2FF',
        'blue-500': '#00273F',
        'blue-700': '#011C2C',
        'blue-900': '#01131E',
        'green-100': '#3AEAC0',
        'green-300': '#03AE85',
        'red-300': '#FD6259',
        'black-100': '#000000',
        'yellow-300': '#E9CA29',
      },
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
    },
  },
  plugins: [],
}
