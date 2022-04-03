const counts = {};
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
arr.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
