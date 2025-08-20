module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0d1117',
        'tech-glow': '#00f2ff',
      },
      boxShadow: {
        'neon': '0 0 25px rgba(0, 255, 255, 0.5)',
      },
      backdropBlur: {
        'custom': '5px',
      },
    },
  },
  plugins: [],
}
