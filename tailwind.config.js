module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'source-code': ["Source Code Pro", 'monospace'],
      'qs': ["Quicksand", 'sans-serif'],
      variants: {
        width: ["responsive", "hover", "focus"],
        height: ["responsive", "hover", "focus"]
   },
   
    },
    
  },
  plugins: [],
}
