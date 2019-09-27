import MButton from './components/MButton'
import MInput from './components/MInput'

console.warn(
  'You are using a whole package of mui, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
)

const components = [
  MButton,
  MInput
]

const install = (Vue) => {
  components.forEach(component => {
    console.log(component.name, component)
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  MButton,
  MInput
}
