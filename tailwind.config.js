/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ff00', // Green accent color
        'dark-bg': '#000207', // Dark background color
        'dark-card': '#1a1a1a', // Dark card background color
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
