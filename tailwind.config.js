/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      primary:{
        'MarineBlue':'hsl(213, 96%, 18%)',
        'PurplishBlue': 'hsl(243, 100%, 62%)',
        'PastelBlue': 'hsl(228, 100%, 84%)',
        'LightBlue': 'hsl(206, 94%, 87%)',
        'StrawberryRed': 'hsl(354, 84%, 57%)',
      },
      secondary:{
        'CoolGray': 'hsl(231, 11%, 63%)',
        'LightGray': 'hsl(229, 24%, 87%)',
        'Magnolia': 'hsl(217, 100%, 97%)',
        'Alabaster': 'hsl(231, 100%, 99%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
    screens:{
      'sm':'247px',
      'lg':'630px'
    },
    fontFamily:{
      body:['"Ubuntu"']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/bg-sidebar-desktop.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

