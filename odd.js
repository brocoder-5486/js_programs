const str = process.argv[2];
let evenStr = "";
let oddStr = "";

function oddAndEven(str) {
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0 ? (evenStr += str[i]) : (oddStr += str[i]);
  }
  return oddStr;
}

console.log(oddAndEven(str));
