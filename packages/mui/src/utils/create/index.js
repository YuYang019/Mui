import createComponent from './component'
import createBEM from './bem'
import { firstUpperCase } from '../format/string'

export const prefix = 'M'
export const bemPrefix = 'm'

export function createNamespace (name) {
  // MButton
  const componentName = prefix + firstUpperCase(name)
  // m-button
  const bemName = bemPrefix + '-' + name.toLowerCase()
  return [createComponent(componentName), createBEM(bemName)]
}
