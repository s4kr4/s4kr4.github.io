module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      gray: {
        darkest: '#222',
        dark: '#444',
        DEFAULT: '#aaa',
        light: '#ddd',
        lightest: '#eee',
      }
    }),
    extend: {
      keyframes: {
        swingLogo: {
          from: {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(25deg)'
          },
          '75%': {
            transform: 'rotate(-25deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          },
        },
        spin: {
          from: {
            transform: 'rotate(0reg)'
          },
          to: {
            transform: 'rotate(360reg)'
          }
        }
      },
      animation: {
        logo: 'swingLogo 1 0.5s ease',
        spinIcon: 'spin 1 0.6s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
