module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#06b6d4',
          500: '#06b6d4'
        }
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(30px,-50px,0) scale(1.1)' },
          '66%': { transform: 'translate3d(-30px,30px,0) scale(0.9)' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        gradient: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      animation: {
        blob: 'blob 20s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        gradient: 'gradient 4s ease infinite'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.2,.9,.2,1)'
      }
    },
  },
  plugins: [],
}