const loader = require('../src/index.js')
const { getFragment } = require('../utils')

describe('loader', () => {
  it('should work', () => {
    const code = getFragment('doc.md')
    const compiled = loader(code)
    expect(compiled).not.toBe(undefined)
    expect(compiled).toMatchSnapshot()
  })
})
