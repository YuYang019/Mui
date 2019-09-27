const spawn = require('cross-spawn')

const target = process.argv[2]
console.log(target)

if (!target) {
  console.error('请输入构建目标')
  console.error('yarn build [target]')
  return
}

if (target) {
  spawn('yarn', ['lerna', 'run', 'build', '--scope', target, '--stream'], {
    stdio: 'inherit'
  })
}
