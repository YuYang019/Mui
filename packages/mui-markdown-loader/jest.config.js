module.exports = {
  // 告诉 jest 要处理什么文件
  moduleFileExtensions: ['js'],
  // 不处理 node_modules 文件夹
  transformIgnorePatterns: ['/node_modules/'],
  // 设置被测试文件的pattern
  testMatch: [
    '**/test/*.spec.js'
  ],
  testURL: 'http://localhost/',
  // 测试覆盖率
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.js',
    '!**/node_modules/**'
  ]
}
