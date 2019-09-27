const spawn = require('cross-spawn')

const target = process.argv[2]
console.log(target)

spawn('yarn', ['lerna', 'run', 'serve', '--scope', 'docs', '--stream'], { stdio: 'inherit' })
