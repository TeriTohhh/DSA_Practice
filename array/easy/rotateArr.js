// Rotate array by k
// 🔹 Input: [1,2,3,4,5], k=2 → Output: [4,5,1,2,3]

const arr = [1, 2, 3, 4, 5];
let k = 2;

function rotateArr(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
}
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log('before Reversing Arr',arr)
rotateArr(arr,k)
console.log('after Reversing Arr',arr)
