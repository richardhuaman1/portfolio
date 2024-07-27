/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '2.75rem',
      '8xl': '3rem',
      '9xl': '3.25rem',
      '10xl': '3.5rem',
      DEFAULT: '1rem',
    },
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        primary: {
          50: '#F2FCFD',
          100: '#ccf3f7',
          200: '#99e6ee',
          300: '#66dae6',
          400: '#33cddd',
          500: '#00c1d5',
          600: '#009aaa',
          700: '#007480',
          800: '#004d55',
          900: '#00272b',
          DEFAULT: '#00c1d5',
        },
        dark: '#18181B',
        'deep-dark': 'rgb(9, 9, 11)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        spin: 'spin 6s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
