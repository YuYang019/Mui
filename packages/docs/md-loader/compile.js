const cheerio = require('cheerio')

const fetch = (str, tag, scoped) => {
  const $ = cheerio.load(str, {
    decodeEntities: false,
    xmlMode: true
  })
  if (!tag) {
    return str
  }
  if (tag === 'style') {
    return scoped
      ? $(`${tag}[scoped]`).html()
      : $(`${tag}`)
        .not(`${tag}[scoped]`)
        .html()
  }
  return $(tag).html()
}

module.exports = (content) => {
  const script = fetch(content, 'script')

  if (!script) {
    content += `\n<script> export default {} </script>\n`
  }

  // console.log(style, scopedStyle)

  // const options = {
  //   source: template,
  //   compiler
  // }

  // const compiled = compileTemplate(options)
  // if (compiled.tips && compiled.tips.length) {
  //   compiled.tips.forEach(tip => {
  //     console.warn(tip)
  //   })
  // }
  // if (compiled.errors && compiled.errors.length) {
  //   console.error(
  //     `\n  Error compiling template:\n${pad(compiled.source)}\n` +
  //       compiled.errors.map(e => `  - ${e}`).join('\n') +
  //       '\n'
  //   )
  // }

  // script = script ? script.replace(/export\s+default/, 'const demoComponent =') : 'const demoComponent = {}'
  // const result = `(function() {
  //   ${compiled.code}
  //   ${script}
  //   return {
  //     render,
  //     staticRenderFns,
  //     ...demoComponent
  //   }
  // })()`

  return content
}
