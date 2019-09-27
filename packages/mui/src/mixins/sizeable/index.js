export default {
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
        'm-size--x-small': this.xSmall,
        'm-size--small': this.small,
        'm-size--default': this.medium,
        'm-size--large': this.large,
        'm-size--x-large': this.xLarge
      }
    }
  }
}
