const process = require("process");
console.log(process.argv);
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const nTerms = parseInt(process.argv[2]);

if (nTerms <= 0) {
  console.log("enter a positive integer");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
