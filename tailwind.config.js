module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './src/**/*.css'],
  theme: {
    extend: {
      colors: {
        primary: '#db2777', // This is the Tailwind 'pink-600' color
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        expand: 'expand 2s ease-in-out',
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        expand: {
          from: { width: '0' },
          to: { width: '8rem' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}