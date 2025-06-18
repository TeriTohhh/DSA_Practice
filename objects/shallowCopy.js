/**
 * Creates a shallow copy of the given object.
 *
 * @param {Object} obj - The object to clone.
 * @returns {Object} A new object with the same top-level properties as the input object.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const copy = shallowCopy(original);

 */

function shallowCopy(obj){
    const res={...obj}
    return res
}
const original = { a: 1, b: { c: 2 } };
const copy = shallowCopy(original);

console.log(copy); // { a: 1, b: { c: 2 } }
console.log(copy === original); // false (different objects)
console.log(copy.b === original.b); // true (nested object is shared)
