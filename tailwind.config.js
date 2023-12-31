/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      bright_orange: 'hsl(31, 77%, 52%)',
      dark_cyan: 'hsl(184, 100%, 22%)',
      very_dark_cyan: 'hsl(179, 100%, 13%)',
      transparent_white: 'hsla(0, 0%, 100%, 0.75)',
      very_light_gray: 'hsl(0, 0%, 95%)',
    }
  },
  plugins: [],
}
