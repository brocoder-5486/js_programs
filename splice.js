function mySplice(array, index, count) {
  if (typeof count == "undefined") count = 1;

  let removed = [];

  while (count--) {
    let indexToRemove = index + count;
    removed.push(array[indexToRemove]);
    array[indexToRemove] = array.pop();
  }
  return removed;
}

const arr = ["jan", "feb", "mar", "apr"];
console.log(mySplice(arr, 1, 0));
