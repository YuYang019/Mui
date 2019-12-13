import Vue from 'vue'
import { bemPrefix } from '../utils/create'

export default Vue.extend({
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },

  computed: {
    medium () {
      return Boolean(
        !this.large &&
        !this.small &&
        !this.xLarge &&
        !this.xSmall
      )
    },

    sizeableClasses () {
      return {
        [bemPrefix + '-size--x-small']: this.xSmall,
        [bemPrefix + '-size--small']: this.small,
        [bemPrefix + '-size--default']: this.medium,
        [bemPrefix + '-size--large']: this.large,
        [bemPrefix + '-size--x-large']: this.xLarge
      }
    }
  }
})
