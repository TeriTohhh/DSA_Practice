// Check if a string is a pangram
// 🔹 Input: "The quick brown fox jumps over the lazy dog" → Output: true

const str = "The quick brown fox jumps over the lazy dog";

function checkPanagram(str) {
    let checkStr = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase();

    for (let letter of checkStr) {
        if (!str.includes(letter)) {
            return false; // Missing a letter
        }
    }
    return true; // All letters found
}

function checkPanagram2(str){
    const set= new Set()
    for(let char of str.toLowerCase()){
        set.add(char)
    }
    set.delete(' ')   
    return set.size===26
}
console.log(checkPanagram2(str))

// console.log(checkPanagram(str))
