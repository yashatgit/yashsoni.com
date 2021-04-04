module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      textColor: {
        1: 'var(--text1)',
        2: 'var(--text2)',
        link: 'var(--accent)',
        primaryy: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
