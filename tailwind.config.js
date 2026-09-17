/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F1EAD9',
        paper: '#FBF7EF',
        olive: '#8A7A3E',
        'olive-deep': '#5F5327',
        burgundy: '#6E1C2C',
        ink: '#2A241C',
        'ink-soft': '#5A5041',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
