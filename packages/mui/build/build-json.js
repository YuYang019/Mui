const path = require('path')
const fs = require('fs')

const prefix = 'M'
const entry = path.resolve(__dirname, '../src/components')
const to = path.resolve(process.cwd(), 'components.json')
const result = {}

function isDirectory (path) {
  const stats = fs.statSync(path)
  return stats.isDirectory()
}

const dirs = fs.readdirSync(entry)
dirs.forEach((dir) => {
  if (dir.startsWith(prefix)) {
    const dirPath = path.resolve(entry, dir)
    if (isDirectory(dirPath)) {
      console.log(dir)
      const componentPath = path.resolve(dirPath, 'index.js')
      const relativePath = './' + path.relative(process.cwd(), componentPath)
      result[dir] = relativePath
    }
  }
})

fs.writeFileSync(to, JSON.stringify(result, null, '\t'))
