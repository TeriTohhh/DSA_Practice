// Input: Same array // Output:[
//   { company: "Apple", total: 503 },
//   { company: "Google", total: 403 },
//   { company: "Amazon", total: 358 },
// ]

const companies = [
  { company: "Apple", date: "21-03-24", price: 248 },
  { company: "Apple", date: "22-03-24", price: 255 },
  { company: "Google", date: "21-03-24", price: 198 },
  { company: "Google", date: "22-03-24", price: 205 },
  { company: "Amazon", date: "21-03-24", price: 180 },
  { company: "Amazon", date: "22-03-24", price: 178 },
];

function totalPrice(arr){
    const result={}
    arr.forEach((ele) => {
    if (!result[ele.company]) {
      result[ele.company] = 0;
    }
    result[ele.company] += ele.price;
  });
    return Object.keys(result).map((company)=>({
        company,
        total:result[company]
    }))
}

console.log(totalPrice(companies))