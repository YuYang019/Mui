module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@vue/babel-preset-jsx',
  ],
  // 针对不同的 NODE_ENV 配置不同的 preset
  env: {
    // NODE_ENV = test
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' }
          }
        ],
        '@vue/babel-preset-jsx',
      ]
    }
  }
}
