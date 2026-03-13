/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-bg': '#202124',
        'google-surface': '#303134',
        'google-text': '#e8eaed',
        'google-text-secondary': '#bdc1c6',
        'google-link': '#8ab4f8',
        'google-hover': '#3c4043',
      },
    },
  },
  plugins: [],
}
