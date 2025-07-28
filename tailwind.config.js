/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '6': '1.5rem',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
} 