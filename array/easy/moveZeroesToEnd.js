// Move zeros to end
// 🔹 Input: [0,1,0,3,12] → Output: [1,3,12,0,0]

const arr = [0, 1, 0, 3, 12];
function moveZeroes(arr) {
  let insertPosition=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[insertPosition++]=arr[i]
    }
  }
  while(insertPosition<arr.length){
    arr[insertPosition++]=0
  }
//   console.log(arr)
}
console.log("array before", arr);
moveZeroes(arr);
console.log("array after", arr);
