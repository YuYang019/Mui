import './style/index.scss'

import { createNamespace } from '../../utils/create'
import Overlay from '../Overlay'
import Button from '../Button'

const [createComponent, bem] = createNamespace('Dialog')

export default createComponent({
  components: {
    [Overlay.name]: Overlay,
    [Button.name]: Button
  },

  model: {
    prop: 'visible',
    event: 'change'
  },

  props: {
    lazy: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'rgba(33, 33, 33, 0.46)'
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    title: String
  },

  data() {
    return {
      renderFirst: this.value
    }
  },

  computed: {
    classes() {
      // const { disabled, sizeableClasses, prefixIcon, suffixIcon, slots } = this
      return [
        bem()
      ]
    }
  },

  mounted() {
    // 初始值为true，或者不是懒加载时，挂载节点
    if (!this.lazy || this.visible) {
      this.mount()
    }
  },

  methods: {
    genDialog() {
      const { visible, classes, slots, onMaskClick } = this
      return (
        <transition>
          <div
            vShow={visible}
            class={classes}
          >
            <div class={bem('mask')} onClick={onMaskClick}></div>
            <div class={bem('container')}>
              {slots()}
            </div>
          </div>
        </transition>
      )
    },

    onMaskClick() {
      this.closeOnClickModal && this.handleClose()
    },

    handleClose(e) {
      console.log('mask click')
      this.$emit('change', false)
    },

    mount() {
      const container = this.appendToBody ? document.body : this.$el.parentNode
      console.log(container)
      container.append(this.$el)
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.shouldRender = true
      }
    },
    shouldRender(val, oldVal) {
      if (val !== oldVal && this.lazy) {
        this.mount()
      }
    }
  },

  render() {
    const { lazy, shouldRender, visible, classes, slots, modal, color, title, handleClose, onMaskClick } = this

    const Dialog = (
      <m-overlay
        visible={visible}
        transition-name='dialog-transition'
        modal={modal}
        color={color}
        onClick-mask={onMaskClick}
      >
        <div
          class={classes}
        >
          <div class={bem('head')}>
            {slots('head') || title}
          </div>
          <div class={bem('body')}>
            {slots()}
          </div>
          <div class={bem('foot')}>
            {slots('foot')}
          </div>
          <div class={bem('close')} onClick={handleClose}>
            x
          </div>
        </div>
      </m-overlay>
    )

    if (!lazy) {
      return Dialog
    }

    return (
      shouldRender ? Dialog : null
    )
  }
})
