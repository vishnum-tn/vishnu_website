/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#090B12",
        panel: "#111622",
        ink: "#E9EDF8",
        accent: "#5AA3FF",
        accent2: "#8F7CFF"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(90, 163, 255, 0.2), 0 18px 60px rgba(18, 41, 102, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(1200px circle at 15% 10%, rgba(90, 163, 255, 0.28), transparent 42%), radial-gradient(1200px circle at 85% 20%, rgba(143, 124, 255, 0.22), transparent 38%)"
      }
    }
  },
  plugins: []
};
