import SlotsMixin from '../../mixins/slots'

export default function createComponent (name) {
  return (component) => {
    component.name = name
    component.install = (Vue) => {
      Vue.component(component.name, component)
    }

    if (!component.functional) {
      component.mixins = component.mixins || []
      component.mixins.push(SlotsMixin)
    }

    return component
  }
}
