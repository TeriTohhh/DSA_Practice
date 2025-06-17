// Remove duplicate characters
// 🔹 Input: "banana" → Output: "ban"

const str = "banana";
function removeDuplicates(str) {
  let set = new Set();
  for (let key of str) {
    if (!set.has(key)) {
      set.add(key);
    }
  }
  return [...set].join("");
}
// console.log(removeDuplicates(str))

function removeDuplicates2(str) {
  let freq = {};
  let ans = "";
  for(let key of str){
    if(!freq[key]){
        freq[key]=true
        ans+=key
    }
  }
  return ans
}
console.log(removeDuplicates2(str));
