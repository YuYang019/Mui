import { mount } from '@vue/test-utils'
import Button from '../main.vue'

describe('MButton.vue', () => {
  it('has deafult size when no props ', () => {
    const wrapper = mount(Button)
    console.log(wrapper.classes())
    expect(wrapper.classes('m-btn')).toBe(true)
    expect(wrapper.classes('m-size--default')).toBe(true)
  })

  it('has x-small, small, large, x-large size when has props', () => {
    const wrapper = mount(Button, {
      propsData: {
        'x-small': true,
        small: true,
        large: true,
        'x-large': true
      }
    })
    expect(wrapper.classes('m-btn')).toBe(true)
    expect(wrapper.classes('m-size--x-small')).toBe(true)
    expect(wrapper.classes('m-size--small')).toBe(true)
    expect(wrapper.classes('m-size--large')).toBe(true)
    expect(wrapper.classes('m-size--x-large')).toBe(true)
    expect(wrapper.classes('m-size--default')).toBe(false)
  })
})
