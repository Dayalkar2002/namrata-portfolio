/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        arch: {
          dark: '#070a0f',
          surface: '#0d131e',
          card: '#131b2a',
          border: '#1f2d45',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          cyan: '#38bdf8',
          blueprint: '#1e3a8a',
          text: '#f1f5f9',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'art-deco': 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(13, 19, 30, 0.9) 100%)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
