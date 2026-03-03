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
          panel: '#ffffff',
          borderLight: '#d2d2d7',
          borderDark: '#e8e8ed',
          accent: '#0071e3',
          mint: '#1d1d1f'
        }
      },
      boxShadow: {
        window: '0 14px 40px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
