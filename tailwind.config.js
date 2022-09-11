module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: '#4D4D4D',
        grey: '#343434',
        darkgrey: '#1C1C1C',
        textcolor: '#E3E3E3',
        yellow: '#DBFF00',
        white: 'white',
        black: 'black',
        transparent: 'transparent'
      },
      screens: {
        sm: { min: '0px', max: '767px' },
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      keyframes: {
        fade_in_show: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fade_in_show_backdrop: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0.5'
          }
        }
      },
      animation: {
        fade_in_show: 'fade_in_show 0.150s',
        fade_in_show_backdrop: 'fade_in_show_backdrop 0.150s'
      }
    }
  },
  plugins: []
}
