module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
        paleblue:"#e0e8ff",
        verypaleblue:"#f5f7ff",
        desaturatedblue:"#7280a7",
        brightblue:"#3829e0",
        darkblue:"#1f2f56", 
        white:"#ffffff",
        black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        "redhat":['Red Hat Display','sans-serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
