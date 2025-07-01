// Problem Statement on Array.reduce, Object entries, keys, values
// Check input and expected output & solve this
const companies = [
  { company: "Apple", date: "21-03-24", price: 248 },
  { company: "Apple", date: "22-03-24", price: 255 },
  { company: "Google", date: "21-03-24", price: 198 },
  { company: "Google", date: "22-03-24", price: 205 },
  { company: "Amazon", date: "21-03-24", price: 180 },
  { company: "Amazon", date: "22-03-24", price: 178 },
];

/*
Expected Output
[
  { company: "Apple", price: 255 },
  { company: "Google", price: 205 },
  { company: "Amazon", price: 180 },
]
*/

function sortMaxPrice(arr) {
  const result = {};
  arr.forEach((ele) => {
    if (!result[ele.company] || ele.price > result[ele.company].price) {
      result[ele.company] = ele;
    }
  });
  return Object.values(result)
}

console.log(sortMaxPrice(companies));