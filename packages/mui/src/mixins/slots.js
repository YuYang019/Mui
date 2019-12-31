export default {
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
}
