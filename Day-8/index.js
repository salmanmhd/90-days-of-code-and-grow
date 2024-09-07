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

// checkWinner(dolphins[0], koalas[0]);
// checkWinner(dolphins[1], koalas[1]);
// checkWinner(dolphins[2], koalas[2]);

function checkWinner(dScore, kScore) {
  const d1 = average(dScore);
  const k1 = average(kScore);
  const isDolphinEligible = isEligible(dScore);
  const isKoalaEligible = isEligible(kScore);
  console.log('--------------------------------------------------------');
  console.log(`dolphins score - ${d1} `);
  console.log(`kolas score - ${k1}`);

  if (isDolphinEligible && d1 > k1) {
    console.log(`dolphins are the winner by ${(d1 - k1).toFixed(2)} score`);
  } else if (isKoalaEligible && k1 > d1) {
    console.log(`koalar are the winner by ${(k1 - d1).toFixed(2)} score`);
  } else if (d1 == k1 && isDolphinEligible && isKoalaEligible) {
    console.log(`Match tied, dolphins and koalas have same score - ${d1}`);
  } else {
    console.log(
      `No one is winner, dolphin's score(${d1}) & koala's score(${k1})`
    );
  }
}

function average(arr) {
  const sum = arr.reduce((sum, i) => sum + i, 0);
  return (sum / arr.length).toFixed(2);
}

function isEligible(s) {
  const above100 = s.filter((i) => i > 100);
  return above100.length > 0 ? true : false;
}

// CHALLENGE 4:

function calculateTip(amount) {
  const tipPercent = amount >= 50 && amount <= 300 ? 15 : 20;
  const tipAmount = (tipPercent / 100) * amount;
  console.log(
    `For amount ${amount}, the tip was ${tipAmount} and the total amount is ${
      amount + tipAmount
    }`
  );
}

// calculateTip(275);
// calculateTip(40);
// calculateTip(430);

// CHALLENGE 5:
function checkWinner2(d, k) {
  const dolphinAverage = average(d);
  const koalasAverage = average(k);

  if (dolphinAverage >= koalasAverage * 2) {
    console.log(`dolphins win(${dolphinAverage} vs ${koalasAverage})`);
  } else if (koalasAverage > dolphinAverage * 2) {
    console.log(`koalas win(${koalasAverage} vs ${dolphinAverage})`);
  } else {
    console.log('no winner');
  }
}

const dolphin = [
  [44, 23, 71],
  [85, 54, 41],
];
const koala = [
  [65, 54, 49],
  [23, 34, 27],
];

// checkWinner2(dolphin[0], koala[0]);
// checkWinner2(dolphin[1], koala[1]);
// checkWinner2()

// ---------- CHALLENGE 6

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calculateTip1(amount, tips, totals) {
  const tipPercent = amount >= 50 && amount <= 300 ? 15 : 20;
  const tipAmount = (tipPercent / 100) * amount;
  const totalAmount = amount + tipAmount;
  tips.push(tipAmount);
  totals.push(totalAmount);
}

bills.map((amount) => calculateTip1(amount, tips, totals));
const averageTips = average(tips);
// const averageTotals = average(totals);
// console.log(tips);
// console.log(totals);
// console.log(`Average tip is ${averageTips}`);
// console.log(`Average total is ${averageTotals}`);

// CHALLENGE 7:

function printTemp(arr) {
  let day = 1;
  const celcius = '\u00B0C';

  arr.map((temp) =>
    process.stdout.write(`... ${temp}${celcius} in ${day}days`)
  );
  console.log();
}

const set1 = [17, 21, 23];
const set2 = [12, 5, -5, 0, 4];
printTemp(set1);
printTemp(set2);
