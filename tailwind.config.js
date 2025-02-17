/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      // animation: {
      //   'drawer-right': 'drawer-right 0.3s',
      // },
      // keyframes: {
      //   'drawer-right': {
      //     '0%, 100%': { right: '-500px' },
      //     '100%': { right: '0' },
      //   },
      // },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        comfortaa: ['var(--font-comfortaa)'],
      },
      height: {
        halfScreen: '50vh',
      },
      colors: {
        leadistroDark: '#0A0708',
        slate00: '#0f0f0f',
        slate10: '#0A0708',
        slate20: '#292929',
        slate30: '#333333',
        slate40: '#3d3d3d',
        leadistroGray: '#767577',
        leadistroWhite: '#FBFBFB',
        leadistroDarkComp: '#131212',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
