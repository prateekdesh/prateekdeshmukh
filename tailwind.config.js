/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // ── "Printed trace" palette ──────────────────────
        'paper': '#f5f2e9',     // warm paper background
        'paper-2': '#eeeadf',   // raised/inset blocks
        'ink': '#211f1a',       // primary text
        'dim': '#6d675a',       // secondary text
        'faint': '#9c9583',     // tertiary / metadata
        'rule': '#dcd5c3',      // hairlines
        'sig': '#156d4d',       // signal green — statuses, tool names, accents
        'sig-deep': '#0d4f37',  // hover green
        'err': '#b23a2f',       // error red — used once, narratively
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        'serif': ['"Newsreader"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
