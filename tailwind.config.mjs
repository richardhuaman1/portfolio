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
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
      '8xl': '48px',
      '9xl': '52px',
      '10xl': '56px',
      DEFAULT: '16px',
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
