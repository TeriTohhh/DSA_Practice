// Remove duplicates
// 🔹 Input: [1, 1, 2] → Output: [1, 2]

function removeDuplicates(arr) {
  const seen = {};
  const resArr = [];

  for (let key of arr) {
    if (!seen[key]) {
      seen[key] = true;
      resArr.push(key);
    }
  }
  return resArr;
}

console.log(removeDuplicates([1, 2, 1, 3, 5, 6, 1, 2]));
