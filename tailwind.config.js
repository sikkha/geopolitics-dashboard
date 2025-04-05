/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan these files in src
    "./public/index.html"        // Good practice to include this too
  ],
  theme: {
    extend: {}, // You can add custom theme settings here later
  },
  plugins: [], // You can add Tailwind plugins here later
}
