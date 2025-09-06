import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf7ff',
          100: '#f2eaff',
          200: '#e3d0ff',
          300: '#cfadff',
          400: '#b180ff',
          500: '#9b5cff',
          600: '#8941fa',
          700: '#6e2ed3',
          800: '#5a2aa6',
          900: '#4a2386'
        }
      },
      boxShadow: {
        glass: '0 10px 30px rgba(100, 64, 165, 0.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
