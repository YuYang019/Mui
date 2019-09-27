<template>
  <div :class="classes">
    <input
      :type="type"
      :value="value"
      class="m-input__inner"
    >
  </div>
</template>

<script>
import sizeable from '../../../mixins/sizeable'

export default {
  name: 'MInput',

  mixins: [sizeable],

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    width: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {
    classes () {
      return {
        'm-input': true,
        'm-input__disabled': this.disabled,
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style lang="scss">
  @import './style/index.scss';
</style>
