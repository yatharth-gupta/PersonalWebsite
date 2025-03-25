module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          dark: "rgb(56, 91, 214)",
          light: "var(--primary-color-light)",
        },
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        textPrimary: "var(--text-color)",
        textSecondary: "var(--secondary-color)",
        lightGray: "var(--light-gray)",
        darkGray: "var(--dark-gray)",
        success: "var(--success-color)",
        border: "var(--border-color)",
        space: {
          dark: "#050816",
          darker: "#030410",
          nebula: "rgba(109, 138, 255, 0.1)",
          accent: "rgba(109, 138, 255, 0.8)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        custom: "var(--box-shadow)",
        cosmic: "0 0 20px rgba(109, 138, 255, 0.4)",
      },
      borderRadius: {
        custom: "var(--border-radius)",
      },
      spacing: {
        15: "3.75rem",
      },
      backgroundImage: {
        "space-gradient":
          "linear-gradient(to bottom, #050816, #080d2a, #050816)",
        "nebula-glow":
          "radial-gradient(circle at center, rgba(109, 138, 255, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
