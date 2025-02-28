 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          fontGrotesk: "Space Grotesk"
        },
        colors : {
          "main-background-color" : "#000",
        }
      },
    },
    plugins: [],
}