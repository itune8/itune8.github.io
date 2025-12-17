/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        border: "rgba(255, 255, 255, 0.1)",
        primary: {
          DEFAULT: "#7C3AED",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#06B6D4",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#4F46E5",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
