/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-custom-radial":
          "radial-gradient(125% 125% at 65% 10%, #0c0a09 70%, var(--tw-gradient-to))",
        "hikoi-custom-radial":
          "radial-gradient(125% 125% at 50% 30%, #0c0a09 50%, var(--tw-gradient-to))",
        "event-custom-radial":
          "radial-gradient(125% 125% at 35% 10%, #0c0a09 70%, var(--tw-gradient-to))",
      },
      fontFamily: {
        italiana: ["italiana", "sans-serif"],
        "instrument-serif": ["instrument Serif", "sans-serif"],
      },
      animation: {
        "blob-move": "blobMove 620s infinite",
        "custom-pulse": "customPulse 2s infinite",
        tilt: "tilt 20s infinite",
      },
      keyframes: {
        blobMove: {
          "25%, 75%": {
            transform: "rotate(-50deg) scale(0.6) translate(400px, 40px)",
          },
          "50%": {
            transform: "rotate(50deg) scale(0.3) translate(600px, 120px)",
          },
          "90%": {
            transform: "rotate(160deg) scale(1.1)",
          },
        },
        customPulse: {
          "50%": {
            opacity: "0.50",
          },
        },
        tilt: {
          "25%, 75%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
