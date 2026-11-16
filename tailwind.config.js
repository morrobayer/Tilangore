/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          50: '#faf9f7',
          100: '#f4f1ec',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
