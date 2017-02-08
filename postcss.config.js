module.exports = {
  plugins: [
    require('precss'),

    require('autoprefixer'),

    require('postcss-font-magician')({
      protocol: 'https:',
      variants: {
          'Roboto Condensed': {
              '300': [],
              '400': [],
              '700': []
          }
      },
      foundries: ['google']
    }),

    require('css-mqpacker'),

    require('postcss-cssnext'),

    require('cssnano')
  ]
}
