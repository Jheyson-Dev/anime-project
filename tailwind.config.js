/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        lg: '14rem',
      },
    },
    extend: {
      colors: {
        'black-primary': '#212121',
        'black-secondary': '#373544',
        'purple-primary': '#6354CF',
        'purple-secondary': '#8083FF',
        'white-primary': '#FAF7FF',
        'green-primary': '#00B776',
        'red-primary': '#FF6259',
        'blue-primary': '#00A0FF',
      },
    },
  },
  plugins: [],
};
