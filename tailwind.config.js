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
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [{
      saasstartertheme: {
        "primary": "#1e3a8a",
        "primary-content": "#fefbf6",
        "secondary": "#93c5fd",
        "secondary-content": "#1e3a8a",
        "accent": "#3b82f6",
        "accent-content": "#1e3a8a",
        "neutral": "#1e3a8a",
        "neutral-content": "#fefbf6",
        "base-100": "#fefbf6",
        "base-200": "#dbeafe",
        "base-300": "#e5e7eb",
        "base-content": "#1e3a8a",
        "info": "#3b82f6",
        "info-content": "#ffffff",
        "success": "#37d399",
        "success-content": "#ffffff",
        "warning": "#fbbf24",
        "warning-content": "#ffffff",
        "error": "#f77272",
        "error-content": "#ffffff",
      }
    }],
  },
} 