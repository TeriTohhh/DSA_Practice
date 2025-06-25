// Check if an object is empty.

// Example: isEmpty({}) // true

function checkObjectIsEmpty(obj){
    if(typeof  obj===null) return 'Not Object'

    if(Object.entries(obj).length<=0) return 'Empty Obj'
    return 'Not Empty Obj'
    
}

console.log(checkObjectIsEmpty({a:2}))