/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        blue: {
          dark: '#191b27',
          light: '#d0d6f9',
        },
      },
      fontFamily: {
        bellefair: 'bellefair, sans-serif',
        barlow: 'barlow, sans-serif',
      },
    },
  },
  plugins: [],
};
