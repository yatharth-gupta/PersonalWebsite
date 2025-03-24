module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          dark: 'rgb(56, 91, 214)',
          light: 'var(--primary-color-light)',
        },
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        textPrimary: 'var(--text-color)',
        textSecondary: 'var(--secondary-color)',
        lightGray: 'var(--light-gray)',
        darkGray: 'var(--dark-gray)',
        success: 'var(--success-color)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        custom: 'var(--box-shadow)',
      },
      borderRadius: {
        custom: 'var(--border-radius)',
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
};
