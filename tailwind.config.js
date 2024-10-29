module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{html,js}',
    './public/**/*.{html,js}',
    './index.html',
    './main.html', 
    './*.html',
  ],
  theme: {
    extend: {
      textStroke: {
        // Menambahkan utilitas kustom untuk stroke text
        '2px': '2px black',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
