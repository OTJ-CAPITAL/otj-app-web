import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-geist-sans)'] },
      colors: {
        otj: { black: '#000000', white: '#ffffff', gray: '#111111', muted: '#666666', border: '#222222' }
      }
    }
  },
  plugins: []
}
export default config
