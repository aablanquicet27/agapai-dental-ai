import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#3490ff',
          600: '#1a6ff5',
          700: '#1459e1',
          800: '#1748b6',
          900: '#193f8f',
        },
      },
    },
  },
  plugins: [],
}
export default config
