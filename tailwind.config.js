/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        dm_serif_display: ['var(--font-dm_serif_display)'],
        playfair_display: ['var(--font-playfair_display)'],
        trajan: 'Trajan Pro',
      },
      colors: {
        'main-beige': '#EAE9E5',
        'sub-beige': '#BDB5A8',
        'main-dark': '#302C29',
      },
      fontSize: {
        '48px': '3rem',
        '54px': '3.375rem',
        base: '1.25rem', // 20px
        '22px': '1.4rem',
      },
      keyframes: {
        show: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        show_move_right: {
          '0%': {opacity: 0, transform: 'translateX(-10%)'},
          '100%': {opacity: 1, transform: 'translateX(0)'},
        },
        show_move_left: {
          '0%': {opacity: 0, transform: 'translateX(10%)'},
          '100%': {opacity: 1, transform: 'translateX(0)'},
        },
        show_move_top: {
          '0%': {opacity: 0, transform: 'translateY(10%)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        show: 'show 1.5s ease-in-out forwards',
        show_move_right: 'show_move_right 1.5s ease-in-out forwards ',
        show_move_left: 'show_move_left 1.5s ease-in-out forwards ',
        show_move_top: 'show_move_top 1s ease-in-out forwards ',
      },
    },
  },
  plugins: [],
};
