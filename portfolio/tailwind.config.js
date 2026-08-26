/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e14',
        panel: '#10151f',
        'panel-2': '#141c29',
        border: 'rgba(255,255,255,0.08)',
        'border-2': 'rgba(255,255,255,0.14)',
        muted: '#8492a6',
        'muted-2': '#5c6779',
        cyan: '#4cc9f0',
        violet: '#8b6bff',
        green: '#39d98a',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
