const spawn = require('cross-spawn')

const target = process.argv[2]
console.log(target)

const docs = '@akihi/mui-docs'

spawn('yarn', ['lerna', 'run', 'serve', '--scope', docs, '--stream'], { stdio: 'inherit' })
