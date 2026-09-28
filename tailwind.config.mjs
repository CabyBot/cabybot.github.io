/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1120',
        neon: { DEFAULT: '#a855f7', soft: '#c084fc' },
        indigo: { 450: '#6366f1' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: { neon: '0 0 40px -8px rgba(168,85,247,.55)' },
    },
  },
};
