// Count frequency of elements
// 🔹 Input: [1,2,2,3] → Output: {1:1, 2:2, 3:1}

function findFreq(arr){
    const obj={}
    for(let key of arr){
        if(!obj[key])obj[key]=1
        else obj[key]++
    }
    return obj
}
console.log(findFreq([1,2,2,3]))