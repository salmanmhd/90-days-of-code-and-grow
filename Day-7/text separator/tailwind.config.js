/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#13072e',
        inputForm: '#4717b4',
      },
    },
  },
  plugins: [],
};
