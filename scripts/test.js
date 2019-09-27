const spawn = require('cross-spawn')
const target = process.argv[2]
console.log(target)

if (!target) {
  spawn('yarn', ['lerna', 'run', 'test', '--stream'], { stdio: 'inherit' })
} else {
  spawn('yarn', ['lerna', 'run', 'test', '--scope', 'mui', '--stream'], { stdio: 'inherit' })
}
