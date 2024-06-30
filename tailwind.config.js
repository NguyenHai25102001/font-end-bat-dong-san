/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

