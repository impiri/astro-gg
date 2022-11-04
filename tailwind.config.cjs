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
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
