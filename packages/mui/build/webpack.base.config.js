// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const cssLoaders = [
  // MiniCssExtractPlugin.loader,
  { loader: 'style-loader' },
  { loader: 'css-loader' },
  { loader: 'postcss-loader' }
]

const scssLoaders = [
  ...cssLoaders,
  {
    loader: 'sass-loader'
  }
]

const plugins = [
  new ProgressBarPlugin(),
  new VueLoaderPlugin(),
  new FriendlyErrorsWebpackPlugin({
    clearConsole: true
  })
]

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.scss$/,
        use: scssLoaders
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins,
  // optimization: {
  //   minimize: false
  // },
  performance: {
    hints: false
  },
  stats: 'none'
}
