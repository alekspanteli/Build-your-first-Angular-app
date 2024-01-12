/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': '#605DC8',
      'secondary': '#8B89E6',
      'accent': '#e8e7fa',
      'white': '#ffffff',
      'shadow-bg': '#E8E8E8',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}