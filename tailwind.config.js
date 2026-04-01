/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night:   '#0B0A0F',
        surface: '#100F1A',
        edge:    '#1F1D2E',
        silver:  '#9B96AB',
        cream:   '#C8C2AB',
        violet:  '#8B5CF6',
        violet2: '#6D28D9',
        glow:    '#7C3AED',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      keyframes: {
        marq: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marq-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marq':     'marq 35s linear infinite',
        'marq-rev': 'marq-rev 35s linear infinite',
      },
    },
  },
  plugins: [],
}
