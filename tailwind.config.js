const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: {
          100: '#72B626',
          200: '#72b227'
        },
        dark: {
          100: '#111111',
          200: '#262626',
          300: "#27272a"
        },
        light: {
          100: '#ffffff',
          200: '#f9fafb'
        }
      },
      animation: {
        openSidePane: 'openSidePane 1s linear',
      },
      keyframes: {
        openSidePane: {
          '0%': { transform: 'translateX(100vw)' },
          '50%': { transform: 'translateX(0px)' },
        }
      }
    },
  },
  plugins: [
  ],
}
