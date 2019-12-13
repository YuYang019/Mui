import Vue from 'vue'

export default Vue.extend({
  methods: {
    slots (name = 'default', props) {
      const { $slots, $scopedSlots } = this
      const scopedSlot = $scopedSlots[name]

      if (scopedSlot) {
        return scopedSlot(props)
      }

      return $slots[name]
    }
  }
})
