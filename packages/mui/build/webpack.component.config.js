const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config')
const components = require('../components.json')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    },
    nodeExternals()
  ]
})
