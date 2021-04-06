const { colors: defaultColors } = require('tailwindcss/defaultTheme')

// const colors = {
//   ...defaultColors,
//   ...{
    
//   },
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      primary: '#1B134E',
      secondary: '#42E8E0',
      secondaryGray: '#828282',
      gray: '#E5E5E5'
    },
    fontFamily: {
      sans: ['Prompt', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
