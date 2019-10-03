// 这个不能删，lerna bootstrap后，node_modules在最外层
// packages/docs如果引入node_modules里的css，会从最外层的node_modules里引
// 然后第三方包根目录没有config，就会往外找，在根目录如果也没有，编译就会报错
// 所以需要根目录创建
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
