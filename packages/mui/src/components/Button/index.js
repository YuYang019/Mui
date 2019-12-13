import './style/index.scss'

import Sizeables from '../../mixins/sizeable'
import { createNamespace } from '../../utils/create'

import Icon from '../Icon'

const [createComponent, bem] = createNamespace('Button')

export default createComponent({

  mixins: [Sizeables],

  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {
    classes () {
      const { type, disabled, loading, sizeableClasses } = this
      return [
        bem(),
        type ? bem([type]) : '',
        disabled ? bem(['disabled']) : '',
        loading ? bem(['loading']) : '',
        sizeableClasses
      ]
    }
  },

  methods: {
    genIcon () {
      const { loading, icon } = this

      if (loading) {
        return <Icon name="refresh" />
      }

      if (icon) {
        return <Icon name={icon} />
      }

      return null
    }
  },

  render () {
    const { classes, $listeners, disabled } = this
    return (
      <button
        class={classes}
        on={$listeners}
        disabled={disabled}
      >
        {this.genIcon()}
        <span>
          {this.slots() || '你好，世界'}
        </span>
      </button>
    )
  }
})
