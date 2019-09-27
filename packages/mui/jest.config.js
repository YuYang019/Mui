module.exports = {
  // 告诉 jest 要处理什么文件
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  // 告诉 jest 如何处理不同的文件
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 不处理 node_modules 文件夹
  transformIgnorePatterns: ['/node_modules/'],
  // 处理 webpack 别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // vue文件快照序列化工具
  snapshotSerializers: ['jest-serializer-vue'],
  // 设置被测试文件的pattern
  testMatch: [
    '**/__tests__/*.spec.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  // 测试覆盖率
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
    '!**/node_modules/**'
  ]
}
