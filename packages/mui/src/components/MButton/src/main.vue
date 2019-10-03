<template>
  <button
    :class="classes"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
import sizeables from '../../../mixins/sizeable'

export default {
  name: 'MButton',

  mixins: [sizeables],

  data () {
    return {}
  },

  computed: {
    classes () {
      return {
        'm-btn': true,
        ...this.sizeableClasses
      }
    }
  }
}
</script>

<style lang="scss">
  @import './style/index.scss';
</style>
