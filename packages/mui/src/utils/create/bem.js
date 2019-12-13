/**
 * bem() button
 * bem('text') button__text
 * bem(['disabled']) button--disabled
 * bem('text', ['disabled']) button__text--disabled
 */
const ELEMENT = '__'
const MODIFIER = '--'

function isModifier (modifier) {
  return Array.isArray(modifier)
}

function join (name, el, symbol) {
  return el ? name + symbol + el : name
}

function addModifier (el, modifier) {
  if (isModifier(modifier)) {
    let ret = ''
    modifier.forEach(mod => {
      ret = join(el, mod, MODIFIER)
      el = ret
    })
    return ret
  }
  return el
}

export default function createBEM (name) {
  return (el, modifier) => {
    // 传入的第一个参数是 modifier
    if (isModifier(el)) {
      modifier = el
      el = ''
    }
    el = join(name, el, ELEMENT)

    return modifier ? addModifier(el, modifier) : el
  }
}
