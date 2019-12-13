import { mount } from '@vue/test-utils'
import Icon from '../index.js'

describe('Icon', () => {
  it('has iconfont classes when pass name prop', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: 'search'
      }
    })

    expect(wrapper.classes('m-icon')).toBe(true)
    expect(wrapper.classes('iconfont')).toBe(true)
    expect(wrapper.classes('icon-search')).toBe(true)
  })
})
