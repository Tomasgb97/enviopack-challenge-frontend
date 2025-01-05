/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-black': '#2c2b2b',
      },
      maxWidth: {
        'container-max': '1280px',
      },
    },
  },
  plugins: [],
};
