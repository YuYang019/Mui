import './style/index.scss'

import Vue from 'vue'
import { createNamespace } from '../../utils/create'
import overlayManager from './manager'

const [createComponent, bem] = createNamespace('Overlay')

let activeNum = 0

export default createComponent({

  props: {
    visible: Boolean,
    modal: {
      type: Boolean,
      default: true
    },
    position: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'rgba(33, 33, 33, 0.46)'
    },
    transitionName: {
      type: String
    }
  },

  data() {
    return {
      zIndex: null,
      overlayNode: null
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

  watch: {
    visible: {
      handler(val) {
        this.updateNode()

        if (!this.modal) return

        if (val) {
          this.createMask()
          activeNum++
          this.lockScroll()
        } else {
          activeNum--
          this.unlockScroll()
        }
      },
      immediate: true
    }
  },

  methods: {
    updateNode() {
      if (!this.overlayNode) {
        const node = overlayManager.createNode({
          onOrderChange: order => { this.zIndex = order }
        })
        this.overlayNode = node
      } else {
        this.overlayNode.toTop()
      }
    },

    lockScroll() {
      document.body.classList.add(bem(['lock']))
    },

    unlockScroll() {
      if (activeNum <= 0) {
        document.body.classList.remove(bem(['lock']))
      }
    },

    createMask() {
      if (!this.mask) {
        const Mask = Vue.extend({
          render: this.genMask
        })
        const mask = new Mask()

        mask.$mount()

        this.$nextTick(() => {
          const parent = this.$el.parentNode
          parent.insertBefore(mask.$el, this.$el)
        })

        this.mask = mask
      }
    },

    genMask() {
      const { visible, color, zIndex } = this

      return (
        <transition name="fade">
          <div
            v-show={visible}
            class={bem('mask')}
            style={{
              backgroundColor: color,
              zIndex: zIndex
            }}
            onClick={e => { this.$emit('click-mask', e) }}
          >
          </div>
        </transition>
      )
    }
  },

  render() {
    const { classes, zIndex, visible, transitionName } = this
    return (
      <transition name={transitionName}>
        <div
          vShow={visible}
          class={classes}
          style={{
            zIndex: zIndex
          }}
        >
          {this.slots()}
        </div>
      </transition>
    )
  }
})
