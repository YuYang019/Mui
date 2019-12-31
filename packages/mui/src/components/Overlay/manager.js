class OverlayNode {
  _order = null;

  constructor(options = {}) {
    const { parent, onOrderChange } = options
    this.parent = parent
    this.onOrderChange = onOrderChange
  }

  get order() {
    return this._order
  }

  set order(val) {
    if (this._order !== val) {
      this._order = val

      if (typeof this.onOrderChange === 'function') {
        this.onOrderChange(val)
      }
    }
  }

  toTop() {
    const parent = this.parent
    const index = parent.nodes.indexOf(this)

    parent.nodes.splice(index, 1)
    parent.nodes.push(this)
    parent.reorder()
  }
}

class OverlayManager {
  baseOrder = 100;

  nodes = [];

  createNode(options = {}) {
    const { onOrderChange } = options
    const node = new OverlayNode({
      parent: this
    })

    node.onOrderChange = onOrderChange

    this.append(node)

    return node
  }

  reorder() {
    this.nodes.forEach((node, i) => {
      node.order = this.baseOrder + i
    })
  }

  append(node) {
    this.nodes.push(node)
    this.reorder()
  }
}

const defaultManager = new OverlayManager()

export default defaultManager
