let str='hello India'
//for single string
function reverseString(str){
    return str.split('').reverse().join('');
}
// console.log(reverseString(str))
let newStr='The sky is blue';
function reverseStr(str){
    let splitStr=str.split(' ')
    let i=0
    let j=splitStr.length-1
    while(i<=j){
        let temp=splitStr[i]
        splitStr[i]=splitStr[j]
        splitStr[j]=temp;
        i++;
        j--;
    }
    return splitStr.join(' ')
}

console.log(reverseStr(newStr))