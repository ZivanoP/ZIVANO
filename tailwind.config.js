module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Point to your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // For Poppins
        robotoMono: ['Roboto Mono', 'monospace'], // For Roboto Mono
      },
    },
  },
  plugins: [],
}
