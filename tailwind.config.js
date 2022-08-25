const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    //extend: {},
  },
  variants: {},
  plugins: [],
}
