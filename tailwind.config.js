module.exports = {
  mode: 'jit',
  content: ['./dist/*.html', './dist/js/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
