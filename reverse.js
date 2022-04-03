let reverseNum = 0;
let num = parseInt(process.argv[2]);
let temp = num;
let lastDigit;

while (temp != 0) {
  lastDigit = temp % 10;
  reverseNum = reverseNum * 10 + lastDigit;
  temp = parseInt(temp / 10);
}

console.log(`Reversed number of ${num} is ${reverseNum}`);
