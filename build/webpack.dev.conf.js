var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

baseWebpackConfig.entry.demo = './play/app.js'

module.exports = merge(baseWebpackConfig, {
  devServer: {
    historyApiFallback: {
      index: './play/index.html'
    },
    noInfo: true
  },
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
  ]
})