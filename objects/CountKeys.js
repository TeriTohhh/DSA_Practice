// Count the number of keys in an object.

// Example: countKeys({a:1, b:2}) // 2

function countKeys(obj){
    return Object.keys(obj).length
}


console.log(countKeys({a:1, b:2}))