import './style/index.scss'

import { createNamespace } from '../../utils/create'

const [createComponent, bem] = createNamespace('Icon')

export default createComponent({

  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {
    classes () {
      const { name } = this
      return [
        bem(),
        name ? `iconfont icon-${name}` : ''
      ]
    }
  },

  render () {
    const { classes } = this
    return (
      <i class={classes}></i>
    )
  }
})
