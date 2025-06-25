// Invert keys and values of an object.

// Example: {a: 'x', b: 'y'} => {'x': 'a', 'y': 'b'}

const obj={a: 'x', b: 'y'}

function invertKeysValues(obj){
    const result={}
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key;
    });
    return result;
}

console.log(invertKeysValues(obj))