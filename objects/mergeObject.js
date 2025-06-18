// Merge two objects and give priority to the second object.

// Example: mergeObjects({a:1, b:2}, {b:3, c:4}) // {a:1, b:3, c:4}

const obj1={a:1, b:2}
const obj2={b:3, c:4}
function mergeObject(obj1, obj2){
return {...obj1,...obj2}
}
console.log(mergeObject(obj1,obj2))

