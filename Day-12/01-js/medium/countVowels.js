/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// APPROACH 1:
function countVowels1(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (
      letter == 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count++;
    }
  }

  return count;
}

// APPROACH 2:
function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (const letter of str.toLowerCase()) {
    if (vowels.has(letter)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
