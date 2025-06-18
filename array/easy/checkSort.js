// Check if array is sorted
// 🔹 Input: [1,2,3] → Output: true

function checkSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1])return false
    }
    return true
}

console.log(checkSorted([1,2,3,1]))