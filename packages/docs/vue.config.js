const resolve = require('path').resolve

module.exports = {
  chainWebpack: config => {
    config
      .resolve
      .alias
      .set('@docs', resolve('src'))
      .set('@temp', resolve('.temp'))

    // md
    config
      .module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader(resolve('md-loader'))
      .end()
  }
}
