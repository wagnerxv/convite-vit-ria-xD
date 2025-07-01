// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'cursive': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Adicione esta linha
  ],
};