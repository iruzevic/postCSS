module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')({
      browserslist: [
        "> 5%",
        "last 2 versions"
      ]
    }),
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
    // require('postcss-assets')({
    //   loadPaths: ['images/'],
    //   basePath: '../'
    // }),
    // require('stylelint'),
    // require('cssnano')
  ]
}
