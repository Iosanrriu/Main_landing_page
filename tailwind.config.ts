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
          panel: '#141d2f',
          borderLight: '#6b85ab',
          borderDark: '#0a1324',
          accent: '#6fa4cf',
          mint: '#7ab9a9'
        }
      },
      boxShadow: {
        window: '2px 2px 0 #0a1324, -1px -1px 0 #6b85ab'
      }
    }
  },
  plugins: []
};

export default config;
