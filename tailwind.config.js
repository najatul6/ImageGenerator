/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue":"#1d1c2c",
        "low-blue":"#2b293ec2",
        "dark-orange":"#ff4e01",
        "light-sky":"#2ba7a5",
      }
    },
  },
  plugins: [],
}

