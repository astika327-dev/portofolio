import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#111827',
        foreground: '#E5E7EB',
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        card: '#1F2937',
        border: '#2E3A4B',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
} satisfies Config
