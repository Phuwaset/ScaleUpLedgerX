/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js" // เพิ่มการค้นหาใน tw-elements
  ],
  theme: {
    extend: {},
    fontFamily: {
      lilita: ['Lilita One', 'cursive'],
    },
    plugins: [
      require('tw-elements/dist/plugin') // ตรวจสอบการเรียกใช้ปลั๊กอิน
    ],
  },
  plugins: [],
}