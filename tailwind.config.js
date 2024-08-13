/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F0EEE8',
          dark: '#B4A79B',
        },
        text: {
          DEFAULT: '#121214',
          blue: '#468DC9',
        },
        primary: {
          DEFAULT: '#746D67',
          extend: '#fff',
          light: '#fff',
          dark: '#8B7361',
        },
        secondary: {
          DEFAULT: '#E5935A',
        },
        tertiary: {
          DEFAULT: '#14BDBD',
        },
        up: {
          DEFAULT: '#0ecb81',
          extend: '#D0F2F2',
        },
        down: {
          DEFAULT: '#FF6E6E',
          extend: '#FFE2E2',
        },
        gray: {
          bg: '#2a2932',
          hover: '#fafafa',
          border: '#efefef',
          1: '#4c4c4c',
          card: '#2c2c2e',
          secondary: '#9b9696',
        },
      },
      boxShadow: {
        DEFAULT: 'rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px',
      }
    },
  },
  plugins: [],
}

