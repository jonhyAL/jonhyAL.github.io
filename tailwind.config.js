/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night:   '#1A1A1A',
        surface: '#1E2530',
        edge:    '#3D5A75',
        silver:  '#A8C5C9',
        cream:   '#FAF3E0',
        offwhite:'#FDFDFD',
        teal:    '#6BAA8E',
        teal2:   '#5A9478',
        petrol:  '#2E4057',
        violet:  '#6BAA8E',
        violet2: '#5A9478',
        glow:    '#6BAA8E',
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
