const webpack = require('webpack')

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: ['/node_modules/', '/.next/', '/out/'],
      enforce: 'pre',
      options: {
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
      },
    })
    return config
  },
}
