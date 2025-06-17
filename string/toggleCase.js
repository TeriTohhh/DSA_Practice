// Toggle case of each character
// 🔹 Input: "AbC" → Output: "aBc"

function toggleWord(str){
    return str.split('').map(ele=>{
        if(ele===ele.toLowerCase()){
        return ele.toUpperCase()
        }
       return ele.toLowerCase()
    }).join('')
}

console.log(toggleWord('AbC'))