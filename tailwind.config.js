module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F0F4F8',
      green: '#194A50',
      background: '#102A43',
      subBackground: '#334E68',
      orange: '#D8A28C'
    },
    boxShadow: {
      card: '0.24em 0.24em 0 0 #D8A28C',
      button: '0.24em 0.24em 0 0 #102A43'
    }
  }
}
