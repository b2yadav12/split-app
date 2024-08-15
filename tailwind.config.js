/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    "node_modules/antd/dist/antd.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb2f96',
      },
    },
  },
  plugins: [],
}

