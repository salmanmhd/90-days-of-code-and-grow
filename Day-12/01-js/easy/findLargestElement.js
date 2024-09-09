/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let ans = numbers[0];
  numbers.map((n) => {
    if (n > ans) {
      ans = n;
    }
  });
  return ans;
}

module.exports = findLargestElement;
