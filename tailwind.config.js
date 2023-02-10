/** @type {import('tailwindcss').Config} */
const { keyframes, screens, colors, bgImages, spacing, typography, form, components, animations } = require('./configs/tailwind');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      ...screens,
    },
    extend: {
      backgroundImage: {
        ...bgImages,
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        'roboto-slab': ['var(--font-roboto_slab)']
      },
      colors: {
        ...colors,
      },
      keyframes: {
        ...keyframes,
      },
      animation: {
        ...animations
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ...spacing,
        ...typography,
        ...form,
        ...components,
      })
    }
  ],
}
