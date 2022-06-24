module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    maxWidth: {
      prose: '75ch',
      '5xl': '64rem',
    },
    extend: {
      colors: {
        'light-blue': '#fbfbfd',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
