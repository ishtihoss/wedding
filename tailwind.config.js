/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: '#4a5568',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        expand: 'expand 2s ease-in-out',
        'fade-in': 'fadeIn 1.5s ease-in-out',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '8rem' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
      backgroundImage: {
        'wedding': "url('/wedding_background.jpg')",
      },
    },
  },
  plugins: [],
}