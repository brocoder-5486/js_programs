function checkPalindrome(str) {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return `${str} is not a palindrome`;
    }
  }
  return `${str} is a palindrome`;
}

const str = process.argv[2];

console.log(checkPalindrome(str));
