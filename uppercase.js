const toUpperCase = function (str) {
  let rev = "";
  for (i = 0; i < str.length; i++) {
    rev += String.fromCharCode(str.charCodeAt(i) & 223);
  }
  return rev;
};

console.log(toUpperCase(process.argv[2]));
