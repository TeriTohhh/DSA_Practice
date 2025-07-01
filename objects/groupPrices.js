// Output:{
//   Apple: [248, 255],
//   Google: [198, 205],
//   Amazon: [180, 178]
// }

const companies = [
  { company: "Apple", date: "21-03-24", price: 248 },
  { company: "Apple", date: "22-03-24", price: 255 },
  { company: "Google", date: "21-03-24", price: 198 },
  { company: "Google", date: "22-03-24", price: 205 },
  { company: "Amazon", date: "21-03-24", price: 180 },
  { company: "Amazon", date: "22-03-24", price: 178 },
];

function groupCompany(arr) {
  const result = {};
  arr.forEach((ele) => {
    if (!result[ele.company]) result[ele.company] = [];

    result[ele.company].push(ele.price);
  });
  return result;
}

console.log(groupCompany(companies));
