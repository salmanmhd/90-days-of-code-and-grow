// Challenge 1:
function calculateBMI(h, w) {
  return parseFloat((w / (h * h)).toFixed(1));
}

const Mark_BMI = calculateBMI(1.69, 78);
const John_BMI = calculateBMI(1.95, 92);
let ans = ``;
if (Mark_BMI > John_BMI) {
  ans = `Mark's BMI(${Mark_BMI}) is larger than John's(${John_BMI})`;
} else {
  ans = `John's BMI is larger than Mark's BMI`;
}

// console.log(ans);

//  CHALLENGE 3:
const dolphins = [
  [96, 108, 89],
  [97, 112, 101],
  [97, 112, 101],
];

const koalas = [
  [88, 91, 110],
  [109, 95, 123],
  [109, 95, 106],
];

const d1 = average(dolphins[0]);
const k1 = average(koalas[0]);

console.log(d1 > k1 ? 'dolphins are the winner' : 'koalar are the winner');

function average(arr) {
  const sum = arr.reduce((sum, i) => sum + i, 0);
  return sum / arr.length;
}

// function winner(s1, s2) {
//   const averageS1 = average(s1);
//   const averageS2 = average(s2);

// }
