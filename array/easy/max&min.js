// Find max/min in array
// 🔹 Input: [1, 2, 3] → Max: 3, Min: 1

function findMaxMin(arr){
    return {max:Math.max(...arr),min:Math.min(...arr)}
}
console.log(findMaxMin([7,5,3,1,3,7,9,32,2]))