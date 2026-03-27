/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent': '#f97316',
        'off-white': '#fbfaf9',
        'ink': '#1a1a1a',
      },
      fontFamily: {
        'heading': ['"Bricolage Grotesque"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

