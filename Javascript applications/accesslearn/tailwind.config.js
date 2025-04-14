/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'faculty': ['Faculty Glyhpic', 'serif'],
        'simonetta': ['Simonetta', 'serif']
      },
      colors: {
        'pink': {
          50: '#fce4ec',
          200: '#f8bbd0', // The background color
        },
        'brown': {
          600: '#6d4c41', // For the text color
        },
        'purple': {
          500: '#9c27b0', // Button color
          600: '#8e24aa', // Button hover color
        },
      },
  },
  plugins: [],
}
}