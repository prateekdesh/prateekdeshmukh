/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'editorial-bg': '#f5f1e9',
        'editorial-surface': '#ebe5d9',
        'editorial-ink': '#25231f',
        'editorial-muted': '#706b61',
        'editorial-line': '#d5cec0',
        'editorial-accent': '#d85e3f',
      },
      fontFamily: {
        'display': ['"Fraunces"', 'Georgia', 'serif'],
        'prose': ['"Newsreader"', 'Georgia', 'serif'],
        'ui': ['"Manrope"', 'sans-serif'],
        'mono': ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
