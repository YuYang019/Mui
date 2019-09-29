const compile = require('../src/compile.js')
const { getFragment } = require('../utils')

describe('compile', () => {
  it('should work', () => {
    const code = getFragment('demo.vue')
    const compiled = compile(code)
    expect(compiled).not.toBe(undefined)
    expect(compiled).toMatchSnapshot()
  })
})
