/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#0b0d17',
          light: '#d0d6f9',
        },
      },
      fontFamily: {
        bellefair: 'bellefair, sans-serif',
      },
    },
  },
  plugins: [],
};
