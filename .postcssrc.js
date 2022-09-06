const pxToRem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    pxToRem({
      // rootValue: 37.5,
      rootValue: ({ file }) => (/van/.test(file) ? 37.5 : 75),
      propList: ['*']
    })
  ]
}
