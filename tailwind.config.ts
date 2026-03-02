import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          panel: '#161b22',
          borderLight: '#30363d',
          borderDark: '#21262d',
          accent: '#58a6ff',
          mint: '#7ee787'
        }
      },
      boxShadow: {
        window: '0 8px 24px rgba(1, 4, 9, 0.55)'
      }
    }
  },
  plugins: []
};

export default config;
