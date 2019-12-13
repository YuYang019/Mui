import './style/index.scss'

import Sizeables from '../../mixins/sizeable'
import { createNamespace } from '../../utils/create'

import Icon from '../Icon'

const [createComponent, bem] = createNamespace('Input')

export default createComponent({

  mixins: [Sizeables],

  props: {
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {
    classes () {
      const { disabled, sizeableClasses, prefixIcon, suffixIcon, slots } = this
      const prefixSlots = slots('prefix')
      const suffixSlots = slots('suffix')

      return [
        bem(),
        disabled ? bem(['disabled']) : '',
        (prefixIcon || prefixSlots) ? bem('prefix') : '',
        (suffixIcon || suffixSlots) ? bem('suffix') : '',
        sizeableClasses
      ]
    }
  },

  methods: {
    genPrefix () {
      const { prefixIcon, slots } = this
      const prefixSlots = slots('prefix')

      // slot > prefix-icon
      if (prefixSlots || prefixIcon) {
        return (
          <span class={bem('prefix')}>
            {
              prefixSlots || <Icon name={prefixIcon} />
            }
          </span>
        )
      }

      return null
    },

    genSuffix () {
      const { suffixIcon, slots } = this
      const suffixSlots = slots('suffix')

      if (suffixSlots || suffixIcon) {
        return (
          <span class={bem('suffix')}>
            {
              suffixSlots || <Icon name={suffixIcon} />
            }
          </span>
        )
      }

      return null
    }
  },

  render () {
    const { classes, type, $listeners, disabled, placeholder } = this
    return (
      <div
        class={classes}
      >
        {this.genPrefix()}
        <input
          placeholder={placeholder}
          class={bem('inner')}
          type={type}
          on={$listeners}
          disabled={disabled}
        />
        {this.genSuffix()}
      </div>
    )
  }
})
