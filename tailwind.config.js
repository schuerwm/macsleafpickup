/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'leaf-green': '#4ade80',
        'leaf-dark-green': '#16a34a',
        'autumn-orange': '#f97316',
        'autumn-red': '#dc2626',
        'autumn-yellow': '#eab308',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'cute': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
