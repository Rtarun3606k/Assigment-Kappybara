/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './contexts/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-bold': ['Poppins-Bold'],
        playfair: ['Playfair-Regular'],
        'playfair-bold': ['Playfair-Bold'],
        space: ['SpaceGrotesk-Regular'],
        'space-bold': ['SpaceGrotesk-Bold'],
        tagesschrift: ['Tagesschrift'],
      },
    },
  },
  plugins: [],
};
