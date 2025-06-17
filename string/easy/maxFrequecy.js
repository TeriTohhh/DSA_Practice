// Find character with maximum frequency
// 🔹 Input: "apple" → Output: "p"

const str='apple'
function findMaxFreq(str) {
  const ans = {};
  for (let key of str) {
    if (!ans[key]) {
      ans[key] = 1;
    } else {
      ans[key]++;
    }
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char in ans) {
    if (ans[char] > maxCount) {
      maxCount = ans[char];
      maxChar = char;
    }
  }

  return { character: maxChar, count: maxCount };
}

console.log(findMaxFreq(str))