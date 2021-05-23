
let twColors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend:{
      spacing:{
        'nav':'4rem',
        'xs':'0.25rem',
        'sm':'0.5rem',
        'md':'1rem',
        'lg':'2rem',
        'xl':'3rem',
        '2xl':'4rem',
        '3xl':'5rem',
        '4xl':'6rem',
        '5xl':'7rem',
        'container':'theme(spacing.2)',
        'screen-nav':'calc(100vh - theme(spacing.nav))',
        'icon':'1.25rem',
      },
      minHeight: {
        'screen-nav': 'calc(100vh - theme(spacing.nav))',
      },
      height:{
        '1/2-screen':'50vh'
      },
      fontSize:{
        'icon':'1.75rem',
        'symbol':'2rem'
      }
    },
    colors: twColors,
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'msm': { 'max': '640px' },
      'mmd': { 'max': '768px' },
      'mlg': { 'max': '1024px' },
      'mxl': { 'max': '1280px' },
      'm2xl': { 'max': '1536px' },
    }
  }
}
