/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '560': '560px'
      }
    },
    colors: {
      'main': '#BB3D40',
      'secondary': '#FF3A3F',
      'background': '#F0F0F0',
      'cloud': '#FFFFFF',
      'carbon': '#000000'
    }
  },
  plugins: [],
}
