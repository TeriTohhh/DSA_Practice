// Convert string to title case
// 🔹 Input: "hello world" → Output: "Hello World"
const str = "hello world";

function makeCapital(str) {
  return str.split(" ").map(element => element[0].toUpperCase() + element.slice(1)).join(" ");
//   return splitArr.join(" ");
}

console.log(makeCapital(str));
