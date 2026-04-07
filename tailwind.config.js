/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent': '#e8a020',       // Amber gold — sharp, memorable
        'amber-dim': '#b87d18',    // Darker amber for hover states
        'canvas': '#0c0c0d',       // Near-black canvas background
        'surface': '#141415',      // Slightly lighter surface
        'surface-2': '#1c1c1e',    // Card / elevated surface
        'rule': '#272729',         // Subtle divider lines
        'muted': '#5a5a60',        // Muted text
        'dim': '#9a9aa5',          // Dimmed text
        'cream': '#f0ede8',        // Primary text on dark
        'off-white': '#fbfaf9',    // Legacy compat
        'ink': '#0c0c0d',          // Legacy compat
      },
      fontFamily: {
        'heading': ['"DM Serif Display"', 'serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
