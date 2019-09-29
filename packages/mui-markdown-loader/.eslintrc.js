module.exports = {
  // 指定当前就是根目录，eslint不再从父级目录里寻找配置
  root: true,
  // 使用 jest plugin 的预定义全局变量
  // 这样在 test 文件里就不会报错了
  env: {
    node: true,
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  extends: [
    'standard',
    'plugin:jest/recommended',
  ],
}
