/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
