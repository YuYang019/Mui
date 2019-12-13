import Button from './components/Button'
import Input from './components/Input'
import Icon from './components/Icon'

console.warn(
  'You are using a whole package of mui, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
)

const components = [
  // Button,
  Input,
  Icon
]

const install = (Vue, options = {}) => {
  Vue.prototype.$MUI = {
    size: options.size || ''
  }

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
  Button,
  Input,
  Icon
}
