/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container : {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      }
    },
    extend: {},
    fontFamily: {
      sans: ['FigtreeVariable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: ['FigtreeVariable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
