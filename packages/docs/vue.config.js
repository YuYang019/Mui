module.exports = {
  chainWebpack: config => {
    // 不编译本地的mui产出
    config.module.rule('js').exclude.add(/mui/)
    // 不对本地mui进行eslint
    config.module.rule('eslint').exclude.add(/mui/)

    // md
    config
      .module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@akihi/mui-md-loader')
      .loader('@akihi/mui-md-loader')
      .end()
  }
}
