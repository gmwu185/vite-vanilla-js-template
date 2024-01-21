const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,mdx}',
    './main.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

