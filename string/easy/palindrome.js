//  Input: "madam" → true
const str='madam'

function checkPalindrome(str){
    let prevStr=str
    return prevStr===str.split('').reverse().join('')
}

console.log(checkPalindrome(str))