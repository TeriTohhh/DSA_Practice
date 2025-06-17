// Count Vowels & Consonants
// ➤ Input: "abcde" → Vowels: 2, Consonants: 3

const str='abcde'
function countVowels(str){
    const vowels='aeiou'
    let vowelsCount=0
    let consonantsCount=0
    const splitArr=str.split('')
    // console.log(splitArr)
    for(let i=0;i<splitArr.length;i++){
        if(vowels.includes(splitArr[i])){
            vowelsCount++;
        }
        else consonantsCount++;
    }
    return {vowellCount:vowelsCount,consonantCount:consonantsCount}
}
console.log(countVowels(str))
