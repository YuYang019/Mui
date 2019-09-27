module.exports = {
  chainWebpack: config => {
    // 不编译本地的mui产出
    config.module.rule('js').exclude.add(/mui/)
  }
}
