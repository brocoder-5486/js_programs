const marksArr = [
  { name: "Tanveer", subject: "Math", marks: 33 },
  { name: "Teja", subject: "Physics", marks: 100 },
  { name: "Charith", subject: "Chemistry", marks: 99 },
  { name: "Tanveer", subject: "Physics", marks: 34 },
  { name: "Teja", subject: "Chemistry", marks: 45 },
];

function names(marksArr, key) {
  return [...new Map(marksArr.map((item) => [item[key], item])).values()];
}

const arr1 = names(marksArr, "name");

console.log(JSON.stringify(arr1));
