module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./dist/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
