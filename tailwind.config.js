module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#fbfbfd'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
