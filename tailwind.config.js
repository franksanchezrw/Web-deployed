/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#4285f4",
        gray: "#4B4B4C"
      },
       backgroundImage: {
        'sea1': 'url("https://imgs.search.brave.com/fitmTogAmFsOOR3qd6eENOX_NYDaBTUJu-YAnTJ5_Mg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODMxMjE3/MTA1NzItNzcyM2Jk/MmUyMzVkP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVh4OFlYSjBh/V1pwWTJsaGJDVXlN/R2x1ZEdWc2JHbG5a/VzVqWlh4bGJud3dm/SHd3Zkh4OE1BPT0m/dz0xMDAwJnE9ODA")',
        'sea2': 'url("./src/assets/safe.jpg")',
        'sea3': 'url("https://imgs.search.brave.com/fitmTogAmFsOOR3qd6eENOX_NYDaBTUJu-YAnTJ5_Mg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODMxMjE3/MTA1NzItNzcyM2Jk/MmUyMzVkP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVh4OFlYSjBh/V1pwWTJsaGJDVXlN/R2x1ZEdWc2JHbG5a/VzVqWlh4bGJud3dm/SHd3Zkh4OE1BPT0m/dz0xMDAwJnE9ODA")'
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }

    },
        container: {
      center: true,
      padding: '1rem',
      screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",},
  },
  plugins: [],
}