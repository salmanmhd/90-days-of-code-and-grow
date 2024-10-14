/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // Ensure JavaScript/JSX files are included here
    './components/**/*.{js,jsx}', // Shadcn components
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
