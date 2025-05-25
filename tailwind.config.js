/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // define your CSS-variable–backed colors so Tailwind will emit the classes…
        border:     'hsl(var(--border)   / <alpha-value>)',
        input:      'hsl(var(--input)    / <alpha-value>)',
        ring:       'hsl(var(--ring)     / <alpha-value>)',
        background: 'hsl(var(--background)/ <alpha-value>)',
        foreground: 'hsl(var(--foreground)/ <alpha-value>)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // …any other plugins
  ],
}
