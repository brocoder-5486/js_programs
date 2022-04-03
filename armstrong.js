const num = parseInt(process.argv[2]);
let sum = 0;

let temp = num;
while (temp > 0) {
  let remainder = temp % 10;

  sum += remainder * remainder * remainder;

  temp = parseInt(temp / 10);
}

if (sum == num) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}

//armstrong numbers
0, 1, 153, 370, 371, 407, 134, 8208, 9474, 54748;
