const Md = require('markdown-it')
const prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const compile = require('./compile')

function wrap (code, lang) {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

const md = new Md({
  highlight (str, lang) {
    lang = lang.toLowerCase()
    if (lang && !prism.languages[lang]) {
      try {
        loadLanguages([lang])
      } catch (e) {
        lang = 'markup'
      }
    } else {
      lang = 'markup'
    }
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, lang)
  }
})

md.use(plugin)

let componentsString = ''
let importString = ''
let hashSet = new Set()

function plugin (md) {
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
    const token = tokens[idx]

    if (/^\s*demo\s*$/.test(token.info)) {
      let source = token.content

      if (!source) {
        return ''
      }

      const hash = crypto.createHash('md5')
      const md5 = hash.update(source).digest('hex')

      if (hashSet.has(md5)) {
        return ''
      } else {
        hashSet.add(md5)
      }

      let html = prism.highlight(source, prism.languages.markup, 'markup')
      html = `<pre v-pre class="language-markup"><code>${html}</code></pre>`

      let demoName = `mui-demo-${md5}`
      let importName = `MuiDemo${md5}`

      // const demoComponent = compile(source)
      source = compile(source)

      const temp = path.resolve(__dirname, '../.temp')
      if (!fs.existsSync(temp)) {
        fs.mkdirSync(temp)
      }

      const demoPath = temp + `/${demoName}.vue`
      if (!fs.existsSync(demoPath)) {
        fs.writeFileSync(demoPath, source)
      }

      importString += `import ${importName} from '@temp/${demoName}'; \n`
      componentsString += `${JSON.stringify(demoName)}: ${importName},`

      // demo
      return `
        <demo>
          <template slot="source"><${demoName} /></template>
          <template slot="html">${html}</template>
        </demo>
      `
    } else {
      return fence(tokens, idx, options, env, renderer)
    }
  }
}

module.exports = function (source) {
  const rendered = md.render(source)

  const result = `
  <template>
    <page>
      ${rendered}
    </page>
  </template>
  <script>
    ${importString}
    export default {
      components: {
        ${componentsString}
      }
    }
  </script>
  `

  // loader应该是无副作用的，所以需要重置
  componentsString = ''
  importString = ''
  hashSet = new Set()

  return result
}
