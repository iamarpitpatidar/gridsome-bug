module.exports = {
  darkMode: 'class',
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      },
      colors: {
        light: {
          50: '#EFF6FF'
        },
        steem: {
          1: '#171fc9',
          2: '#11a7f2',
          3: '#5f00de'
        },
        discord: {
          1: '#7289DA'
        }
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)'
          }
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0%)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(-100%)'
          }
        }
      }
    }
  }
}
