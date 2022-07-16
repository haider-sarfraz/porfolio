/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/**/*.{ts,tsx}', './projects/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      width: {
        inherit: 'inherit',
      },
      height: {
        inherit: 'inherit',
      },
      borderRadius: {
        'nav-item': '3rem 0rem 3rem 0rem',
      },
      colors: {
        'personal-brown-30': '#5e4838',
        'personal-brown-20': '#78716c',
        'personal-brown-10': '#d5d3d1',
        'personal-black-90': '#000000',
      },
      boxShadow: {
        'project': '1px 1px 8px #78716c',
        'skill': '0px 1px 3px #000000'
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
        '4xs': '6px'
      }
    },
  },
  plugins: [
    require('postcss-nested'),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ],
}
