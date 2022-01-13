module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#fbfbfd'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
