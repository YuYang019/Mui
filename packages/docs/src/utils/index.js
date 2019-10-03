export const firstUpperCase = str => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
