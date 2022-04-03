const arr = [
  { name: "Tanveer", subject: "Math", marks: 33 },
  { name: "Teja", subject: "Physics", marks: 100 },
  { name: "Charith", subject: "Chemistry", marks: 99 },
  { name: "Tanveer", subject: "Physics", marks: 34 },
  { name: "Teja", subject: "Chemistry", marks: 45 },
];

// const arr = [{name:'sai kiran',subject:'Math',marks:50},
// {name:'roop sai',subject:'Math',marks:100},
// {name:'saikiran',subject:'Physics'}]

//unique names
let names = arr.map((obj) => obj.name);
const uniqueNames = names.filter((c, index) => {
  return names.indexOf(c) === index;
});
console.log(uniqueNames);

//average marks
let marks = arr.map((obj) => obj.marks);
const average = (marks) => marks.reduce((a, b) => a + b) / marks.length;
console.log(average(marks));

// marks > 50
const num = 50;
const marks_gt_50 = (marks, num) => marks.filter((n) => n > num);
console.log(marks_gt_50(marks, num));

// average of physics marks
let phy_arr = [];
const process = require("process");
arr.forEach((obj) => {
  if (obj.subject === process.argv[2]) {
    phy_arr.push(obj.marks);
  }
});
let phy_avg = (phy_arr) => phy_arr.reduce((a, b) => a + b) / phy_arr.length;
console.log(phy_avg(phy_arr));
