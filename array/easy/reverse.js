// Reverse an array
// 🔹 Input: [1, 2, 3] → Output: [3, 2, 1]

function reverseArray(arr) {
  return arr.reverse();
}

function reverseArray2(arr) {
  let i = 0;
  let j = arr.length-1;
  while(i<=j){
    let temp=arr[i]
    arr[i]=arr[j];
    arr[j]=temp
    i++;
    j--;
  }
}
let arr=[1,2,3,4,5]
console.log('beforereversing',arr)
reverseArray2(arr)
console.log('after reversing',arr)
// console.log(reverseArray([1,2,3,4,5]))
