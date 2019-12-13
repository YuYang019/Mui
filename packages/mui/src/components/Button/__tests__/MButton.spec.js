import { mount } from '@vue/test-utils'
import Button from '../index.js'

describe('Button', () => {
  it('has deafult size when no props ', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes('m-button')).toBe(true)
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

    expect(wrapper.classes('m-button')).toBe(true)
    expect(wrapper.classes('m-size--x-small')).toBe(true)
    expect(wrapper.classes('m-size--small')).toBe(true)
    expect(wrapper.classes('m-size--large')).toBe(true)
    expect(wrapper.classes('m-size--x-large')).toBe(true)
    expect(wrapper.classes('m-size--default')).toBe(false)
  })
})
