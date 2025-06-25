// Access deeply nested properties in an object safely.

// Example: get(obj, 'a.b.c') // 42

const obj = {
  a: {
    b: {
      c: 42,
      d: null,
    },
    e: [1, 2, { f: 'hello' }],
  },
  g: 'end',
};



function get(obj, path, defaultValue = undefined) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
}

console.log(get(obj, 'a.b.c'));       // 42
console.log(get(obj, 'a.e.2.f'));     // 'hello'
console.log(get(obj, 'a.x.y', 'N/A'));// 'N/A'
console.log(get(obj, 'g'));           // 'end'
console.log(get(obj, 'a.b.d'));       // null
