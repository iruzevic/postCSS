module.exports = {
  plugins: [
    require('precss'),

    // require('autoprefixer')({
    //   browserslist: [
    //     "> 1%",
    //     "last 5 versions"
    //   ]
    // }),

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

    require('postcss-cssnext')({
      browserslist: [
        "> 1%",
        "last 5 versions"
      ]
    }),

    require('cssnano')
  ]
}
