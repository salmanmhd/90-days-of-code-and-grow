const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Destructuring the array
const [first, second, third, ...rest] = arr;
// console.log(rest);

const arr2 = [...arr, 'New array'];
const arr3 = ['Numbers: ', ...arr];
// console.log(arr3);

const newArr = [5, 3, 7, 2, 31, 98, 90];
console.log(newArr.join('-'));

// console.log(newArr.sort());
// console.log(newArr.sort((a, b) => a - b));
// console.log(newArr.sort((a, b) => b - a));
// console.log(newArr.sort(1));

const str = ['Hi there', 'patna', 'mumbai', 'parantha', 'bombay', 'salman'];
console.log(str.sort());

const str1 = ' hi there!  ';
console.log(str1);
console.log(str1.trim());

const a = 'there are so many flowers in the garden, flowers look amazing';

console.log(a.replaceAll('flowers', 'fruits'));

function capitalizeFirstWord(str) {
  const strArr = str.split(' ');
  const ans = [];
  ans.push(strArr.map((word) => word[0].toUpperCase() + word.slice(1)));
}

const abc = capitalizeFirstWord('mohammad salman');
console.log(abc);
