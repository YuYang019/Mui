import Button from './src/Main.vue'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
