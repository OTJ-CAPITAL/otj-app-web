import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        black: '#080808',
        'black-soft': '#111111',
        'black-card': '#141414',
        'black-border': '#1E1E1E',
        'grey-dark': '#2A2A2A',
        'grey-mid': '#555555',
        'grey-light': '#888888',
        'grey-muted': '#AAAAAA',
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
      },
    },
  },
  plugins: [],
}

export default config
