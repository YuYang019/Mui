export function firstUpperCase (str) {
  return str.toLowerCase().replace(/\b[a-z]/g, function (s) { return s.toUpperCase() })
}
