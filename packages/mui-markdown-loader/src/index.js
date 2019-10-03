const Md = require('markdown-it')
const prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
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

let id = 0
let componentsString = ''

function plugin (md) {
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
    const token = tokens[idx]

    if (/^\s*demo\s*$/.test(token.info)) {
      const source = token.content
      let html = prism.highlight(source, prism.languages.markup, 'markup')
      html = `<pre v-pre class="language-markup"><code>${html}</code></pre>`

      const demoName = `mui-demo-${id++}`
      const demoComponent = compile(source)
      componentsString += `${JSON.stringify(demoName)}: ${demoComponent},`
      // demo
      return `
        <demo>
          <template slot="source"><${demoName} /></template>
          <template slot="html">${html}</template>
        </demo>
      `
    } else {
      console.log()
      return fence(tokens, idx, options, env, renderer)
    }
  }
}

module.exports = (source) => {
  const rendered = md.render(source)

  const result = `
  <template>
    <page>
      ${rendered}
    </page>
  </template>
  <script>
    export default {
      components: {
        ${componentsString}
      }
    }
  </script>
  `
  // reset
  // loader应该是无副作用的，所以需要重置
  id = 0
  componentsString = ''

  return result
}
