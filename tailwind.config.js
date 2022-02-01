module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pinkky":"#FDE9FF",
        "pp":"#250039",
        "btnpinkky":"#E5627A",
        'ljusLila': 'rgba(172, 53, 214, 0.1)',
        'lila': '#AC35D6',
        'mörkLila': '#541A69',
        'ljusGrön': '#F3F8EA',
        'grön': '#89B52B',
        'mörkGrön': '#58741B'
      }
    },
  },
  plugins: [

    require("autoprefixer")
  ],
}
