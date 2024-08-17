/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    "node_modules/antd/dist/antd.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171C26',
        content: "#7F8384",
        bgPrimary: "#F3F4F6",
        bgBox: "#F3F4F6",
      }
    },
    borderRadius: {
      'lg': '1.25rem',
    }
  },
  plugins: [],
}

