module.exports = {
  prefix: '',
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}',
    './projects/app2-store/src/**/*.{html,ts}',
    './projects/app3-orders/src/**/*.{html,ts}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'picton-red': {
          light: '#fd3131',
          DEFAULT: '#fd3131',
          dark: '#f35050',
        },
        'nav-hover-red': {
          DEFAULT: '#910727',
        },
        'nav-menu-active': {
          DEFAULT: '#4e0318',
        },
        'new': {
          DEFAULT: '#D9EDF7',
        },
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
