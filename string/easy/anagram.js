// Check Anagram
// ➤ Input: "listen", "silent" → true

const originalStr = "keep";
const mixedStr = "peek";

// function checkAnagram(original,changed){
//     if(original.length!==changed.length) return 'Not Anagram'
//     const originalArr=original.split('')
//     let flag=true;
//     for(let i=0;i<originalArr.length;i++){
//         if(!original.includes(changed[i])){
//             flag=false
//         }
//     }
//     if(flag)return 'Anagram'
//     return 'Not Anagram'
// }

function checkAnagram(original, changed) {
  if (original.length !== changed.length) return "Not Anagram";
  const charCount = {};
  // Count characters in original string
  for (let char of original) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Subtract counts using changed string
  for (let char of changed) {
    if (!charCount[char]) return "Not Anagram";
    charCount[char]--;
  }
  return "Anagram";
}

console.log(checkAnagram(originalStr, mixedStr));
