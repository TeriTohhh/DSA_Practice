// Find first non-repeating character
// 🔹 Input: "aabbcdd" → Output: "c"
let str = "aabbcdd";

function firstNonRepeating(str) {
  let freq = {};
  let ans = "";
  for (let key of str) {
    if (!freq[key]) freq[key] = 1;
     else freq[key]++;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }
  return null;
//   return Object.keys(freq).find((key) => freq[key] === 1) || null;
}
console.log(firstNonRepeating(str));
