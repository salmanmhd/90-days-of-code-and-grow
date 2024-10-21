/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '112': '34rem', 
        '128': '40rem',
        '160': '60rem'
      },
      height: {
        '110': '32rem', 
        '112': '34rem', 
        '128': '40rem',
        '160': '55rem'
      },
    },
  },
  plugins: [],
};
