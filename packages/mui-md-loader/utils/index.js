const fs = require('fs')
const path = require('path')

exports.getFragment = (name) => {
  const codePath = path.resolve(__dirname, `../test/fragments/${name}`)
  return fs.readFileSync(codePath, { encoding: 'utf-8' })
}
