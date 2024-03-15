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
      },
      colors: {
        'main-beige': '#EAE9E5',
        'sub-beige': '#BDB5A8',
        'main-dark': '#302C29',
      },
      keyframes: {
        headerColorChange: {
          to: {backgroundColor: '#FFFFFF'},
        },
      },
      animation: {
        headerColorChange: 'headerColorChange 500ms ease-in-out forword',
      },
    },
  },
  plugins: [],
};
