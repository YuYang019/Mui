module.exports = {
    // 指定当前就是根目录，eslint不再从父级目录里寻找配置
    root: true,
    // 使用 jest plugin 的预定义全局变量
    // 这样在 test 文件里就不会报错了
    env: {
      node: true,
      browser: true,
      es6: true,
      'jest/globals': true
    },
    plugins: [
      'jest'
    ],
    extends: [
      'standard',
      'plugin:jest/recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    // eslint不支持一些实验特性或者一些非标准语法 flow/ts-type
    // 所以需要使用这个 parser 在 lint 的时候转换一下代码
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: 'babel-eslint'
    },
  }
